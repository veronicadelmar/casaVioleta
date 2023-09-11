import asd from '../assets/cardPhoto.jpg';
import rocket from '../assets/rocket-icon-empty-state.svg';



export default function DigitalArea() {
  return (
    <section className='culturaBienestar flex flex-col justify-center w-[360px] text-[#140819] xl:w-full'>
            <div className='bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0'>
                <div className='py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center'>
                    <h3 className='mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold'>Área Digital</h3>
                </div>
            </div>
            <div className='py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center'>
                <p className='text-sm xl:text-xl xl:font-medium xl:leading-[30px]'>Acá encontrarás las herramientas que necesitás para  estar en tendencia con las nuevas tecnologías, pudiendo crecer tanto en tu vida personal como en el desarrollo profesional.</p>
            </div>
            <div className='cardContainer flex flex-col items-center xl:items-start xl:flex-row xl:px-[60px] xl:mb-[70px] xl:w-[1280px] xl:self-center xl:[&>*:nth-child(2n)]:mx-[18px]'>
                {/* Curso 1 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={asd} alt="Imagen representativa del curso" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Introducción a la producción audiovisual</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este curso técnico y creativo aprenderás a reconocer los elementos clave de cada etapa, desde la preproducción hasta la postproducción, y dominarás las herramientas necesarias para liderar un equipo de trabajo con confianza y destreza.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
                {/* Curso 2 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={asd} alt="Imagen representativa del curso" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Introducción a la fotografía</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Con tu celular o cámara digital explorá el arte de la fotografía desde cero. Capturá imágenes impresionantes y aprendé sobre  lenguaje visual, equilibrio de composición, enfoque, profundidad de campo, teoría del color, iluminación y edición digital.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
                {/* Curso 3 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={asd} alt="Imagen representativa del curso" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Potenciar tu emprendimiento en redes sociales</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Si tenés un emprendimiento, este taller es la clave para destacarte en el mundo digital. Aprendé copywriting efectivo, explorá el uso de inteligencia artificial, dominá el diseño gráfico y audiovisual y aprovechá las herramientas de Metabusiness Suite y la publicidad en redes sociales.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
            </div>
            <div className='cardContainer flex flex-col items-center xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center xl:[&>*:nth-child(2n)]:mx-[18px]'>
                {/* Curso 4 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={asd} alt="Imagen representativa del curso" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Introducción a la redes sociales</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Este curso te enseñará desde cero cómo utilizar Facebook, Instagram, Twitter (X) y TikTok. A lo largo de 10 encuentros presenciales, te sumergirás en est as redes para aprovecharlas al máximo y crear una presencia efectiva en línea, sin importar tu nivel de experiencia.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
                {/* Curso 5 */}
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={asd} alt="Imagen representativa del curso" className='rounded-t-lg' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Formacion en Impresión 3D</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este curso descubrí cómo funcionan las impresoras 3D y explorá sus emocionantes posibilidades laborales. Diseñá y convertí tus ideas en objetos tangibles, adquiriendo nuevas habilidades.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
                {/* rocket */}
                <div className='hidden xl:flex xl:w-[375px] xl:h-[730px] xl:ml-[52px] xl:mt-[173px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={rocket} alt="Imagen representativa para futuros cursos" className='xl:w-[272px] xl:h-[397px]' />
                    </div>
                </div>
            </div>
        </section>
  )
}
