
import {AiFillFacebook} from 'react-icons/Ai';
import {BsInstagram, BsWhatsapp } from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
import logo from '../assets/logo.svg'
function Footer(){
    return (
   
    <div className="p-[60px] mt-[70px] mx-auto text-[#E5B2FF] bg-[#543366]">
   
        <div className="xl:flex xl:items-center xl:justify-between">
            <div>
                <img src={logo} alt="" />
                <p className='mt-5'>Álvarez 32, Barrio Don Bosco,</p> 
                <p>Quilmes</p>
                    <p> +54 9 11 6503 9065 </p>
                    
                    <p> Código Postal 1878 </p>
                    <p> casavioleta.ar@gmail.com</p>
            </div>
            <ul className="flex flex-col xl:justify-between ">
                
                <li className='flex mt-5'>
                    < BsWhatsapp className='w-8 h-8 mr-7'/>
                    <a href="#" className="hover:underline "> +54 9 11 6503 9065 </a>
                </li>
                
                <li className='flex mt-5'>
                    < MdEmail  className='w-8 h-8 mr-7 '/>
                    <a href="#" className="hover:underline"> casavioleta.ar@gmail.com</a>
                </li>
                
                <li className='flex mt-5'>
                    <BsInstagram className='w-8 h-8 mr-7 '/>
                    <a href="#" className='hover:underline'> @casavioleta.ar</a>
                </li>
                
                <li className='flex mt-5' >
                    <AiFillFacebook className='w-8 h-8 mr-7 '/>
                    <a href="#" className='hover:underline'> Casa Violeta</a>
                </li>
            </ul> 
        </div>
        <div className='text-center mt-7 mb-[50px]'>
                <p>Copyright © 2023</p>
        </div>
        </div>



    );
}
export default Footer;