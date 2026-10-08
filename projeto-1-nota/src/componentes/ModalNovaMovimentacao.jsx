import { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { Button } from "@/componentes/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentes/ui/card";
import FormularioMovimentacao from "./FormularioMovimentacao";

function ModalNovaMovimentacao({ adicionarMovimentacao, categorias }) {
  const [aberto, setAberto] = useState(false);

  function abrirModal() {
    setAberto(true);
  }

  function fecharModal() {
    setAberto(false);
  }

  async function cadastrar(novaMovimentacao) {
    const cadastrou = await adicionarMovimentacao(novaMovimentacao);

    if (cadastrou) {
      fecharModal();
    }

    return cadastrou;
  }

  return (
    <>
      <Button
        className="bg-[#2D323E] hover:bg-[#3D4352] text-white"
        onClick={abrirModal}
      >
        <PlusCircle /> Nova movimentação
      </Button>

      {aberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={fecharModal}
        >
          <Card
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Nova movimentação</CardTitle>
              <Button
                variant="ghost"
                size="icon-sm"
                title="Fechar"
                onClick={fecharModal}
              >
                <X />
              </Button>
            </CardHeader>
            <CardContent>
              <FormularioMovimentacao
                adicionarMovimentacao={cadastrar}
                categorias={categorias}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

export default ModalNovaMovimentacao;
