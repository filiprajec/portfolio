import { basteleur, compagnon, picnic } from "@/app/fonts";

const fontFamilies: {
  [key: string]: string;
} = {
  basteleur: basteleur.style.fontFamily,
  compagnon: compagnon.style.fontFamily,
  picnic: picnic.style.fontFamily,
};

export function withFont(text: string) {
  const fontRegex = /<font="([^>]*)">([^>]*)<\/font>/g;

  return text.replace(fontRegex, (match, fontName, text) => {
    const fontFamily: string = fontFamilies[fontName];
    if (!fontFamily) {
      throw new Error(`Font "${fontName}" not recognized.`);
    }
    return `<span style="font-family: ${fontFamily}">${text}</span>`;
  });
}
