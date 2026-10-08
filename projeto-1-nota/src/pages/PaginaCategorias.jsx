import TituloPagina from "../componentes/TituloPagina";
import FormularioCategoria from "../componentes/FormularioCategoria";
import ListaCategorias from "../componentes/ListaCategorias";

function PaginaCategorias({
  categorias,
  movimentacoes,
  adicionarCategoria,
  excluirCategoria,
}) {
  return (
    <>
      <TituloPagina
        titulo="Categorias"
        subtitulo="Cadastre as categorias que você usa nas suas receitas e despesas"
      />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <FormularioCategoria adicionarCategoria={adicionarCategoria} />

        <ListaCategorias
          titulo="Categorias de receita"
          tipo="receita"
          categorias={categorias}
          movimentacoes={movimentacoes}
          excluirCategoria={excluirCategoria}
        />

        <ListaCategorias
          titulo="Categorias de despesa"
          tipo="despesa"
          categorias={categorias}
          movimentacoes={movimentacoes}
          excluirCategoria={excluirCategoria}
        />
      </section>
    </>
  );
}

export default PaginaCategorias;
