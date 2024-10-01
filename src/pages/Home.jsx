import BGimage from "../assets/bg-manaos.webm"
import "../styles/Effect-images.css"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center sm:h-screen max-sm:mt-64 " id="home">
      <video autoPlay loop muted className="sm:absolute xs:relative xs:-mt-80 sm:-mt-0 opacity-70 sm:top-0 max-xs:w-60 sm:w-full ">
        <source src={BGimage} type="video/webm" alt="bg-manaos" className="" />
      </video>
      <a href="#contact" className="lg:mt-[550px] md:mt-[100px] xl:mt-[500px] max-sm:hidden max-md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 arrow text-white bg-red-600 rounded-full w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
    </main>
  )
}
