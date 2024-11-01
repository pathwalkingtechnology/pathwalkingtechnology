// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Path Walking Technology - Inicio</title>
        <meta name="description" content="Líderes en soluciones tecnológicas en Argentina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center mt-10">
          Bienvenidos a Path Walking Technology
        </h1>
        <p className="text-center mt-4">
          Ofrecemos soluciones tecnológicas innovadoras.
        </p>
      </main>
    </>
  );
}
