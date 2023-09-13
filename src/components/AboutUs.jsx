import { RiArrowDownDoubleLine } from "react-icons/ri"
import imgAbout from "../assets/imgAbout.png"
import videoPresentacion from "../assets/videoPresentacion.mp4"

export default function AboutUs() {
    return (
        <section className="AboutUs text-[#140819] bg-[#F8EBFF] w-[360px] xl:w-full xl:flex xl:flex-col">
            <div className="xl:w-[1280px] xl:flex xl:flex-col xl:relative xl:self-center">
            <video src={videoPresentacion} loop autoPlay controls playsInline className="w-full mb-[30px] xl:mt-0 xl:mb-0 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)]"></video>
{/*                 <div className="hidden xl:flex xl:absolute xl:bottom-[-45px]">
                    <RiArrowDownDoubleLine size={100} />
                </div> */}
            </div>
        <div className="about-us flex flex-col">
            <h1 className="hidden xl:flex xl:justify-center xl:py-[50px] xl:leading-normal xl:text-[38px] xl:font-semibold">¡Te damos la bienvenida a Casa Violeta!</h1>  
            <div className="mx-[18px] xl:flex xl:flex-col xl:mx-0 xl:bg-[#E5B2FF]">
                <div className="xl:max-w-[1280px] xl:self-center xl:flex xl:justify-center xl:py-[50px] xl:px-[60px] xl:mb-0">
                    <div className="xl:mr-[119px]">
                        <h2 className="mb-[30px] text-xl font-medium leading-normal xl:mb-0 xl:text-[38px] xl:font-semibold xl:pb-[50px]">¿Quienes somos?</h2>
                        <p className="text-sm font-normal leading-[23px] xl:text-xl xl:leading-[26px] xl:font-medium">Casa Violeta es una institución que tiene como objetivo potenciar las capacidades de niños, jóvenes y adultos, dotándolos de herramientas formativas para que puedan desarrollarse de forma autónoma.</p>
                        <p className="mb-[30px] text-sm font-normal leading-[23px] xl:mb-[30px] xl:text-xl xl:leading-[26px] xl:font-medium">Contamos con un equipo interdisiplinario, colaboradores, voluntarios, técnicos y profesionales especialistas en educación, formación y empleo.</p>
                    </div>
                    <img src={imgAbout} className="mb-[30px] xl:mb-0 xl:max-w-[571px]" alt="Casa violeta" />
                </div>   
            </div>      
        </div>
        </section>

    )
}

