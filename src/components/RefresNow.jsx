import Refresnow from "../assets/refresnow-logo.png"

export default function RefresNow() {
    return (
        <div className="flex justify-center items-center mt-28">
            <picture className="absolute">
                <img src={Refresnow} alt="Logo Refres Now" className="-mt-12"/>
            </picture>
        </div>
    )
}
