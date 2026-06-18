import { toPng } from "html-to-image";

export const downloadReceipt = async (elementId, filename = "receipt") => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Elemen dengan ID #${elementId} tidak ditemukan.`);
    return { success: false };
  }

  try {
    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#c4c2c2",
      fontEmbedCSS: "",
      skipFonts: true,
      style: {
        transform: "scale(1)",
        visibility: "visible",
        display: "block",
      },
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${filename}.png`;
    link.click();

    return { success: true };
  } catch (error) {
    console.error("Gagal mengunduh struk:", error);
    throw new Error("Gagal mengunduh struk.");
  }
};