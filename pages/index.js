import Head from 'next/head'
import Image from 'next/image'
import CarouselContainer from '../components/Carousel'
import Feedback from '../components/Feedback'
import FormAula from '../components/Form'
import Price from '../components/Price'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai"

export default function Home() {
	return (
		<>
			<Head>
				<title>Cultural Learning English School</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<header className="top-0 fixed shadow-md  z-50 w-full">
					<nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 p-6">
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
								<a href="#" className="block mt-4 px-4 py-2 rounded lg:inline-block lg:mt-0 text-white hover:text-purple-900 mr-4 hover:bg-white">
									Início
								</a>
								<a href="#about-us" className="block mt-4 px-4 py-2 rounded lg:inline-block lg:mt-0 text-white hover:text-purple-900 mr-4 hover:bg-white">
									Sobre nós
								</a>
								<a href="#hire" className="block mt-4 px-4 py-2 rounded lg:inline-block lg:mt-0 text-white hover:text-purple-900 mr-4 hover:bg-white">
									Contrate
								</a>
							</div>
							<div className="flex items-center justify-between">
								<a href="https://www.facebook.com/culturallearningschool" target="_blank" className="inline-block text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0">
									<AiOutlineFacebook size={20} />
								</a>
								<a href="https://www.instagram.com/cultural_learning/?hl=pt-br" target="_blank" className="inline-block text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0">
									<AiOutlineInstagram size={20} />
								</a>
								<a href="https://api.whatsapp.com/send?1=pt_BR&phone=+55 18 99150-1533" className="inline-block text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0">
									<AiOutlineWhatsApp size={20} />
								</a>
							</div>
						</div>
					</nav>
				</header>


				<div className="w-full h-full top-margin">
					<CarouselContainer />
				</div>

				<div className="w-full h-auto bg-blue-800 p-4 lg:flex lg:justify-center lg:items-center lg:p-12">
					<div className="w-full lg:w-1/2 p-4 md:mr-2">
						<h1 id="about-us" className="text-center xl:text-start font-medium text-2xl md:text-4xl lg:text-5xl font-heading text-white pb-2">Aprender inglês nunca foi tão fácil</h1>
						<p className="text-md xl:text-2xl text-white text-center xl:text-start md:text-lg">Na Cultural Learning você tem a liberdade em aprender no seu tempo e da sua forma.</p>
						<ol className="mt-6 p-4">
							<p className="text-md xl:text-2xl underline-offset-1 text-white text-start xl:text-start md:text-lg">Quais os benefícios de estudar online?</p>
							<li className="list-disc text-white font-md">Aprendizado no seu ritmo</li>
							<li className="list-disc text-white font-md">Aula personalizada</li>
							<li className="list-disc text-white font-md">Horários flexíveis</li>
						</ol>
					</div>
					{/* <div className="w-full h-auto lg:w-1/2 p-4 md:ml-2">
						<h1 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-white pb-2">Quais os benefícios de estudar online?</h1>
						<ol className="px-4 py-6 flex justify-center items-center">
							<li className="text-lg text-start xl:text-2xl text-white px-2">Turmas reduzidas</li>
							<li className="text-lg text-start xl:text-2xl text-white px-2">Horário flexível</li>
							<li className="text-lg text-start xl:text-2xl text-white px-2">Aprendizado no seu ritmo</li>
						</ol>
					</div> */}
					<div className="flex items-center justify-center w-full h-full md:py-12 lg:-1/2 md:px-8">
						<div className="bg-gray-100 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 md:px-4 lg:px-12 py-12">
							<h1 className="text-center font-bold text-2xl md:text-4xl font-heading text-violet-900 mb-12">Agende uma aula demonstrativa 100% gratis!</h1>
							<FormAula />
						</div>
					</div>
				</div>



				<div>
					<Feedback />
				</div>

				<div id="hire" className="w-full h-full">
					<Price />
				</div>

				<div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-4">
					<h1 className="w-1/2 text-center font-bold text-xl md:text-4xl lg:text-5xl font-heading text-gray-700 mb-4">
						Confira pessoalmente nossos alunos que já estão aprendendo inglês
					</h1>
					<div className="">
						<iframe width="auto" height="auto"
							src="https://www.youtube.com/embed/k7DUB-zLvw8"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen>
						</iframe>
					</div>
				</div>
			</main>
		</>
	)
}
