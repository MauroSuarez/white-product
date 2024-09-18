import { Navbar } from "./Navbar";
import { Footer } from './Footer';

export default function LandingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
