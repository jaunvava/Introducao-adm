import TituloPagina from "../componentes/TituloPagina";
import ModalNovaMovimentacao from "../componentes/ModalNovaMovimentacao";
import ResumoFinanceiro from "../componentes/ResumoFinanceiro";
import GraficoReceitasDespesas from "../componentes/GraficoReceitasDespesas";
import GraficoDespesasCategoria from "../componentes/GraficoDespesasCategoria";

function PaginaInicial({
  movimentacoes,
  categorias,
  saldo,
  totalReceitas,
  totalDespesas,
  adicionarMovimentacao,
}) {
  return (
    <>
      <TituloPagina titulo="Início" subtitulo="Veja como estão suas finanças">
        <ModalNovaMovimentacao
          adicionarMovimentacao={adicionarMovimentacao}
          categorias={categorias}
        />
      </TituloPagina>

      <ResumoFinanceiro
        saldo={saldo}
        totalReceitas={totalReceitas}
        totalDespesas={totalDespesas}
      />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GraficoReceitasDespesas
          totalReceitas={totalReceitas}
          totalDespesas={totalDespesas}
        />
        <GraficoDespesasCategoria movimentacoes={movimentacoes} />
      </section>
    </>
  );
}

export default PaginaInicial;
