// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Path Walking Technology - Desarrollamos Web Apps Personalizadas para tu Negocio</title>
        <meta name="description" content="Path Walking Technology: líderes en desarrollo de Web Apps personalizadas en Argentina. Soluciones tecnológicas accesibles, escalables y con soporte continuo para impulsar tu negocio." />
        <meta name="keywords" content="Path Walking Technology, desarrollo web, Web Apps personalizadas, aplicaciones escalables, tecnología, soporte y mantenimiento, presencia digital, inteligencia artificial" />
        <meta name="author" content="Path Walking Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Path Walking Technology - Desarrollamos Web Apps Personalizadas para tu Negocio" />
        <meta property="og:description" content="Potencia tu presencia digital con aplicaciones accesibles en cualquier dispositivo, diseñadas a medida para adaptarse y crecer con tu negocio." />
        <meta property="og:image" content="/logo.png" /> {/* Reemplaza con una imagen válida */}
        <meta property="og:url" content="https://pathweb.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      
      <main className="p-6 bg-gray-50 text-gray-800">
        <section className="text-center mt-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Desarrollamos Web Apps personalizadas para tu negocio</h1>
          <p className="text-lg leading-relaxed">
            En <span className="font-semibold text-blue-600">Path Walking Technology</span>, potenciamos negocios con tecnología innovadora y soluciones de inteligencia artificial. Creemos en aplicaciones escalables que crecen con tu empresa, ofreciendo soporte y mantenimiento continuo.
          </p>
        </section>

        <section className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">¿Por qué una Web App es clave para tu negocio?</h2>
          <ul className="text-lg space-y-4 px-4 list-disc list-inside">
            <li>
              <span className="font-semibold">Accesible en cualquier dispositivo:</span> tu aplicación estará disponible para usuarios de móvil, tablet y desktop.
            </li>
            <li>
              <span className="font-semibold">Escalable y flexible:</span> las Web Apps crecen contigo, adaptándose a las necesidades de tu negocio.
            </li>
            <li>
              <span className="font-semibold">Soporte y mantenimiento continuo:</span> nos encargamos de mantener tu Web App al día y funcionando perfectamente.
            </li>
          </ul>
        </section>

        <section className="mt-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Inteligencia Artificial: un valor añadido para tu negocio</h2>
          <p className="text-lg leading-relaxed">
            En <span className="font-semibold text-blue-600">Path</span>, integramos IA en nuestras soluciones para ofrecer a nuestros clientes una ventaja competitiva única. Desde recursos gratuitos hasta APIs de IA, optimizamos la eficiencia operativa y mejoramos la experiencia de usuario, generando un impacto real en los resultados de negocio.
          </p>
        </section>
        {/* Botón de WhatsApp */}
        <section className="fixed bottom-4 right-4">
          <a
            href="https://wa.me/5493764617711"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6 mr-2" /> {/* Reemplaza con el icono de WhatsApp en tu proyecto */}
            Contáctanos por WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}
