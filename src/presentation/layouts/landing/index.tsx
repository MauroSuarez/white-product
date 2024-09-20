import { Navbar } from "./Navbar";
import { Footer } from './Footer';

export default function LandingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-full w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
