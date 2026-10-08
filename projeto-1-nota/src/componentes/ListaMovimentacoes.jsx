import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentes/ui/card";
import { Button } from "@/componentes/ui/button";
import { Input } from "@/componentes/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/componentes/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/componentes/ui/table";
import ItemMovimentacao from "./ItemMovimentacao";
import imagemListaVazia from "@/assets/listaVazia.svg";

function ListaMovimentacoes({
  movimentacoes,
  excluirMovimentacao,
  limparTudo,
}) {
  const [filtro, setFiltro] = useState("todas");
  const [busca, setBusca] = useState("");

  const movimentacoesFiltradas = movimentacoes.filter((item) => {
    if (filtro !== "todas" && item.tipo !== filtro) {
      return false;
    }

    return item.descricao.toLowerCase().includes(busca.toLowerCase());
  });

  return (
    <Card>
      <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3">
        <CardTitle className="text-lg">
          Movimentações ({movimentacoesFiltradas.length})
        </CardTitle>

        <div className="flex flex-wrap gap-2">
          <Input
            className="w-48"
            placeholder="Buscar pela descrição..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <Select value={filtro} onValueChange={setFiltro}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="receita">Só receitas</SelectItem>
              <SelectItem value="despesa">Só despesas</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={limparTudo}>
            Limpar tudo
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {movimentacoesFiltradas.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <img src={imagemListaVazia} alt="Lista vazia" className="w-40" />
            <p className="text-gray-500">Nenhuma movimentação por aqui ainda</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movimentacoesFiltradas.map((movimentacao) => (
                <ItemMovimentacao
                  key={movimentacao.id}
                  movimentacao={movimentacao}
                  excluirMovimentacao={excluirMovimentacao}
                />
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

export default ListaMovimentacoes;
