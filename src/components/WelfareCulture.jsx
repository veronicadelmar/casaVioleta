import welfareCulture01 from '../assets/welfareCulture01.png'
import welfareCulture02 from '../assets/welfareCulture02.png'
import welfareCulture03 from '../assets/welfareCulture03.jpg'
import welfareCulture04 from '../assets/welfareCulture04.png'
import welfareCulture05 from '../assets/welfareCulture05.png'
import comingSoon from '../assets/rocket-icon-empty-state.svg'

export default function WelfareCulture() {
    return (
        <section className='culturaBienestar flex flex-col justify-center self-center w-[360px] text-[#140819] xl:w-full'>
            <div className='bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0'>
                <div className='py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center'>
                    <h3 className='mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold'>Cultura y Bienestar</h3>
                </div>
            </div>
            <div className='py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center'>
                <p className='text-sm xl:text-xl xl:font-medium xl:leading-[30px]'>Acá encontrarás espacios que te brindarán herramientas para tu crecimiento personal, fortalezcan tu autoestima y fomenten un equilibrio emocional duradero. Además, podrás participar de actividades culturales y recreativas.</p>
            </div>
            <div className='cardContainer flex flex-col items-center mb-[30px] xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center xl:flex-wrap xl:[&>*:nth-child(2)]:mx-[17px] xl:[&>*:nth-child(5)]:mx-[17px]'>
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px] xl:mb-[70px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={welfareCulture01} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Autoestima y Bienestar</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este taller, los niños tendrán la oportunidad de explorar una variedad de técnicas artísticas como dibujo, pintura y collage, entre otras. Mediante estas actividades, podrán experimentar y dar forma a sus emociones de manera creativa. Todos los materiales necesarios para cada propuesta serán proporcionados por nosotros.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={welfareCulture02} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Folklore</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este taller vas a aprender a bailar y a disfrutar del folklore. Los invitamos a todos los jóvenes y adultos que deseen conocer esta danza tradicional argentina. No es necesario contar con conocimientos previos, sólo tener ganas y mucho entusiasmo.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={welfareCulture03} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Teatro</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este taller te invitamos a vivir una experiencia enriquecedora y entretenida, fusionando diversión y aprendizaje a tu propio ritmo, mientras nos sumergimos juntos en el mundo del teatro. Encontrarás un ambiente con un enfoque comprometido y lúdico.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={welfareCulture04} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Organización personal, Familiar y Financiera</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este taller podrás reconocer la importancia y beneficios de la organización, reduciendo el estrés y con la posibilidad de realizar mayor cantidad de actividades. El objetivo será que aprendas a balancear la administración sin restar tu bienestar personal.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                <div className='Card bg-[#E5B2FF] w-[324px] mb-[30px] rounded-t-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[375px] xl:h-[730px]'>
                    <div className='flex flex-col flex-grow'>
                        <img src={welfareCulture05} alt="Imagen representativa del curso" className='rounded-t-lg h-[233px]' />
                        <h3 className='text-[17px] font-semibold leading-[25px] py-[30px] px-5 xl:text-xl leading-[30px]'>Sanar Duelo</h3>
                        <p className='px-5 font-medium leading-[25px] xl:text-xl leading-[30px]'>En este taller explorarás el concepto y propósito del duelo, mientras adquirís herramientas para mejorar tu inteligencia emocional. Ganarás confianza, paciencia y esperanza mientras transitás tu duelo, encontrando en nosotros un acompañamiento.</p>
                    </div>
                    <div className='flex justify-end py-7 px-5'>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className='underline text-[#004C0B] text-[17px] font-semibold leading-[25px] xl:text-[22px] xl:leading-[33px]'>Para más info</a>
                    </div>
                </div>
                <div className='Card hidden xl:mb-[30px] xl:rounded-t-lg xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-[375px] xl:h-[730px]'>
                    <img src={comingSoon} alt="Imagen representativa del curso" className='xl:rounded-t-lg' />
                </div>
            </div>
        </section>
    )
}

