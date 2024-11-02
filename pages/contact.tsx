// pages/contact.tsx
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'web_app',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <>
      <Head>
        <title>Contactar - Path Walking Technology</title>
        <meta name="description" content="Contáctanos para discutir tus necesidades de desarrollo y cómo podemos ayudarte a alcanzar tus objetivos tecnológicos." />
      </Head>
      <main className="p-6 bg-gray-50 text-gray-800">
        <section className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">Nombre:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Correo electrónico:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block font-semibold">Empresa:</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block font-semibold">Servicio de interés:</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
                <option value="web_app">Web Apps personalizadas</option>
                <option value="institutional_web">Web Institucional</option>
                <option value="ecommerce">E-commerce</option>
                <option value="virtual_classroom">Aula Virtual</option>
                <option value="ai_implementation">Implementación de IA</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="budget" className="block font-semibold">Presupuesto estimado:</label>
              <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold">Mensaje:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
}
