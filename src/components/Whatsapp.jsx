import whatsapp from "../assets/boton-whatsapp.svg";

export default function Whatsapp() {
  return (
    <figure className="fixed right-[20px] bottom-[20px] z-[1] xl:right-[60px]">
      <a href="https://api.whatsapp.com/send?phone=5491165039065" target="_blank">
          <img className="w-[50px] h-[50px]" src={whatsapp} alt="whatsapp" />
      </a>
    </figure>
  )
}