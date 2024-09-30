import Manaos from "../assets/manaos.webp"
export default function InformationGrid() {
    return (
        <main className="h-screen flex justify-center items-center mt-5 ">
            <div className="grid grid-cols-4 grid-rows-5 gap-4 sm:grid-cols-1 ">
                <div className="col-span-2 row-span-3 bg-white w-96 h-72 rounded-md transition hover:scale-[01.04] shadow-lg shadow-black flex justify-center items-center">
                    <img src={Manaos} alt="" className="h-full w-full rounded-md " />
                </div>
                <div className="col-span-2 row-span-2 col-start-3 bg-white w-96 rounded-md transition hover:scale-[01.04] shadow-lg shadow-black flex flex-col justify-center items-center">
                    <p className="font-semibold">Deseo contactarme con la Empresa:</p>
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <p className="text-red-600 font-semibold">info@refresnow.com.ar</p>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-3 row-start-3 bg-white w-96 rounded-md transition hover:scale-[01.04] shadow-lg shadow-black flex flex-col justify-center items-center">
                    <p className="font-semibold">Oficina Planta Industrial:</p>
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <p className="text-red-600 font-semibold">(02202) 49-9180 / 49-9181 / 48-9181 / 48-2812</p>
                    </div>
                    <p className="font-semibold">Oficina Administrativa:</p>
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <p className="text-red-600 font-semibold">(11) 2103-0396 / 7531-1778</p>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 row-start-4 bg-white w-96 rounded-md transition hover:scale-[01.04] shadow-lg shadow-black flex flex-col justify-center items-center">
                    <p className="font-semibold">Deseo contactarme con Recursos Humanos:</p>
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                        <p className="text-red-600 font-semibold">recursoshumanos@refresnow.com.ar</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
