// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Path Walking Technology</title>
        <meta name="description" content="Conoce a Path Walking Technology, tu aliado en soluciones tecnológicas innovadoras y personalizadas para el crecimiento digital." />
      </Head>

      <main className="p-6 bg-gray-50 text-gray-800">
        {/* Header */}
        <section className="text-center mt-10 mb-10">
          <h1 className="text-4xl font-bold text-blue-600">En Path, impulsamos tu negocio con tecnología y IA</h1>
          <p className="mt-4 text-lg text-gray-700">
            Nos convertimos en tu aliado estratégico para el crecimiento, combinando innovación y personalización en cada proyecto.
          </p>
        </section>

        {/* Historia */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Nuestra Historia</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Desde el comienzo, en Path hemos tenido una meta clara: ser el socio tecnológico de confianza que impulsa a las empresas hacia el futuro. A través de la adaptación constante a los avances tecnológicos, nuestro compromiso permanece firme en ayudar a cada cliente a alcanzar sus objetivos.
          </p>
        </section>

        {/* Misión */}
        <section className="mb-10 bg-gray-50 p-6 rounded-md">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Nuestra Misión</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Proporcionar soluciones tecnológicas inteligentes y a la medida que permitan a las empresas innovar, expandirse y destacarse en un entorno digital en constante cambio.
          </p>
        </section>

        {/* Valores */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Nuestros Valores</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white shadow-md p-6 rounded-md text-center">
              <h3 className="font-semibold text-lg text-blue-600">Innovación</h3>
              <p className="text-gray-600 mt-2">Aplicamos tecnología de punta y recursos de inteligencia artificial para asegurar que nuestros clientes estén siempre un paso adelante.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md text-center">
              <h3 className="font-semibold text-lg text-blue-600">Excelencia</h3>
              <p className="text-gray-600 mt-2">Trabajamos para superar expectativas, entregando resultados medibles y sostenibles en cada proyecto.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md text-center">
              <h3 className="font-semibold text-lg text-blue-600">Integridad</h3>
              <p className="text-gray-600 mt-2">Operamos con transparencia y ética, construyendo relaciones basadas en la confianza y el respeto mutuo.</p>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">¿Listo para potenciar tu negocio con Path?</h2>
          <p className="text-gray-700 mb-6">Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel con soluciones tecnológicas a medida.</p>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Contáctanos
          </Link>
        </section>
      </main>
    </>
  );
}
