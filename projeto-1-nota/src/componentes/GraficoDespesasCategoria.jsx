import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentes/ui/card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function GraficoDespesasCategoria({ movimentacoes }) {
  const despesas = movimentacoes.filter((item) => item.tipo === "despesa");

  const totalPorCategoria = {};
  despesas.forEach((item) => {
    if (totalPorCategoria[item.categoria]) {
      totalPorCategoria[item.categoria] += item.valor;
    } else {
      totalPorCategoria[item.categoria] = item.valor;
    }
  });

  const dados = {
    labels: Object.keys(totalPorCategoria),
    datasets: [
      {
        label: "Gasto (R$)",
        data: Object.values(totalPorCategoria),
        backgroundColor: "#f87171",
        borderColor: "#dc2626",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Despesas por categoria</CardTitle>
      </CardHeader>
      <CardContent>
        {despesas.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            Nenhuma despesa cadastrada ainda
          </p>
        ) : (
          <div className="h-64">
            <Bar data={dados} options={opcoes} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default GraficoDespesasCategoria;
