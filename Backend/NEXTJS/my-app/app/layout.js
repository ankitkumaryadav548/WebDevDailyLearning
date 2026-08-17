import "./globals.css";
import Navbar from "./component/navbar";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body className="min-h-full flex flex-col">{children}
        <Navbar/>
      </body>
    </html>
  );
}
