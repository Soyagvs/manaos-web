import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="h-screen">
                <div className="flex flex-col justify-center items-center mt-10 gap-3">
                    <h1 className="text-green-600 font-semibold">Contacto</h1>
                    <h2 className="font-bold text-2xl">Sitio en construccion</h2>
                    <p className="text-gray-500 text-lg">Contactanos llenando el formulario o usa nuestros numeros de oficinas.</p>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <form action="" className="flex flex-col justify-center items-center w-96 gap-3">
                        <div className="flex justify-center items-center gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-600 font-semibold" htmlFor="text">Nombre</label>
                                <input type="text" name="text" className="border border-gray-400 rounded-md h-8 pl-2 w-44" placeholder="Nombre" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-600 font-semibold" htmlFor="text">Apellido</label>
                                <input type="text" name="text" className="border border-gray-400 rounded-md h-8 pl-2 w-44" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label className="text-gray-600 font-semibold" htmlFor="text">Email</label>
                            <input type="email" name="email" className="border border-gray-400 w-full rounded-md h-8 pl-2" placeholder="example@example.com"/>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label className="text-gray-600 font-semibold" htmlFor="number">Telefono</label>
                            <input type="text" name="text" className="border border-gray-400 w-full rounded-md h-8 pl-2" placeholder="Telefono" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label className="text-gray-600 font-semibold" htmlFor="message">Mensaje</label>
                            <textarea name="text" id="text" className="border border-gray-400 w-full rounded-md h-28 pl-2 resize-none" placeholder="Escribe tu mensaje.."></textarea>
                        </div>
                        <button type="submit" className="bg-red-600 h-9 w-full rounded-md mt-3 text-white">Enviar</button>
                    </form>
                </div>
            </main>
        </>
    )
}
