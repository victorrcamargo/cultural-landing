import Head from 'next/head'
import Image from 'next/image'
import CarouselContainer from '../components/Carousel'
import Feedback from '../components/Feedback'

export default function Home() {
	return (
		<>
			<Head>
				<title>Cultural Learning English School</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<nav className="flex items-center justify-between flex-wrap bg-violet-900 p-6">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<span className="font-semibold text-2xl tracking-tight">Cultural Learning</span>
					</div>
					<div className="block lg:hidden">
						<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
							<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
						</button>
					</div>
					<div className="hidden w-full flex-end lg:flex lg:items-center lg:w-auto">
						<div className="text-sm lg:flex-grow">
							<a href="#responsive-header" className="block mt-4 px-4 py-2 rounded lg:inline-block lg:mt-0 text-white hover:text-purple-900 mr-4 hover:bg-white">
								Início
							</a>
							<a href="#responsive-header" className="block mt-4 px-4 py-2 rounded lg:inline-block lg:mt-0 text-white hover:text-purple-900 mr-4 hover:bg-white">
								Sobre nós
							</a>
							<a href="#responsive-header" className="block mt-4 px-4 py-2 rounded lg:inline-block lg:mt-0 text-white hover:text-purple-900 mr-4 hover:bg-white">
								Contrate
							</a>
						</div>
						<div className="flex items-center justify-between">
							<a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:text-purple-900 hover:bg-white mt-4 lg:mt-0">whatsApp</a>
							<a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:text-purple-900 hover:bg-white mt-4 lg:mt-0">Instagram</a>
							<a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:text-purple-900 hover:bg-white mt-4 lg:mt-0">Facebook</a>
						</div>
					</div>
				</nav>

				<div className="w-full h-full">
					<CarouselContainer />
				</div>

				<div className="w-full h-auto bg-violet-900 p-4 lg:flex lg:justify-center lg:items-center lg:p-12">
					<div className="w-full h-auto lg:w-1/2 p-4 md:mr-2">
						<p className="text-xl font-medium xl:text-3xl text-white text-center my-4">Aprender inglês nunca foi tão fácil</p>
						<p className="text-lg xl:text-xl text-white text-center md:text-lg">Na Cultural Learning você tem a liberdade em aprender no seu tempo e da sua forma.</p>
					</div>
					<div className="w-full h-auto lg:w-1/2 p-4 md:ml-2">
						<p className="text-xl font-medium xl:text-3xl text-white text-center my-4">Quais os benefícios de estudar online?</p>
						<div className="flex flex-row justify-center items-center">
							<p className="text-lg text-center xl:text-2xl text-white px-2">✓ Turmas reduzidas</p>
							<p className="text-lg text-center xl:text-2xl text-white px-2">✓ Horário flexível</p>
							<p className="text-lg text-center xl:text-2xl text-white px-2">✓ Aprendizado no seu ritmo</p>
						</div>
					</div>
				</div>


				{/* <div className="flex flex-col items-center justify-center w-full h-50 md:flex-row md:flex-wrap md:px-12">
					<Feedback photo="https://picsum.photos/256/256" name="Victor Camargo" comment="Melhor escola que conheci na vida! Professores altamente qualificados recomendo demais." />
					<Feedback photo="https://picsum.photos/256/256" name="Suzana Vieira" comment="Eu nunca soube falar nada em inglês, depois que conheci a cultural learning eu falo tudo e mais um pouco!!" />
					<Feedback photo="https://picsum.photos/256/256" name="Patrick de Paula" comment="Faço inglês online com meus amigos e gostamos muito, aula 100% online é a melhor coisa que ja me aconteceu" />
					<Feedback photo="https://picsum.photos/256/256" name="Paula Mendes" comment="Gosto muito como funcionam as aulas online, não preciso sair de casa e nem depender de turmas para avançar" />
				</div> */}
			</main>
		</>
	)
}
