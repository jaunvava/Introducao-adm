import TituloPagina from "../componentes/TituloPagina";
import ModalNovaMovimentacao from "../componentes/ModalNovaMovimentacao";
import ListaMovimentacoes from "../componentes/ListaMovimentacoes";

function PaginaHistorico({
  movimentacoes,
  categorias,
  adicionarMovimentacao,
  excluirMovimentacao,
  limparTudo,
}) {
  return (
    <>
      <TituloPagina
        titulo="Histórico de movimentações"
        subtitulo="Todas as receitas e despesas que você cadastrou"
      >
        <ModalNovaMovimentacao
          adicionarMovimentacao={adicionarMovimentacao}
          categorias={categorias}
        />
      </TituloPagina>

      <ListaMovimentacoes
        movimentacoes={movimentacoes}
        excluirMovimentacao={excluirMovimentacao}
        limparTudo={limparTudo}
      />
    </>
  );
}

export default PaginaHistorico;
