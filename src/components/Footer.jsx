import RefresNow from "../components/RefresNow"

export default function Footer() {
    return (
        <>
            <RefresNow />
            <footer className="h-48 bg-blue-900 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-lg xs:text-center md:w-80 xs:w-60 ">&copy; 2024 | Todos los derechos reservados</p>
                    <p className="text-white text-lg">Sitio no oficial.</p>
                    <div className="flex justify-center items-center gap-3">
                        <a href="" className="bg-red-600 rounded-full border p-1"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        </a>
                        <a href="" className="bg-red-600 rounded-full border p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
