import imgAbout from '../assets/imgAbout.png'
import imgVideo from '../assets/imgVideo.jpg'

export default function AboutUs() {
    return (
        <section className='m-[18px]'>
        <img src={imgVideo} className='w-full rounded-lg my-[30px] xl:mt-0 xl:mb-0' alt='Video presentación Casa Violeta' />
        <div className='about-us flex flex-col'>
            <h1 className='hidden xl:flex xl:justify-center xl:leading-[30px] xl:text-[44px] xl:font-semibold xl:mt-[70px] xl:mb-[70px]'>¡Te damos la bienvenida a Casa Violeta!</h1>        
            <div className='bg-[#ccc] mb-[30px] xl:flex xl:justify-center xl:py-[120px] xl:px-[60px] xl:mb-0'>
                <div className='px-5 pt-5 pb-[30px] xl:mr-[119px]'>
                    <h3 className='font-medium text-xl pb-5 xl:text-[38px] xl:pb-[60px]'>¿Quienes somos?</h3>
                    <p className='font-normal text-sm leading-6 xl:text-[22px] xl:leading-[30px]'>Estamos ubicados en Alvarez 32, Don Bosco ,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                </div>
                <img src={imgAbout} className='xl:max-w-[571px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.59)]' alt='Casa violeta' />
            </div>
        </div>
        </section>

    )
}

