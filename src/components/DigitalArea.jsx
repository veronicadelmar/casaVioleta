import { Link } from "react-router-dom"
import useScroll from "../customHooks/useScroll.js"
import audiovisual from "../assets/introduccionALaProduccionAudiovisual.png";
import fotografia from "../assets/introduccionALaFotografia.png";
import emprendimiento from "../assets/potenciarTuEmprendimientoEnRedesSociales.png";
import redes from "../assets/introduccionALaRedesSociales.png";
import impresion3d from "../assets/formacionEnImpresion3D.png";
import rocket from "../assets/rocket-icon-empty-state.svg";


export default function DigitalArea() {
    const { goToTop } = useScroll();
    
  return (
    <section className="flex flex-col justify-center self-center w-[360px] text-[#140819] xl:w-full">
            <div className="bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0">
                <div className="py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center">
                    <h3 className="mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold">Área Digital</h3>
                </div>
            </div>
            <div className="py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center">
                <p className="text-sm xl:text-xl xl:font-medium xl:leading-[30px]">Acá encontrarás las herramientas que necesitás para  estar en tendencia con las nuevas tecnologías, pudiendo crecer tanto en tu vida personal como en el desarrollo profesional.</p>
            </div>
            <div className="flex flex-col items-center mb-[30px] xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center xl:flex-wrap xl:[&>:nth-child(2)]:mx-[17px] xl:[&>:nth-child(5)]:mx-[17px]">
                {/* Curso 1 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]">
                    <div className="flex flex-col flex-grow">
                        <img src={audiovisual} alt="Introducción a la producción audiovisual" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Introducción a la producción audiovisual</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">En este curso técnico y creativo aprenderás a reconocer los elementos clave de cada etapa, desde la preproducción hasta la postproducción, y dominarás las herramientas necesarias para liderar un equipo de trabajo con confianza y destreza.</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={goToTop}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* Curso 2 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]">
                    <div className="flex flex-col flex-grow">
                        <img src={fotografia} alt="Introducción a la fotografía" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Introducción a la fotografía</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">Con tu celular o cámara digital explorá el arte de la fotografía desde cero. Capturá imágenes impresionantes y aprendé sobre  lenguaje visual, equilibrio de composición, enfoque, profundidad de campo, teoría del color, iluminación y edición digital.</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={goToTop}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* Curso 3 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]">
                    <div className="flex flex-col flex-grow">
                        <img src={emprendimiento} alt="Potenciar tu emprendimiento en redes sociales" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Potenciar tu emprendimiento en redes sociales</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">Si tenés un emprendimiento, este taller es la clave para destacarte en el mundo digital. Aprendé copywriting efectivo, explorá el uso de inteligencia artificial, dominá el diseño gráfico y audiovisual y aprovechá las herramientas de Metabusiness Suite y la publicidad en redes sociales.</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={goToTop}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* Curso 4 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]">
                    <div className="flex flex-col flex-grow">
                        <img src={redes} alt="Introducción a la redes sociales" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Introducción a la redes sociales</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">Este curso te enseñará desde cero cómo utilizar Facebook, Instagram, Twitter (X) y TikTok. A lo largo de 10 encuentros presenciales, te sumergirás en est as redes para aprovecharlas al máximo y crear una presencia efectiva en línea, sin importar tu nivel de experiencia.</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={goToTop}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* Curso 5 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]">
                    <div className="flex flex-col flex-grow">
                        <img src={impresion3d} alt="Formacion en Impresión 3D" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Formacion en Impresión 3D</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">En este curso descubrí cómo funcionan las impresoras 3D y explorá sus emocionantes posibilidades laborales. Diseñá y convertí tus ideas en objetos tangibles, adquiriendo nuevas habilidades.</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={goToTop}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* rocket */}
                <div className="Card hidden xl:mb-[30px] xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-[375px] xl:h-[730px]">
                    <img src={rocket} alt="Imagen representativa del curso"/>
                </div>
            </div>
        </section>
  )
}