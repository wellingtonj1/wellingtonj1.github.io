const projects = [
    { name: 'Sysout', url: 'https://www.sysout.com.br/', description: 'Trabalhei como Desenvolvedor Full Stack utilizando PHP, Python, Node.js, e frameworks como Laravel e Flask. Fui responsável por criar um endpoint em Flask para processar modelos digitais de elevação (MDE).' },
    { name: 'Geodata', url: 'https://app.geodataap.com.br/login', description: 'Atuei na integração e desenvolvimento de sistemas que manipulam grandes volumes de dados geoespaciais, utilizando tecnologias como Python e Django.' },
    { name: 'Binx BI', url: 'https://binx.app.br/portal/', description: 'Desenvolvi pipelines ETL personalizados para consumir e transformar dados de APIs e bancos de dados, utilizando Laravel e PHP.' },
    { name: 'Clube Envios', url: 'https://www.clubeenvios.com.br/', description: 'Implementei endpoints e conduzi integrações com APIs dos Correios e da FedEx usando o framework PHP Zend.' },
    { name: 'Super Ensino', url: 'https://www.superensino.com.br/', description: 'Atuei como Engenheiro Backend utilizando Django, desenvolvendo novos endpoints e trabalhando na refatoração de código e DevOps.' },
    { name: 'Simeon', url: 'https://www.estrategiaparaacao.com.br/', description: 'Desenvolvedor Full Stack, utilizando Laravel e Next.js para refatoração de código legado e implementação de novas soluções arquitetônicas.' },
];

export default function ProjectsPage() {
    return (
        <section className="py-16">
            <h3 className="text-2xl font-bold mb-4">Projetos</h3>
            <ul className="mt-4 space-y-4">
                {projects.map((project, index) => (
                    <li key={index}>
                        <h4 className="text-xl font-semibold">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {project.name}
                            </a>
                        </h4>
                        <p className="text-lg text-gray-700">{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
