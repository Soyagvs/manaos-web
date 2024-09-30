import BGimage from "../assets/bg-home.webp"
import ManaosLogo from "../assets/manaos-logo.png"

import "../styles/Effect-images.css"

export default function Home () {
  return (
    <main className="flex flex-col justify-center items-center">
      <picture>
        <img src={BGimage} alt="bg-manaos" className="w-screen h-screen" />
      </picture>
      <div className="flex justify-center items-center -mt-[400px]">
        <picture className="">
          <img src={ManaosLogo} alt="image-manaos-logo" className="w-[300px] latido" />
        </picture>
      </div>
      <div className="mt-44">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 arrow">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>
    </main>
  )
}
