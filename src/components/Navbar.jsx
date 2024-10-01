import SVGmanaos from "../assets/manaos-logo.png";

export default function Navbar({ isVisible }) {
    return (
            <nav className={`z-[500] fixed w-screen h-[75px] flex justify-center items-center bg-red-600 transition-opacity duration-300 ${isVisible ? 'top-0 opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <ol className="flex justify-center xs:space-x-0 sm:space-x-10 items-center text-white ">
                    <a href="#home" className="xs:hidden sm:block">HOME</a>
                    <picture className="">
                        <img src={SVGmanaos} alt="Logo" className="w-28" />
                    </picture>
                    <a href="#contact" className="xs:hidden sm:block">CONTACT</a>
                </ol>
            </nav>
    );
}
