import whatsapp from "../assets/boton-whatsapp.svg";

export default function Whatsapp() {
  return (
    <figure className="fixed right-[60px] bottom-[20px] z-[1]">
      <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank" className="hover:underline leading-[23px] xl:font-medium xl:leading-[26px]">
          <img className="w-[50px] h-[50px]" src={whatsapp} alt="whatsapp" />
      </a>
    </figure>
  )
}