// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background p-4 border-b border-gray-200">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">
          <Link href="/">Path Walking Technology</Link>
        </h1>
        <ul className="flex space-x-6 text-foreground">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/services">Servicios</Link></li>
          <li><Link href="/about">Nosotros</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
