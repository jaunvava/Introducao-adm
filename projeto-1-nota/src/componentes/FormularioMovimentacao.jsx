import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/componentes/ui/button";
import { Input } from "@/componentes/ui/input";
import { Label } from "@/componentes/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/componentes/ui/select";
import { mostrarErro } from "@/utilitarios/alertas";

function FormularioMovimentacao({ adicionarMovimentacao, categorias }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");

  const listaCategorias = categorias.filter((item) => item.tipo === tipo);

  let textoCategoria = "Selecione a categoria";
  if (tipo === "") {
    textoCategoria = "Escolha o tipo primeiro";
  } else if (listaCategorias.length === 0) {
    textoCategoria = "Nenhuma categoria cadastrada";
  }

  function mudarDescricao(e) {
    setDescricao(e.target.value);
  }

  function mudarTipo(novoTipo) {
    setTipo(novoTipo);
    setCategoria("");
  }

  function limparFormulario() {
    setDescricao("");
    setValor("");
    setTipo("");
    setCategoria("");
  }

  async function enviarFormulario(e) {
    e.preventDefault();

    if (descricao.trim() === "") {
      mostrarErro("Preencha a descrição da movimentação!");
      return;
    }

    if (descricao.trim().length < 3) {
      mostrarErro("A descrição precisa ter pelo menos 3 letras.");
      return;
    }

    if (valor === "") {
      mostrarErro("Informe o valor!");
      return;
    }

    const valorNumero = Number(valor);

    if (isNaN(valorNumero) || valorNumero <= 0) {
      mostrarErro("O valor precisa ser maior que zero.");
      return;
    }

    if (tipo === "") {
      mostrarErro("Escolha se é uma receita ou uma despesa.");
      return;
    }

    if (categoria === "") {
      mostrarErro("Escolha uma categoria.");
      return;
    }

    const novaMovimentacao = {
      id: Date.now(),
      descricao: descricao.trim(),
      valor: valorNumero,
      tipo: tipo,
      categoria: categoria,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    const cadastrou = await adicionarMovimentacao(novaMovimentacao);

    if (cadastrou) {
      limparFormulario();
    }
  }

  return (
    <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="descricao">Descrição</Label>
        <Input
          id="descricao"
          name="descricao"
          placeholder="Ex: Conta de luz"
          value={descricao}
          onChange={mudarDescricao}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="valor">Valor (R$)</Label>
        <Input
          id="valor"
          name="valor"
          type="number"
          step="0.01"
          min="0"
          placeholder="0,00"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="tipo">Tipo</Label>
        <Select value={tipo} onValueChange={mudarTipo}>
          <SelectTrigger id="tipo" className="w-full">
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="receita">Receita</SelectItem>
            <SelectItem value="despesa">Despesa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="categoria">Categoria</Label>
        <Select
          value={categoria}
          onValueChange={setCategoria}
          disabled={listaCategorias.length === 0}
        >
          <SelectTrigger id="categoria" className="w-full">
            <SelectValue placeholder={textoCategoria} />
          </SelectTrigger>
          <SelectContent>
            {listaCategorias.map((item) => (
              <SelectItem key={item.id} value={item.nome}>
                {item.nome}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="bg-[#2D323E] hover:bg-[#3D4352] text-white mt-2"
      >
        <PlusCircle /> Cadastrar
      </Button>
    </form>
  );
}

export default FormularioMovimentacao;
