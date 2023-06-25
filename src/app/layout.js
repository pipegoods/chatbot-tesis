import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🤖 Chatbot Tesis",
  description: "Chatbot para ayudar a corregir tesis. Ejercicio practico."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}

        <script
          defer
          src="https://unpkg.com/@tinybirdco/flock.js"
          data-host="https://api.us-east.tinybird.co"
          data-token="p.eyJ1IjogIjZlODNkMWUyLTY3NzMtNDk2NC1iNTExLTEyODExMDIyOWE3NSIsICJpZCI6ICIxMWZlZDdiZS1hZWRiLTRjNGYtODg4NS1lNDhjMDIyYzc2ZTcifQ.cCMR7Fgl6hhBixkZsw8Y-OUNblyLLws3Q8BQeHO7emU"
        />
      </body>
    </html>
  );
}
