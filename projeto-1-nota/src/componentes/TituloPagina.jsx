function TituloPagina({ titulo, subtitulo, children }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{titulo}</h2>
        <p className="text-sm text-gray-500">{subtitulo}</p>
      </div>

      {children}
    </div>
  );
}

export default TituloPagina;
