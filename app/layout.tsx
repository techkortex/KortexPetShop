import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KortexPetShop — cuidado que dá vontade de abanar',
  description: 'Petshop, clínica veterinária, banho e tosa, hotel e creche em São Paulo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
