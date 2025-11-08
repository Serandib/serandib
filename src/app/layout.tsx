import { sans3 } from "@/styles/fonts/fonts";
import "./globals.css";

import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head></head>
      <body className={cn("relative h-full antialiased", sans3.className)}>
        <main
          vaul-drawer-wrapper=""
          className="z-20 relative flex flex-col min-h-screen bg-gray-0"
        >
          {" "}
          <Navbar />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
