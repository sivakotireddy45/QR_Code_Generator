const generateBtn = document.getElementById("generate-btn");
const textInput = document.getElementById("text-input");
const qrBox = document.getElementById("qr-box");
const qrCodeDiv = document.getElementById("qrcode");
const downloadBtn = document.getElementById("download-btn");

let qr;

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (!text) {
    alert("Please enter some text or a link!");
    return;
  }

  qrBox.classList.remove("hidden");
  qrCodeDiv.innerHTML = ""; // Clear old QR

  qr = new QRCode(qrCodeDiv, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#ffffff",
    colorLight: "transparent",
    correctLevel: QRCode.CorrectLevel.H
  });
});

// Download QR Code as image
downloadBtn.addEventListener("click", () => {
  const qrCanvas = qrCodeDiv.querySelector("canvas");
  if (qrCanvas) {
    const link = document.createElement("a");
    link.download = "QRCode.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
  } else {
    alert("Please generate a QR code first!");
  }
});
