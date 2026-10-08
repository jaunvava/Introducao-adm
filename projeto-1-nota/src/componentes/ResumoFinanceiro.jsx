import CardResumo from "./CardResumo";

function ResumoFinanceiro({ saldo, totalReceitas, totalDespesas }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CardResumo
        titulo="Saldo total"
        valor={saldo}
        corTexto={saldo >= 0 ? "text-gray-800" : "text-red-600"}
      />
      <CardResumo
        titulo="Receitas"
        valor={totalReceitas}
        corTexto="text-green-600"
      />
      <CardResumo
        titulo="Despesas"
        valor={totalDespesas}
        corTexto="text-red-600"
      />
    </section>
  );
}

export default ResumoFinanceiro;
