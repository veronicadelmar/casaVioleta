import cardPhoto from '../assets/cardPhoto.jpg'

export default function WelfareCulture() {
    return (
        <section className='xl:m-[60px]'>
            <div className='m-[18px] xl:flex xl:justify-center'>
                <div className=''>
                    <h3 className='font-medium text-xl py-[30px] xl:text-[38px] xl:font-semibold'>Cultura y Bienestar</h3>
                    <p className='font-normal text-xl leading-[30px] pb-[30px]'>Acá encontrarás espacios que te brindarán herramientas para tu crecimiento personal, fortalezcan tu autoestima y fomenten un equilibrio emocional duradero. Además, podrás participar de actividades culturales y recreativas.</p>
                </div>
            </div>
            <div className='cardContainer flex flex-wrap xl:flex-row'>
                <div className='card bg-[#ccc] my-[18px] mr-2 flex flex-col justify-between w-[375px] xl:h-[730px]'>
                    <img src={cardPhoto} className='mb-[30px] max-h-[233px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.59)]' alt='Imagen representativa del curso' />
                    <div className='px-[23px] grow'>
                        <h3 className='font-medium text-xl pb-[46px]'>Autoestima y Bienestar</h3>
                        <p className='font-normal text-xl leading-[30px]'>En este taller, los niños tendrán la oportunidad de explorar una variedad de técnicas artísticas, como dibujo, pintura y collage, entre otras. Mediante estas actividades, podrán experimentar y dar forma a sus emociones de manera creativa. Todos los materiales necesarios para cada propuesta serán proporcionados por nosotros.</p>
                    </div>
                    <div className='py-[35px] text-end p-[23px]'>
                        <span className='underline text-[22px]'>Para más info</span>
                    </div>
                </div>
                <div className='card bg-[#ccc] my-[18px] mr-2 flex flex-col justify-between w-[375px] xl:h-[730px]'>
                    <img src={cardPhoto} className='mb-[30px] max-h-[233px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.59)]' alt='Imagen representativa del curso' />
                    <div className='px-[23px] grow'>
                        <h3 className='font-medium text-xl pb-[46px]'>Folklore</h3>
                        <p className='font-normal text-xl leading-[30px]'>En este taller vas a aprender a bailar y a disfrutar del folklore. Los invitamos a todos los jóvenes y adultos que deseen conocer esta danza tradicional argentina. No es necesario contar con conocimientos previos, sólo tener ganas y mucho entusiasmo.</p>
                    </div>
                    <div className='py-[35px] text-end p-[23px]'>
                        <span className='underline text-[22px]'>Para más info</span>
                    </div>
                </div>
                <div className='card bg-[#ccc] my-[18px] mr-2 flex flex-col justify-between w-[375px] xl:h-[730px]'>
                    <img src={cardPhoto} className='mb-[30px] max-h-[233px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.59)]' alt='Imagen representativa del curso' />
                    <div className='px-[23px] grow'>
                        <h3 className='font-medium text-xl pb-[46px]'>Sanar Duelo</h3>
                        <p className='font-normal text-xl leading-[30px]'>En este taller explorarás el concepto y propósito del duelo, mientras adquirís herramientas para mejorar tu inteligencia emocional. Ganarás confianza, paciencia y esperanza mientras transitás tu duelo, encontrando en nosotros un acompañamiento.</p>
                    </div>
                    <div className='py-[35px] text-end p-[23px]'>
                        <span className='underline text-[22px]'>Para más info</span>
                    </div>
                </div>
                <div className='card bg-[#ccc] my-[18px] mr-2 flex flex-col justify-between w-[375px] xl:h-[730px]'>
                    <img src={cardPhoto} className='mb-[30px] max-h-[233px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.59)]' alt='Imagen representativa del curso' />
                    <div className='px-[23px] grow'>
                        <h3 className='font-medium text-xl pb-[46px]'>Teatro</h3>
                        <p className='font-normal text-xl leading-[30px]'>En este taller te invitamos a vivir una experiencia enriquecedora y entretenida, fusionando diversión y aprendizaje a tu propio ritmo, mientras nos sumergimos juntos en el mundo del teatro. Encontrarás un ambiente con un enfoque comprometido y lúdico.</p>
                    </div>
                    <div className='py-[35px] text-end p-[23px]'>
                        <span className='underline text-[22px]'>Para más info</span>
                    </div>
                </div>
                <div className='card bg-[#ccc] my-[18px] mr-2 flex flex-col justify-between w-[375px] xl:h-[730px]'>
                    <img src={cardPhoto} className='mb-[30px] max-h-[233px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.59)]' alt='Imagen representativa del curso' />
                    <div className='px-[23px] grow'>
                        <h3 className='font-medium text-xl pb-[46px]'>Organización personal, Familiar y Financiera</h3>
                        <p className='font-normal text-xl leading-[30px]'>En este taller podrás reconocer la importancia y beneficios de la organización, reduciendo el estrés y con la posibilidad de realizar mayor cantidad de actividades. El objetivo será que aprendas a balancear la administración sin restar tu bienestar personal.</p>
                    </div>
                    <div className='py-[35px] text-end p-[23px]'>
                        <span className='underline text-[22px]'>Para más info</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

