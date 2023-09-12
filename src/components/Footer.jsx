
import {AiFillFacebook} from "react-icons/ai";
import {BsInstagram, BsWhatsapp } from "react-icons/bs";
import {MdEmail} from "react-icons/md"
import logoCasaVioleta from "../assets/logo.svg"

export default function Footer(){
    return (
        <footer className="flex flex-col text-[#E5B2FF] bg-[#543366] xl:py-[70px] xl:px-[60px]">
            <div className="self-center w-[360px] xl:w-[1280px] xl:mx-0 xl:flex xl:justify-between">
                <div className="mx-[18px] xl:mb-[50px]">
                    <div className="py-[30px] xl:py-0 xl:pb-[30px]">
                        <img src={logoCasaVioleta} alt="Logo casa violeta" className="w-[114px] h-[35px] xl:w-[227px] xl:h-[71px]" />
                    </div>
                    <div className="pb-[30px] text-sm xl:text-xl">
                        <p className="leading-[23px] xl:font-medium xl:leading-[26px]">Álvarez 32, Barrio Don Bosco,</p>
                        <span className="leading-[23px] xl:font-medium xl:leading-[26px]">Quilmes</span>
                        <p className="leading-[23px] mb-2 pt-[30px] xl:font-medium xl:leading-[26px]">Código Postal 1878</p>
                        <p className="hidden leading-[23px] xl:block xl:font-medium xl:leading-[26px]">+54 9 11 6503 9065</p>
                    </div>
                </div>
                <ul className="flex flex-col mx-[18px] xl:mb-[50px]">
                    <li className="flex items-center pb-[30px] text-sm xl:text-xl">
                        < BsWhatsapp className="w-8 h-8 mr-[18px] xl:font-medium"/>
                        <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className="hover:underline leading-[23px] xl:font-medium xl:leading-[26px]">+54 9 11 6503 9065 </a>
                    </li>
                    
                    <li className="flex items-center pb-[30px] text-sm xl:text-xl">
                        < MdEmail  className="w-8 h-8 mr-[18px] xl:font-medium"/>
                        <a href="mailto:casavioleta.ar@gmail.com" target="_blank" className="hover:underline leading-[23px] xl:font-medium xl:leading-[26px]">casavioleta.ar@gmail.com</a>
                    </li>
                    
                    <li className="flex items-center pb-[30px] text-sm xl:text-xl">
                        <BsInstagram className="w-8 h-8 mr-[18px] xl:font-medium"/>
                        <a href="https://www.instagram.com/casavioleta.ar/?hl=es" target="_blank" className="hover:underline leading-[23px] xl:font-medium xl:leading-[26px]">@casavioleta.ar</a>
                    </li>
                    
                    <li className="flex items-center pb-[30px] text-sm xl:pb-0 xl:text-xl">
                        <AiFillFacebook className="w-8 h-8 mr-[18px] xl:font-medium"/>
                        <a href="https://www.facebook.com/p/Casa-Violeta-100050740584043/" target="_blank" className="hover:underline xl:font-medium xl:leading-[26px]">Casa Violeta</a>
                    </li>
                </ul> 
            </div>
            <div className="text-center pb-[30px] xl:pb-0">
                <p className="text-[15px]">Copyright © 2023</p>
            </div>
        </footer>
    )
}
