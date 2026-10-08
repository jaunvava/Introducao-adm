import { Trash2 } from "lucide-react";
import { Button } from "@/componentes/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentes/ui/card";

function ListaCategorias({
  titulo,
  tipo,
  categorias,
  movimentacoes,
  excluirCategoria,
}) {
  const categoriasDoTipo = categorias.filter((item) => item.tipo === tipo);

  function contarUso(categoria) {
    const usadas = movimentacoes.filter(
      (item) =>
        item.tipo === categoria.tipo && item.categoria === categoria.nome,
    );
    return usadas.length;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {titulo} ({categoriasDoTipo.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {categoriasDoTipo.length === 0 ? (
          <p className="text-center text-gray-500 py-6">
            Nenhuma categoria cadastrada
          </p>
        ) : (
          <ul className="divide-y">
            {categoriasDoTipo.map((categoria) => (
              <li
                key={categoria.id}
                className="flex items-center justify-between py-2"
              >
                <span>
                  {categoria.nome}
                  <span className="text-xs text-gray-400 ml-2">
                    {contarUso(categoria)} mov.
                  </span>
                </span>

                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-gray-400 hover:text-red-600"
                  title="Excluir categoria"
                  onClick={() => excluirCategoria(categoria)}
                >
                  <Trash2 />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default ListaCategorias;
