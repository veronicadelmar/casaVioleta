// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';

// image import - one box - slider
import img1 from '../assets/casaVioleta--talleres.png'
import img2 from '../assets/casaVioleta--salonDeTecnologia.png'
import img3 from '../assets/casaVioleta--capacitacionLaboral.png'
// image import - two box - slider
import img4 from '../assets/casaVioleta--cursoDeImpresion3D.png'
import img5 from '../assets/casaVioleta--aulaDeTalleres.png'
import img6 from '../assets/casaVioleta--salonDeClase.png'
// image import - three box - slider
import img7 from '../assets/casaVioleta--areaDigital.png'
import img8 from '../assets/casaVioleta--salonDeClases.png'
import img9 from '../assets/casaVioleta--salonDeProgramacion.png'
// image import - four box - slider
import img10 from '../assets/casaVioleta--cursosDeTecnologia.png'
import img11 from '../assets/casaVioleta--aulaDeFolklore.png'
import img12 from '../assets/casaVioleta--TallerCuidadosDeAdultoMayores.png'
// image import - four box - slider
import img13 from '../assets/casaVioleta--areaEscolar.png'
import img14 from '../assets/casaVioleta-cursoDeProgramacion.png'
import img15 from '../assets/casaVioleta.png'

function Courses() {
  return (
    <section className="Courses w-[360px] text-[#140819] xl:relative xl:flex xl:flex-col xl:mb-[200px] xl:w-full xl:mx-0 xl:bg-[#E5B2FF]">
      <div className="mx-[18px] xl:max-w-[1280px] xl:self-center xl:mx-0 xl:flex xl:justify-center xl:flex-col xl:pb-[50px] xl:px-[60px] xl:mb-0">
        <h2 className="text-center mb-[30px] text-xl font-medium leading-normal xl:mb-0 xl:text-[38px] xl:font-semibold xl:pb-[50px]">Nuestros cursos</h2>
        <p className="mb-[30px] text-sm font-normal leading-[23px] xl:mb-[150px] xl:text-xl xl:leading-[26px] xl:font-medium">Te invitamos a conocer nuestras ofertas de clases, de modalidad presencial y con miras a ofrecer algunas capacitaciones de forma virtual. Te recibiremos en un espacio cómodo y cálido, en donde no sólo obtendrás una atención personalizada sino que te formarás con las últimas tendencias del rubro, pudiendo cursar con todos los materiales incluidos.</p>
      </div>
      {/* Carrousel */}
      <div className='flex justify-center'>
          <div className='hidden xl:block xl:absolute xl:top-[200px] xl:max-w-[1280px] xl:pt-[50px] xl:pb-[100px]'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className='flex flex-row justify-center gap-[18px]'>
                <img src={img1} alt="casaVioleta--talleres" className='w-[375px] h-[250px]' />
                <img src={img2} alt="casaVioleta--salonDeTecnologia" className='w-[375px] h-[250px]' />
                <img src={img3} alt="casaVioleta--capacitacionLaboral" className='w-[375px] h-[250px]' />
              </SwiperSlide>
              <SwiperSlide className='flex flex-row justify-center gap-3'>
                <img src={img4} alt="casaVioleta--cursoDeImpresion3D" className='w-[375px] h-[250px]' />
                <img src={img5} alt="casaVioleta--aulaDeTalleres" className='w-[375px] h-[250px]' />
                <img src={img6} alt="casaVioleta--salonDeClase" className='w-[375px] h-[250px]' />
              </SwiperSlide>
              <SwiperSlide className='flex flex-row justify-center gap-3'>
                <img src={img7} alt="casaVioleta--areaDigital" className='w-[375px] h-[250px]' />
                <img src={img8} alt="casaVioleta--salonDeClases" className='w-[375px] h-[250px]' />
                <img src={img9} alt="casaVioleta--salonDeProgramacion" className='w-[375px] h-[250px]' />
              </SwiperSlide>
              <SwiperSlide className='flex flex-row justify-center gap-3'>
                <img src={img10} alt="casaVioleta--cursosDeTecnologia" className='w-[375px] h-[250px]' />
                <img src={img11} alt="casaVioleta--aulaDeFolklore" className='w-[375px] h-[250px]' />
                <img src={img12} alt="casaVioleta--TallerCuidadosDeAdultoMayores" className='w-[375px] h-[250px]' />
              </SwiperSlide>
              <SwiperSlide className='flex flex-row justify-center gap-3'>
                <img src={img13} alt="casaVioleta--areaEscolar" className='w-[375px] h-[250px]' />
                <img src={img14} alt="casaVioleta-cursoDeProgramacion" className='w-[375px] h-[250px]' />
                <img src={img15} alt="casaVioleta-talleres" className='w-[375px] h-[250px]' />
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
    </section>
  );
}
export default Courses;