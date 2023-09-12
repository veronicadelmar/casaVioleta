import { Link } from "react-router-dom"
import { useContext } from "react"
import { ScrollContext } from "../context/ScrollContext"
import artesPlasticas from "../assets/artesPlasticas.png";
import apoyoEscolar from "../assets/apoyoEscolar.png";
import rocket from "../assets/rocket-icon-empty-state.svg";

export default function SchoolArea() {
    const { goToTop } = useContext(ScrollContext)
    
  return (
    <section className="flex flex-col self-center justify-center w-[360px] text-[#140819] xl:w-full">
            <div className="bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0">
                <div className="py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center">
                    <h3 className="mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold">Área Escolar</h3>
                </div>
            </div>
            <div className="py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center">
                <p className="text-sm xl:text-xl xl:font-medium xl:leading-[30px]">Nuestra área escolar es un espacio diseñado, que brinda acceso a una amplia gama de cursos y talleres, impartidos por expertos en diversos campos.</p>
            </div>
            <div className="flex flex-col items-center mb-[30px] xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center xl:flex-wrap xl:[&>:nth-child(2)]:mx-[17px] xl:[&>:nth-child(5)]:mx-[17px]">
                {/* Curso 1 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]">
                    <div className="flex flex-col flex-grow">
                        <img src={artesPlasticas} alt="Artes Plásticas" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Artes Plásticas</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">En este taller, los niños tendrán la oportunidad de explorar una variedad de técnicas artísticas como dibujo, pintura y collage, entre otras. Mediante estas actividades, podrán experimentar y dar forma a sus emociones de manera creativa. Todos los materiales necesarios para cada propuesta serán proporcionados por nosotros.</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={() => goToTop()}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* Curso 2 */}
                <div className="Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]">
                    <div className="flex flex-col flex-grow">
                        <img src={apoyoEscolar} alt="Apoyo Escolar" className="rounded-t-lg" />
                        <h3 className="text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]">Apoyo Escolar</h3>
                        <p className="px-5 font-medium leading-[25px] xl:text-xl leading-[30px]">Nuestras clases están dirigidas a estudiantes de nivel primario y secundario, ofreciendo un espacio educativo personalizado y de refuerzo. Nuestro enfoque se centra en las necesidades individuales de cada estudiante, brindando atención extra para fortalecer los conceptos fundamentales y superar obstáculos en el aprendizaje</p>
                    </div>
                    <div className="flex justify-end py-7 px-5">
                        <Link to="/informacion-de-contacto" onClick={() => goToTop()}>
                            <span className="underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]">Para más info</span>
                        </Link>
                    </div>
                </div>
                {/* rocket */}
                <div className="Card hidden xl:mb-[30px] xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-[375px] xl:h-[730px]">
                    <img src={rocket} alt="Imagen representativa del curso" />
                </div>
            </div>
        </section>
  )
}