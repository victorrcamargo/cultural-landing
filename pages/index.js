import Head from 'next/head'
import Image from 'next/image'
import CarouselContainer from '../components/Carousel'
import Feedback from '../components/Feedback'
import FormAula from '../components/Form'
import Price from '../components/Price'

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
						<h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-white pb-2">Aprender inglês nunca foi tão fácil</h1>
						<p className="text-md xl:text-2xl text-white text-center md:text-start md:text-lg">Na Cultural Learning você tem a liberdade em aprender no seu tempo e da sua forma.</p>
					</div>
					<div className="w-full h-auto lg:w-1/2 p-4 md:ml-2">
						<h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-white pb-2">Quais os benefícios de estudar online?</h1>
						<ol className="px-4 py-6 flex justify-center items-center">
							<li className="text-lg text-start xl:text-2xl text-white px-2">Turmas reduzidas</li>
							<li className="text-lg text-start xl:text-2xl text-white px-2">Horário flexível</li>
							<li className="text-lg text-start xl:text-2xl text-white px-2">Aprendizado no seu ritmo</li>
						</ol>
					</div>
				</div>

				<div className="w-full h-full md:py-12">
					<div className="bg-gray-100 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 md:px-4 lg:px-12 py-12">
						<h1 className="text-center font-bold text-2xl md:text-4xl font-heading text-violet-900 pb-2">Agende uma aula demonstrativa 100% gratis!</h1>
						<FormAula />
					</div>
				</div>


				<div>
					<Feedback />
				</div>

				<div className="w-full h-full">
					<Price />
				</div>
			</main>
		</>
	)
}
