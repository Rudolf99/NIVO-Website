export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 bg-black text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">NIVO</h1>
        <nav className="space-x-4">
          <a href="#produkte" className="hover:underline">Produkte</a>
          <a href="#beratung" className="hover:underline">Beratung</a>
          <a href="#blog" className="hover:underline">Blog</a>
        </nav>
      </header>

      <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
        <h2 className="text-4xl font-bold mb-4">Maximale Energie, klare Ziele, optimierte Hormone.</h2>
        <p className="text-lg mb-6">Entdecke NIVO – dein Weg zu mehr Leistung, Fokus & Lebensqualität.</p>
        <div className="space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-xl shadow">Jetzt Testkit bestellen</button>
          <button className="border border-black px-6 py-2 rounded-xl">Beratung buchen</button>
        </div>
      </section>

      <section id="produkte" className="py-16 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Unsere Testkits</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Testosteron-Kit",
              price: "89€",
              desc: "Für Energie, Libido & Muskelkraft. Inkl. Handlungsempfehlungen."
            },
            {
              title: "DHEA-Kit",
              price: "89€",
              desc: "Ideal bei Stress & Erschöpfung. Inkl. Handlungsempfehlungen."
            },
            {
              title: "NIVO Kompakt",
              price: "159€",
              desc: "Kombi-Test für Testosteron & DHEA inkl. 1:1 Beratung."
            },
          ].map(({ title, price, desc }, idx) => (
            <div key={idx} className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="mb-2">{desc}</p>
              <p className="font-bold mb-4">{price}</p>
              <button className="bg-black text-white px-4 py-2 rounded-xl">Bestellen</button>
            </div>
          ))}
        </div>
      </section>

      <section id="beratung" className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Persönliche Beratung</h3>
          <p className="mb-6">Individuelle Analyse deiner Werte & persönliche Hormon-Optimierung mit Experten.</p>
          <button className="bg-black text-white px-6 py-2 rounded-xl">Jetzt Termin buchen</button>
        </div>
      </section>

      <section id="blog" className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Wissensbereich</h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-lg font-semibold underline hover:text-blue-600">
              7 Anzeichen für Testosteronmangel – und was du tun kannst
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-semibold underline hover:text-blue-600">
              DHEA – das unterschätzte Hormon für Männer über 30
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-semibold underline hover:text-blue-600">
              Was Hormonbalance mit mentaler Stärke zu tun hat
            </a>
          </li>
        </ul>
      </section>

      <footer className="bg-black text-white text-sm text-center py-6">
        <p>&copy; 2025 NIVO – Alle Rechte vorbehalten | <a href="#" className="underline">Impressum</a> | <a href="#" className="underline">Datenschutz</a></p>
      </footer>
    </main>
  );
}
