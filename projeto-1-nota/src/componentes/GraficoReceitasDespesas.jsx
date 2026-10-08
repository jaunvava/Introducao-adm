import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentes/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoReceitasDespesas({ totalReceitas, totalDespesas }) {
  const dados = {
    labels: ["Receitas", "Despesas"],
    datasets: [
      {
        data: [totalReceitas, totalDespesas],
        backgroundColor: ["#16a34a", "#dc2626"],
        borderWidth: 2,
      },
    ],
  };

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Receitas x Despesas</CardTitle>
      </CardHeader>
      <CardContent>
        {totalReceitas === 0 && totalDespesas === 0 ? (
          <p className="text-center text-gray-500 py-16">
            Cadastre alguma movimentação pra ver o gráfico
          </p>
        ) : (
          <div className="h-64">
            <Doughnut data={dados} options={opcoes} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default GraficoReceitasDespesas;
