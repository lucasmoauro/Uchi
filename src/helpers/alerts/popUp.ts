import Swal, { type SweetAlertOptions } from "sweetalert2";

interface Props extends Pick<SweetAlertOptions, "title" | "text" | "icon"> {
  confirmButtonText?: string;
  cancelButtonText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  name?: string;
}
const firstText = "1. Abre WhatsApp y envianos un mensaje.";
const secondText = "2. Indicanos tu nombre completo y tu pedido.";
const thirdText = "3. ¡Así de fácil!";
export const popUp = ({
  title,
  text,
  icon,
  confirmButtonText,
  cancelButtonText,
  name,
}: Props) => {
  Swal.fire({
    title,
    text,
    icon,
    cancelButtonText,
    showCancelButton: true,
    confirmButtonText,
    confirmButtonColor: "#B3B792",
    cancelButtonColor: "#C58C6D",
    background: "#F1E3D3",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(
        `https://wa.me/+59898822947?text=Hola, realice un pedido a nombre de ${name}`,
        "_blank",
      );
      window.location.replace("/");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "¿Cómo completar tu pedido?",
        html: `<pre>${firstText}</pre> <pre>${secondText}</pre> <pre>${thirdText}</pre>`,
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#B3B792",
        background: "#F1E3D3",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace("/");
        }
      });
    }
  });
};
export const popUpAlert = ({
  title,
  text,
  icon,
  confirmButtonText,
  cancelButtonText,
  showCancelButton,
  showConfirmButton,
}: Props) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton,
    showCancelButton,
    cancelButtonText,
    cancelButtonColor: "#B3B792",
    confirmButtonText,
    confirmButtonColor: "#B3B792",
    background: "#F1E3D3",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("/pedido");
    }
  });
};
