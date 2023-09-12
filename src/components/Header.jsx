import { useState } from 'react'
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Dialog, Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

const products = [
  { name: 'Área Escolar',
    path: '/area-escolar'},
  { name: 'Cultura y Bienestar',
    path: '/cultura-bienestar'},
  { name: 'Área Digital',
    path: '/area-digital'},
  { name: 'Capacitación Laboral',
    path: '/capacitacion-laboral'}
]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="h-[70px] w-full px-[25px] flex flex-row flex-wrap justify-between items-center text-[#E5B2FF] bg-[#461e5b] xl:h-[100px] xl:px-[60px]">
        {/* logo */}
        <Link to='/'>
          <img className='w-2/4 xl:w-full' src={logo} alt='logo casa violeta' />
        </Link>
        {/* navBar */}
        <nav>
          {/* btn burger */}
          <figure className="flex xl:hidden">
            <button type="button"
                    onClick={() => setMobileMenuOpen(true)}>
                <GiHamburgerMenu className='w-[24px] h-[24px]'/>
            </button>
          </figure>
          {/* option's Desktop */}
          <Popover.Group className="hidden xl:flex xl:gap-x-[50px]">
            <Link to='/'>
              <p className="xl:text-xl xl:semi-bold">
                  Inicio
              </p>
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 outline-none xl:text-xl xl:semi-bold">
                Cursos y Talleres
                <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              </Popover.Button>
                <Popover.Panel className="absolute top-full z-10 mt-6 max-w-md overflow-hidden bg-[#461e5b] w-[261px]">
                  <div>
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center"
                      >
                        <div className="flex-auto">
                          <Link to={item.path}>
                            <p className="block font-semibold text-[#E5B2FF] p-5 border-[#E5B2FF] border-b-[1px]">
                              {item.name}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
            </Popover>
            <Link to='/informacion-de-contacto'>
              <p className="xl:text-xl xl:semi-bold">
                Información de Contacto
              </p>
            </Link>
            <Link to='/ayudanos-a-crecer'>
              <p className="xl:text-xl xl:semi-bold">Ayudanos</p>
            </Link>
          </Popover.Group>
      </nav>
      {/* Mobile */}
      <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-[#461e5b] overflow-y-auto">
        <nav className='h-[70px] px-[25px] flex flex-row flex-wrap justify-between items-center border-[#E5B2FF] border-b-2'>
            {/* logo */}
            <Link to='/'>
                <img className='w-2/4' src={logo} alt='logo casa violeta' />
            </Link>
            {/* btn close */}
            <figure className="xl:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
            >
                <MdClose className='w-[30px] h-[30px] text-[#E5B2FF]'/>
            </button>
            </figure>
        </nav>
            <div className="text-[#E5B2FF]">
              <div className="flex flex-col">
                <Link to='/'>
                  <p className="p-5 border-[#E5B2FF] border-b-[1px]">Inicio</p>
                </Link>
                <Link to='/area-escolar'>
                  <p className="p-5 border-[#E5B2FF] border-b-[1px]">Área Escolar</p>
                </Link>
                <Link to='/area-digital'>
                  <p className="p-5 border-[#E5B2FF] border-b-[1px]">Área Digital</p>
                </Link>
                <Link to='/capacitacion-laboral'>
                  <p className="p-5 border-[#E5B2FF] border-b-[1px]">Capacitación Laboral</p>
                </Link>
                <Link to='/informacion-de-contacto'>
                  <p className="p-5 border-[#E5B2FF] border-b-[1px]">Información de Contacto</p>
                </Link>
                <Link to='/ayudanos-a-crecer'>
                  <p className="p-5 border-[#E5B2FF] border-b-[1px]">Ayudanos</p>
                </Link>
              </div>
            </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}