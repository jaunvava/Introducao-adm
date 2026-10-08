import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/componentes/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentes/ui/card";
import { Input } from "@/componentes/ui/input";
import { mostrarErro } from "@/utilitarios/alertas";

function FormularioCategoria({ adicionarCategoria }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");

  async function enviarFormulario(e) {
    e.preventDefault();

    if (nome.trim() === "") {
      mostrarErro("Digite o nome da categoria!");
      return;
    }

    if (nome.trim().length < 3) {
      mostrarErro("O nome da categoria precisa ter pelo menos 3 letras.");
      return;
    }

    if (tipo === "") {
      mostrarErro("Escolha se a categoria é de receita ou de despesa.");
      return;
    }

    const novaCategoria = {
      id: Date.now(),
      nome: nome.trim(),
      tipo: tipo,
    };

    const cadastrou = await adicionarCategoria(novaCategoria);

    if (cadastrou) {
      setNome("");
      setTipo("");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Nova categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium">
            Nome
            <Input
              name="nomeCategoria"
              placeholder="Ex: Academia"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Tipo
            <select
              name="tipoCategoria"
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">Selecione o tipo</option>
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
            </select>
          </label>

          <Button
            type="submit"
            className="bg-[#2D323E] hover:bg-[#3D4352] text-white mt-2"
          >
            <PlusCircle /> Cadastrar categoria
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormularioCategoria;
