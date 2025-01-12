import type { Metadata } from "next";
import { Header } from "@/src/components/shared";

export const metadata: Metadata = {
  title: "Next Pizza | Home",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {modal}
      {children}
    </main>
  );
}
