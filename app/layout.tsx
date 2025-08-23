export const metadata = {
  title: "Itumeleng RJ Modikoe — Portfolio",
  description: "BI-focused portfolio for Itumeleng RJ Modikoe",
};
import "./globals.css";
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="en"><body>{children}</body></html>);
}
