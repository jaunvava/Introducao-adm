import { Trash2 } from "lucide-react";
import { Badge } from "@/componentes/ui/badge";
import { Button } from "@/componentes/ui/button";
import { TableCell, TableRow } from "@/componentes/ui/table";
import { formatarMoeda } from "@/utilitarios/formatarMoeda";

function ItemMovimentacao({ movimentacao, excluirMovimentacao }) {
  const ehReceita = movimentacao.tipo === "receita";

  function renderizarBadge() {
    if (ehReceita) {
      return <Badge className="bg-green-600 text-white rounded-sm">Receita</Badge>;
    }

    return <Badge className="bg-red-600 text-white rounded-sm">Despesa</Badge>;
  }

  return (
    <TableRow className={ehReceita ? "bg-green-50" : "bg-red-50"}>
      <TableCell className="font-medium">{movimentacao.descricao}</TableCell>
      <TableCell>{movimentacao.categoria}</TableCell>
      <TableCell>{renderizarBadge()}</TableCell>
      <TableCell
        className={`font-semibold ${ehReceita ? "text-green-700" : "text-red-700"}`}
      >
        {ehReceita ? "+ " : "- "}
        {formatarMoeda(movimentacao.valor)}
      </TableCell>
      <TableCell className="text-gray-500">{movimentacao.data}</TableCell>
      <TableCell className="text-right">
        <Button
          variant="destructive"
          size="icon-sm"
          title="Excluir"
          onClick={() => excluirMovimentacao(movimentacao)}
        >
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ItemMovimentacao;
