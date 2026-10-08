import BarraLateral from "../componentes/BarraLateral";
import Rodape from "../componentes/Rodape";

function LayoutPrincipal({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <BarraLateral />

      <div className="flex-1 min-w-0 flex flex-col">
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6">
          {children}
        </main>

        <Rodape />
      </div>
    </div>
  );
}

export default LayoutPrincipal;
