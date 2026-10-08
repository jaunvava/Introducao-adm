import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./layout/LayoutPrincipal";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaHistorico from "./pages/PaginaHistorico";
import PaginaCategorias from "./pages/PaginaCategorias";
import { categoriasPadrao } from "./utilitarios/categorias";
import {
  confirmarAcao,
  mostrarAviso,
  mostrarErro,
  mostrarSucesso,
} from "./utilitarios/alertas";

function carregarMovimentacoes() {
  const dadosSalvos = localStorage.getItem("movimentacoes");

  if (dadosSalvos) {
    return JSON.parse(dadosSalvos);
  }

  return [];
}

function carregarCategorias() {
  const dadosSalvos = localStorage.getItem("categorias");

  if (dadosSalvos) {
    return JSON.parse(dadosSalvos);
  }

  return categoriasPadrao;
}

function App() {
  const [movimentacoes, setMovimentacoes] = useState(carregarMovimentacoes);
  const [categorias, setCategorias] = useState(carregarCategorias);

  useEffect(() => {
    localStorage.setItem("movimentacoes", JSON.stringify(movimentacoes));
  }, [movimentacoes]);

  useEffect(() => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  }, [categorias]);

  let totalReceitas = 0;
  let totalDespesas = 0;

  movimentacoes.forEach((item) => {
    if (item.tipo === "receita") {
      totalReceitas += item.valor;
    } else {
      totalDespesas += item.valor;
    }
  });

  const saldo = totalReceitas - totalDespesas;

  async function adicionarMovimentacao(novaMovimentacao) {
    if (
      novaMovimentacao.tipo === "despesa" &&
      saldo - novaMovimentacao.valor < 0
    ) {
      const confirmou = await confirmarAcao(
        "Saldo vai ficar negativo!",
        "Essa despesa vai deixar seu saldo no vermelho. Quer cadastrar mesmo assim?",
        "Sim, cadastrar",
      );

      if (!confirmou) {
        return false;
      }
    }

    setMovimentacoes([novaMovimentacao, ...movimentacoes]);
    mostrarSucesso("Movimentação cadastrada!");
    return true;
  }

  async function excluirMovimentacao(movimentacao) {
    const confirmou = await confirmarAcao(
      "Excluir movimentação?",
      `Você quer mesmo excluir "${movimentacao.descricao}"?`,
      "Sim, excluir",
    );

    if (confirmou) {
      const novaLista = movimentacoes.filter(
        (item) => item.id !== movimentacao.id,
      );
      setMovimentacoes(novaLista);
      mostrarSucesso("Movimentação excluída!");
    }
  }

  async function limparTudo() {
    if (movimentacoes.length === 0) {
      mostrarAviso("Lista vazia", "Não tem nenhuma movimentação para apagar.");
      return;
    }

    const confirmou = await confirmarAcao(
      "Apagar tudo?",
      "Todas as movimentações serão apagadas e não dá pra desfazer!",
      "Sim, apagar tudo",
    );

    if (confirmou) {
      setMovimentacoes([]);
      mostrarSucesso("Tudo apagado!");
    }
  }

  async function adicionarCategoria(novaCategoria) {
    const jaExiste = categorias.find(
      (item) =>
        item.tipo === novaCategoria.tipo &&
        item.nome.toLowerCase() === novaCategoria.nome.toLowerCase(),
    );

    if (jaExiste) {
      mostrarErro(`Já existe a categoria "${novaCategoria.nome}" nesse tipo!`);
      return false;
    }

    setCategorias([...categorias, novaCategoria]);
    mostrarSucesso("Categoria cadastrada!");
    return true;
  }

  async function excluirCategoria(categoria) {
    const quantidadeUsando = movimentacoes.filter(
      (item) =>
        item.tipo === categoria.tipo && item.categoria === categoria.nome,
    ).length;

    if (quantidadeUsando > 0) {
      mostrarErro(
        `Não dá pra excluir "${categoria.nome}" porque ela está sendo usada em ${quantidadeUsando} movimentação(ões).`,
      );
      return;
    }

    const confirmou = await confirmarAcao(
      "Excluir categoria?",
      `Você quer mesmo excluir a categoria "${categoria.nome}"?`,
      "Sim, excluir",
    );

    if (confirmou) {
      const novaLista = categorias.filter((item) => item.id !== categoria.id);
      setCategorias(novaLista);
      mostrarSucesso("Categoria excluída!");
    }
  }

  return (
    <BrowserRouter>
      <LayoutPrincipal>
        <Routes>
          <Route
            path="/"
            element={
              <PaginaInicial
                movimentacoes={movimentacoes}
                categorias={categorias}
                saldo={saldo}
                totalReceitas={totalReceitas}
                totalDespesas={totalDespesas}
                adicionarMovimentacao={adicionarMovimentacao}
              />
            }
          />
          <Route
            path="/historico"
            element={
              <PaginaHistorico
                movimentacoes={movimentacoes}
                categorias={categorias}
                adicionarMovimentacao={adicionarMovimentacao}
                excluirMovimentacao={excluirMovimentacao}
                limparTudo={limparTudo}
              />
            }
          />
          <Route
            path="/categorias"
            element={
              <PaginaCategorias
                categorias={categorias}
                movimentacoes={movimentacoes}
                adicionarCategoria={adicionarCategoria}
                excluirCategoria={excluirCategoria}
              />
            }
          />
        </Routes>
      </LayoutPrincipal>
    </BrowserRouter>
  );
}

export default App;
