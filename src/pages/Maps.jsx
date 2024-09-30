
export default function Maps() {
    return (
        <main className="h-screen">
            <div className="flex flex-col justify-center items-center mt-10 gap-3 text-center">
                <h1 className="text-green-600 font-semibold">Encontranos en:</h1>
                <h2 className="font-bold text-2xl">Av. Brig. Gral. Juan Manuel de Rosas 25150, B1763 <br />Virrey Del Pino.<br />La Matanza, Buenos Aires.</h2>
            </div>
            <div className="flex justify-center items-center mt-14">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.68174949424!2d-58.66668052459836!3d-34.8642231713021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcdc66941a2765%3A0x40d403ba4c870d3e!2sAv.%20Brig.%20Gral.%20Juan%20Manuel%20de%20Rosas%2025150%2C%20B1763%20Virrey%20del%20Pino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1727658976483!5m2!1ses-419!2sar"
                    width="700"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </main>
    )
}
