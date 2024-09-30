import SVGmanaos from "../assets/manaos-logo.png";

export default function Navbar({ isVisible }) {
    return (
        <nav className={`z-[500] h-[100px] flex justify-center items-center bg-red-600 fixed w-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <ol className="flex justify-center space-x-20 items-center text-white">
                <a href="#home">HOME</a>
                <picture>
                    <img src={SVGmanaos} alt="Logo" className="w-28" />
                </picture>
                <a href="#contact">CONTACT</a>
            </ol>
        </nav>
    );
}
