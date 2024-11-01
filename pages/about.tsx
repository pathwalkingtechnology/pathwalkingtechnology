// pages/about.tsx
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Path Walking Technology - Nosotros</title>
        <meta name="description" content="Conoce más sobre nuestro equipo y misión" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center mt-10">Nosotros</h1>
        <p className="text-center mt-4">
          En Path Walking Technology, estamos comprometidos con el desarrollo tecnológico y el servicio al cliente.
        </p>
      </main>
    </>
  );
}
