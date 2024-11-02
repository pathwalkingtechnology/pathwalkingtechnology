// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-background p-4 border-t border-gray-200">
      <div className="container mx-auto text-center text-sm text-foreground">
        <p>© {new Date().getFullYear()} Path Walking Technology. Todos los derechos reservados.</p>
        <p>
          <a href="/privacy" className="underline">Política de Privacidad</a> | 
          <a href="/terms" className="underline ml-2">Términos de Servicio</a>
        </p>
      </div>
    </footer>
  );
}
