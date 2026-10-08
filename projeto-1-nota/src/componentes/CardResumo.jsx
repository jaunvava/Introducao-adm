import { Card, CardContent } from "@/componentes/ui/card";
import { formatarMoeda } from "@/utilitarios/formatarMoeda";

function CardResumo({ titulo, valor, corTexto }) {
  return (
    <Card>
      <CardContent>
        <p className="text-sm text-gray-500">{titulo}</p>
        <p className={`text-2xl font-bold ${corTexto}`}>
          {formatarMoeda(valor)}
        </p>
      </CardContent>
    </Card>
  );
}

export default CardResumo;
