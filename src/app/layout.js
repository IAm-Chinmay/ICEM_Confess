export const metadata = {
  title: "GHOST",
  description: "Generated by Next.js",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "0px",
          padding: "0px",
          backgroundColor: "#121212",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
