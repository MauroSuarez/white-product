import AppLayout from "@/presentation/layouts/app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'a ver',
};

export default function Layout({
  children
}: { children: React.ReactNode }) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}