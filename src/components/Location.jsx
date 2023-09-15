import { TbMathGreater } from "react-icons/tb";

export default function Location(){ 
    return (
        <section className="flex flex-col self-center w-full xl:mb-[100px]">
            <div className="w-full flex flex-col items-center justify-center bg-[#543366] py-[28px] mb-[30px] xl:py-[50px] xl:mb-[100px]">
                <h2 className="w-[360px] text-center text-[#E5B2FF] text-xl font-medium leading-normal xl:text-[38px]">Mapa</h2>
            </div>
            {/* container */}
            <div className="w-[360px] self-center mx-[18px] xl:w-[1280px] xl:flex xl:gap-4 xl:mx-[60px]">
                <div className="mx-[18px] text-[#E5B2FF] bg-[#543366] p-[20px] rounded xl:w-[571px] xl:h-[300px]">
                    <h3 className="font-semibold text-lg mb-[20px] xl:mb-[30px] xl:text-[22px]">¿Cómo llegar?</h3>
                    <p className="text-sm font-normal leading-[23px] xl:leading-[26px] xl:font-medium xl:text-[20px]">Estamos ubicados en Agustín Álvarez 32, Barrio Don Bosco, 
                    Partido de Quilmes, a dos cuadras de la Estación de Tren.
                    Algunas formas de llegar:</p>
                    <ol className="text-sm font-normal xl:text-[20px] xl:leading-[26px]">
                        <li>Tren: Línea Roca, estación Don Bosco</li>
                        <li>Líneas de Colectivos:</li>
                            <ul>
                                <li className="flex flex-row items-center ml-[8px]">
                                    <TbMathGreater className="text-sm mr-[3px]"/>
                                    324
                                </li>
                                <li className="flex flex-row items-center ml-[8px]">
                                    <TbMathGreater className="text-sm mr-[3px]"/>
                                    85A, 98 Ramales 1 y 5 (pasan por Av. San Martín)
                                </li>
                            </ul>
                    </ol> 
                </div>
                <div className="my-[30px] xl:my-[0]">
                    <iframe className="w-full h-[170px] xl:w-[571px] xl:h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0906642832356!2d-58.2944034!3d-34.702893100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3320fb68c51fd%3A0x229bf0f9f60595a!2sAgust%C3%ADn%20%C3%81lvarez%2032%2C%20Don%20Bosco%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1694543230752!5m2!1ses!2sar"></iframe>
                </div>
            </div>
        </section>
    );
}