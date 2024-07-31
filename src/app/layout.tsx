import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Wellington Junio | Desenvolvedor Full Stack',
  description: 'Portfólio de Wellington Junio, Desenvolvedor Full Stack',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-center space-x-8">
        <Link href="/" className="text-xl text-gray-600 hover:text-gray-800">Home</Link>
        <Link href="/about" className="text-xl text-gray-600 hover:text-gray-800">Sobre Mim</Link>
        <Link href="/projects" className="text-xl text-gray-600 hover:text-gray-800">Projetos</Link>
        <Link href="/contact" className="text-xl text-gray-600 hover:text-gray-800">Contato</Link>
      </nav>
    </header>
  );
}
