import { NavLink } from "react-router-dom";
import { History, LayoutDashboard, Tags } from "lucide-react";

const linksMenu = [
  {
    caminho: "/",
    texto: "Início",
    icone: <LayoutDashboard className="size-5" />,
  },
  {
    caminho: "/historico",
    texto: "Histórico",
    icone: <History className="size-5" />,
  },
  {
    caminho: "/categorias",
    texto: "Categorias",
    icone: <Tags className="size-5" />,
  },
];

function BarraLateral() {
  return (
    <aside className="bg-[#2D323E] text-white md:w-60 md:h-screen md:sticky md:top-0 shrink-0">
      <div className="flex items-center gap-2 px-5 py-5 border-b border-white/10">
        <img src="/logo.svg" alt="Logo" className="size-8" />
        <div>
          <h1 className="font-bold leading-tight">Controle Financeiro</h1>
        </div>
      </div>

      <nav className="flex md:flex-col gap-1 p-3">
        {linksMenu.map((link) => (
          <NavLink
            key={link.caminho}
            to={link.caminho}
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-md px-3 py-2 bg-white text-[#2D323E] font-semibold"
                : "flex items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
            }
          >
            {link.icone}
            {link.texto}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default BarraLateral;
