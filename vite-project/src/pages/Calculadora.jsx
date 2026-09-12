export default function Calcula() {
  const calcular = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
      case "soma":
        resultado = num1 + num2;
        break;
      case "subtracao":
        resultado = num1 - num2;
        break;
      case "multiplicacao":
        resultado = num1 * num2;
        break;
      case "divisao":
        resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        break;
      default:
        resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input id="num1" type="number" />
      <select id="operacao" defaultValue="soma">
        <option value="soma">Soma</option>
        <option value="subtracao">Subtração</option>
        <option value="multiplicacao">Multiplicação</option>
        <option value="divisao">Divisão</option>
      </select>
      <input id="num2" type="number" />
      <button type="button" onClick={calcular}>
        Calcular
      </button>
      <p id="resultado"></p>
    </div>
  );
}
