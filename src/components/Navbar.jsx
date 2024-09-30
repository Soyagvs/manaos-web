import SVGmanaos from "../assets/manaos-logo.png"

export default function Navbar() {
    return (
        <header className="flex justify-center items-center bg-red-600">
            <nav className="h-[100px] flex justify-center items-center mt-2">
                <ol className="flex justify-center space-x-20 items-center text-white">
                    <li>
                        HOME
                    </li>
                    <picture>
                        <img src={SVGmanaos} alt="" className="w-28" />
                    </picture>
                    <li>
                        CONTACT
                    </li>
                </ol>
            </nav>
        </header>
    )
}
