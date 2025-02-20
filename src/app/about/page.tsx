import Image from 'next/image';

export default function AboutPage() {
    return (
        <section className="py-16 flex flex-col items-center text-center">
            <Image
                src="./images/profile.jpeg"
                alt="Wellington Junio"
                className="w-48 h-48 rounded-full shadow-lg mb-8"
                width={192} // Adjust the width and height according to your image size
                height={192}
                priority
            />
            <h3 className="text-2xl font-bold mb-4">Sobre Mim</h3>
            <p className="text-lg max-w-2xl">
                Sou apaixonado por desenvolvimento de software e estou sempre em busca de novos desafios e tecnologias emergentes. Com mais de 7 anos de experiência, já atuei como desenvolvedor tanto no setor público quanto no privado.
                Sou um profissional versátil, sempre pronto para aprender e ensinar, com uma forte crença no poder transformador da educação.
            </p>
            <p className="text-lg max-w-2xl mt-4">
                Como Cientista da Computação, sou fascinado por resolver problemas complexos e encontrar soluções inovadoras, independentemente da linguagem de programação utilizada.
                Minhas principais habilidades incluem Python, PHP, Django, Laravel, React, NodeJS, Docker, Git, e muito mais.
            </p>
            <p className="text-lg max-w-2xl mt-4">
                Além da minha paixão por desenvolvimento de software, gosto de estudar inglês para aprimorar minhas habilidades linguísticas e sou entusiasta da música, dedicando-me a tocar e gravar músicas.
            </p>
        </section>
    );
}
