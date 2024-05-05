import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
export const karrik = localFont({
  src: "../assets/karrik/Karrik-Regular.woff2",
});
export const inter = Inter({ subsets: ["latin"] });
export const compagnon = localFont({
  src: "../assets/compagnon/Compagnon-Bold.woff2",
});
export const picnic = localFont({
  src: "../assets/picnic/PicNic-Regular.woff2",
});
export const basteleur = localFont({
  src: "../assets/basteleur/Basteleur-Bold.woff2",
});

export const BasteleurText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: basteleur.style.fontFamily }}>{children}</span>
);

export const CompagnonText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: compagnon.style.fontFamily }}>{children}</span>
);

export const PicnicText = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: picnic.style.fontFamily }}>{children}</span>
);
