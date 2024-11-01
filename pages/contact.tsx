// pages/contact.tsx
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Path Walking Technology - Contacto</title>
        <meta name="description" content="Ponte en contacto con nosotros para consultas y más información" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center mt-10">Contáctanos</h1>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Correo Electrónico" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Mensaje" className="w-full p-2 mb-4 border rounded"></textarea>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Enviar</button>
        </form>
      </main>
    </>
  );
}
