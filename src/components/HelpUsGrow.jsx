import actionDonations from '../assets/actionDonations.png'
import volunteering from '../assets/volunteering.png'
import donations from '../assets/donations.png'

export default function HelpUsGrow() {
    return (
        <section className='culturaBienestar flex flex-col justify-center w-[360px] text-[#140819] xl:w-full'>
            <div className='bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0'>
                <div className='py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center'>
                    <h3 className='mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold'>Ayudanos a crecer</h3>
                </div>
            </div>
            <div className='py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center'>
                <p className='text-sm xl:text-xl xl:font-medium xl:leading-[30px]'>Te contamos cómo podés colaborar con Casa Violeta y formar parte de esta institución que busca mejorar la vida de muchas personas.</p>
            </div>
            <div className='cardContainer flex flex-col items-center mb-[30px] xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center xl:flex-wrap xl:[&>*:nth-child(2)]:mx-[17px] xl:[&>*:nth-child(5)]:mx-[17px]'>
                <div className='Card bg-[#543366] text-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={volunteering} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Voluntariado</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Si sos docente o te gustaría compartir tus conocimientos, te invitamos a brindar cursos o talleres para la comunidad. Animate a crecer con nosotros y vivir esta hermosa experiencia.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#80FF91] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
                <div className='Card bg-[#543366] text-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={donations} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Donaciones</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>Otra forma de colaborar es donando libros y útiles para nuestros talleres gratuitos de apoyo escolar para niños y adolescentes. Contactate con nosotros para conocer más detalles.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <span className='underline text-[#80FF91] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</span>
                    </div>
                </div>
                <div className='Card hidden xl:mb-[30px] xl:rounded-t-lg xl:flex xl:flex-col xl:items-center xl:justify-end xl:w-[375px] xl:h-[730px]'>
                    <img src={actionDonations} alt="Imagen representativa del curso" className='xl:rounded-t-lg' />
                </div>
            </div>
        </section>
    )
}