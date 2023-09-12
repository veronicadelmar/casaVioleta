import lenceria from '../assets/morderiaYLenceria.png';
import molderia from '../assets/molderia.png';
import auxiliar from '../assets/auxilar.png';
import seguridadDePertenencia from '../assets/controladorDeAdmision.png';
import orientacionVocacional from '../assets/orientacionVocacional.png';
import comunicacionEstrategica from '../assets/orientacionVocacional.png';

export default function JobTraining() {
  return (
    <section className='flex flex-col justify-center w-[360px] text-[#140819] xl:w-full'>
            <div className='bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0'>
                <div className='py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center'>
                    <h3 className='mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold'>Capacitación labora</h3>
                </div>
            </div>
            <div className='py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center'>
                <p className='text-sm xl:text-xl xl:font-medium xl:leading-[30px]'>Acá te ofrecemos oportunidades de desarrollo para impulsar tu carrera. Obtene habilidades prácticas y conocimientos valiosos para destacar en el mundo laboral actual.</p>
            </div>
            <div className='flex flex-col items-center mb-[30px] xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center xl:flex-wrap xl:[&>:nth-child(2)]:mx-[17px] xl:[&>:nth-child(5)]:mx-[17px]'>
                {/* Curso 1 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={lenceria} alt="Moldería y armado de ropa interior" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Moldería y armado de ropa interior</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este curso vas a adquirir las destrezas para diseñar y confeccionar tu propia ropa interior, eligiendo telas apropiadas y tomando medidas precisas. Explorá diversas tallas y estilos, desde corpiños básicos hasta bralettes, bombachas y culottes. Convertíte en un experto en la confección de prendas personalizadas.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                {/* Curso 2 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={molderia} alt="Moldería Inicial" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Moldería Inicial</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este curso aprendé a tomar medidas y plasmarlas en tu propia moldería. Utilizando papel, darás vida a diversas formas y acabados, dominando la creación de moldes base, mangas japonesas, remeras, camisetas, faldas y más. Preparate para entrar al mundo del diseño de moda.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                {/* Curso 3 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={auxiliar} alt="Auxiliar en Cuidados de Adultos Mayores" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Auxiliar en Cuidados de Adultos Mayores</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Te daremos las herramientas que te capacitarán en el cuidado de personas en avanzada edad. Nuestro enfoque de cuidado estará puesto de manera holística, ayudando en cada ámbito que componen a un sujeto de cuidados, comprendiendo que la salud no es simplemente la ausencia de la enfermedad.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                {/* Curso 4 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={seguridadDePertenencia} alt="Controlador de admisión y permanencia" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Controlador de admisión y permanencia</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Este curso es para aquellos que deseen trabajar en la seguridad. Aprenderás técnicas de defensa personal y seguridad, preparándote para trabajar en la protección de instituciones y espacios diversos.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                {/* Curso 5 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={orientacionVocacional} alt="Orientación vocacional" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Orientación vocacional</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Unite a nuestra charla diseñada para padres y alumnos. Nuestro objetivo es equipar a los padres con las herramientas necesarias para apoyar y guiar a los jóvenes a definir sus vocaciones. Una oportunidad valiosa para explorar juntos el camino hacia un futuro profesional satisfactorio.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                {/* Curso 6 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={comunicacionEstrategica} alt="Introducción a la comunicación estratégicas" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Introducción a la comunicación estratégicas</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Aprende a diagnosticar y problematizar tu proyecto, creando insumos que comuniquen su identidad eficazmente. Explorá conceptos clave, desde deconstrucción y construcción de singularidad hasta estrategias aplicadas en redes sociales, gráficos, video y fotografía.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
            </div>
        </section>
  )
}