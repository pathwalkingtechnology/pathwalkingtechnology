// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center text-white">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Nosotros</Link></li>
        <li><Link href="/services">Servicios</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}
