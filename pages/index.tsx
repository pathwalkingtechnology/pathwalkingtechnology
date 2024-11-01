// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Path Walking Technology - Desarrollamos Web Apps Personalizadas para tu Negocio</title>
        <meta name="description" content="Path Walking Technology: líderes en desarrollo de Web Apps personalizadas en Argentina. Soluciones tecnológicas accesibles, escalables y con soporte continuo para impulsar tu negocio." />
        <meta name="keywords" content="Path Walking Technology, desarrollo web, Web Apps personalizadas, aplicaciones escalables, tecnología, soporte y mantenimiento, presencia digital" />
        <meta name="author" content="Path Walking Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Path Walking Technology - Desarrollamos Web Apps Personalizadas para tu Negocio" />
        <meta property="og:description" content="Potencia tu presencia digital con aplicaciones accesibles en cualquier dispositivo, diseñadas a medida para adaptarse y crecer con tu negocio." />
        <meta property="og:image" content="/images/og-image.png" /> {/* Reemplaza con una imagen válida */}
        <meta property="og:url" content="https://www.tudominio.com" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="p-6">
        <section className="text-center mt-10">
          <h1 className="text-4xl font-bold">Desarrollamos Web Apps personalizadas para tu negocio</h1>
          <p className="mt-6 text-lg">Potencia tu presencia digital con soluciones a medida.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">¿Por qué una Web App es clave para tu negocio?</h2>
          <ul className="text-center space-y-4">
            <li>Accesible en cualquier dispositivo: tu aplicación estará disponible para usuarios de móvil, tablet y desktop.</li>
            <li>Escalable y flexible: las Web Apps crecen contigo, adaptándose a las necesidades de tu negocio.</li>
            <li>Soporte y mantenimiento continuo: nos encargamos de mantener tu Web App al día y funcionando perfectamente.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
