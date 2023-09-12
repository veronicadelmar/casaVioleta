import { TbMathGreater } from "react-icons/tb";

export default function Location(){ 
    return (
        <section className="w-[360px] flex flex-col self-center xl:w-full xl:mb-[100px]">
            <h2 className="text-[#E5B2FF] bg-[#543366] text-xl font-medium leading-normal text-center py-[28px] mb-[30px] xl:text-[38px] xl:py-[50px] xl:mb-[100px]">Mapa</h2>
            {/* container */}
            <div className="mx-[18px] xl:flex xl:self-center xl:gap-4 xl:mx-[60px]">
                <div className="text-[#E5B2FF] bg-[#543366] p-[20px] rounded-lg xl:w-[571px] xl:h-[300px]">
                    <h3 className="font-semibold text-lg mb-[20px] xl:mb-[30px] xl:text-[22px]">¿Como llegar?</h3>
                    <p className="text-sm font-normal leading-[23px] xl:leading-[26px] xl:font-medium xl:text-[20px]">Estamos ubicados en Álvarez 32, Barrio Don Bosco, 
                    Partido de Quilmes, a dos cuadras de la Estación de Tren. 
                    Algunas formas de llegar:</p>
                    <ol className="text-sm font-normal xl:text-[20px] xl:leading-[26px]">
                        <li>Tren: Línea Roca</li>
                        <li>Líneas de Colectivos:</li>
                            <ul>
                                <li className="flex flex-row items-center ml-[8px]">
                                    <TbMathGreater className="text-sm mr-[3px]"/>
                                    324 (pasa por calle Cramer)
                                </li>
                                <li className="flex flex-row items-center ml-[8px]">
                                    <TbMathGreater className="text-sm mr-[3px]"/>
                                    85A, 98 1 y 5 (pasa por Av. San Martín)
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