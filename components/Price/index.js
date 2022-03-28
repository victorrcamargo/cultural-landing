import React from 'react'

const Price = () => {
    return (
        <div className="min-h-screen  bg-gray-100  flex flex-wrap items-center  justify-center">

            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                Confira nossos planos
            </h1>

            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container">
                <div className="py-8 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                    {/* <h1 className="text-gray-500 font-semibold text-xl ">Basic</h1> */}
                    <div className="text-center py-4 px-7">
                        <h1 className="text-gray-700 text-4xl font-black">Dupla</h1>
                        {/* <p className="text-gray-500  mt-2">Monthely</p> */}

                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-400 text-left">
                            • Turma em dupla 100% online
                        </p>
                        <p className="text-sm text-gray-400 text-left">
                            • 100% online, estude de onde quiser.
                        </p>
                    </div>
                    <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">Buy Now</button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-gradient-to-r from-fuchsia-700 to-fuchsia-800 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                    {/* <h1 className="text-purple-200 font-semibold text-xl ">Pro</h1> */}
                    <div className="text-center py-4 px-7">
                        <h1 className="text-white text-4xl font-black">Aula vip</h1>
                        {/* <p className="text-white text-opacity-50 mt-2">Monthely</p> */}

                    </div>
                    <div className="h-px bg-purple-400"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-white text-opacity-80 text-left pb-2">
                            • Somente você e o professor.
                        </p>
                        <p className="text-sm text-white text-opacity-80 text-left">
                            • Aprendizado focado em você.
                        </p>
                        <p className="text-sm text-white text-opacity-80 text-left">
                            • Tudo no seu ritmo.
                        </p>
                    </div>
                    <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-purple-400 hover:shadow-xl duration-200 hover:bg-purple-800">Buy Now</button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                    {/* <h1 className="text-gray-500 font-semibold text-xl ">Enterprise</h1> */}
                    <div className="text-center py-4 px-7">
                        <h1 className="text-gray-700 text-4xl font-black">Grupo</h1>
                        {/* <p className="text-gray-500  mt-2">Monthely</p> */}

                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">Buy Now</button>
                </div>
            </div>

        </div>
    )
}

export default Price