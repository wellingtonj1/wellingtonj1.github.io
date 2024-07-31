export default function ContactPage() {
    return (
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Contato</h3>
            <p className="text-lg mb-4">
                Estou disponível para novas oportunidades e colaborações. Entre em contato comigo através dos seguintes meios:
            </p>
            <ul className="space-y-2 text-lg">
                <li>Email: <a href="mailto:wellingtonj1@hotmail.com" className="text-yellow-300 hover:underline">wellingtonj1@hotmail.com</a></li>
                <li>Telefone: <a href="tel:+5562985009878" className="text-yellow-300 hover:underline">+55 (62) 98500-9878</a></li>
                <li>Links: <a href="https://lnk.bio/wellingtonFernandes" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">https://lnk.bio/wellingtonFernandes</a></li>
            </ul>
            <p className="text-lg mt-8">
                Vamos conversar sobre como posso ajudar no seu próximo projeto!
            </p>
        </section>
    );
}
