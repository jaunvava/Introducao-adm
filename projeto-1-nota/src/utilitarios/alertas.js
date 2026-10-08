import Swal from "sweetalert2";

export function mostrarErro(mensagem) {
  return Swal.fire({
    icon: "error",
    title: "Opa!",
    text: mensagem,
    confirmButtonText: "Entendi",
    confirmButtonColor: "#dc2626",
  });
}

export function mostrarAviso(titulo, mensagem) {
  return Swal.fire({
    icon: "info",
    title: titulo,
    text: mensagem,
    confirmButtonText: "Ok",
    confirmButtonColor: "#2563eb",
  });
}

export function mostrarSucesso(mensagem) {
  return Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: mensagem,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
}

export async function confirmarAcao(titulo, mensagem, textoBotao) {
  const resultado = await Swal.fire({
    icon: "warning",
    title: titulo,
    text: mensagem,
    showCancelButton: true,
    confirmButtonText: textoBotao,
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    reverseButtons: true,
  });

  return resultado.isConfirmed;
}
