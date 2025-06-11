const form = document.getElementById("printForm");
const orderStatus = document.getElementById("orderStatus");
const cotizacion = document.getElementById("cotizacion");

function calcularCosto(threshold, escala, material) {
  let base = 500;
  if (material === "ABS") base += 200;
  if (material === "PETG") base += 300;
  if (material === "Resina") base += 500;
  let costo = base * escala + (threshold * 0.1);
  return Math.round(costo);
}

form.addEventListener("input", () => {
  const threshold = parseFloat(document.getElementById("threshold").value || 0);
  const escala = parseFloat(document.getElementById("escala").value || 1);
  const material = document.getElementById("material").value;
  if (material) {
    const costo = calcularCosto(threshold, escala, material);
    cotizacion.textContent = `Costo estimado: $${costo} MXN`;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const file = document.getElementById("dicomFile").files[0];
  const threshold = document.getElementById("threshold").value;
  const escala = document.getElementById("escala").value;
  const material = document.getElementById("material").value;

  if (!file) {
    alert("Por favor, selecciona un archivo DICOM.");
    return;
  }

  // Simula el envío del pedido
  orderStatus.textContent = "Procesando pedido...";

  // En un sistema real, aquí usarías fetch o FormData para enviar al backend
  setTimeout(() => {
    orderStatus.textContent = "Pedido en producción. Fecha estimada de entrega: 3 días hábiles.";
    alert("Pedido enviado. Recibirás un correo de confirmación.");
  }, 2000);
});
