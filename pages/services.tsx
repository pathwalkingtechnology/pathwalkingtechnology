// pages/services.tsx
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Path Walking Technology - Servicios</title>
        <meta name="description" content="Explora nuestros servicios de desarrollo web y soluciones tecnológicas" />
      </Head>
      <main className="p-6 bg-gray-50 text-gray-800">
        <h1 className="text-4xl font-bold text-center mt-10">Nuestros Servicios</h1>
        <ul className="mt-8 text-center">
          <li>Desarrollo de sitios web institucionales</li>
          <li>Tiendas en línea (E-commerce)</li>
          <li>Aulas virtuales y CMS</li>
          <li>Soluciones personalizadas</li>
        </ul>
      </main>
    </>
  );
}
