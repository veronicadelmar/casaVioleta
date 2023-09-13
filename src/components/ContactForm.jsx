import actionForm from "../assets/actionForm.png"
import Location from "./Location"

export default function ContactForm() {
    return (
        <>
            <section className="flex flex-col justify-center self-center w-[360px] text-[#140819] xl:w-full">
                <div className="bg-gradient-to-r from-[#E5B2FF] to-[#e5b2ff00] xl:flex xl:flex-col xl:mx-0">
                    <div className="py-[30px] xl:mx-0 xl:p-[60px] xl:w-[1280px] xl:self-center">
                        <h3 className="mx-[18px] font-medium text-xl leading-normal xl:mx-0 xl:text-[44px] xl:font-semibold">Información de Contacto</h3>
                    </div>
                </div>
                <div className="py-[30px] mx-[18px] xl:mx-0 xl:py-[50px] xl:p-[60px] xl:w-[1280px] xl:self-center">
                    <p className="text-sm xl:text-xl xl:font-medium xl:leading-[30px]">Para que podamos brindarte toda la  información que necesitás, escribinos sobre qué curso o taller querés iniciar. No te va a llevar más de 5 minutos, y te contestaremos muy pronto.</p>
                    <p className="text-sm xl:text-xl xl:font-medium xl:leading-[30px]">Una vez que hayas completado los datos, apretá el botón <span className="font-bold mx-1.5">“Enviar”</span> para que nos llegue tu consulta. ¡Y listo!</p>
                </div>
                <div className="flex flex-col items-center mb-[30px] xl:items-start xl:flex-row xl:px-[60px] xl:mb-[100px] xl:w-[1280px] xl:self-center">
                    <form className="bg-[#E5B2FF] w-[324px] px-[25px] rounded-lg flex flex-col shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] xl:w-[571px] xl:h-[631px] xl:mr-[29px]" action="https://formsubmit.co/casavioleta.ar@gmail.com" method="POST">
                        <p className="hidden xl:flex xl:pt-[40px] xl:pb-[50px] xl:font-semibold xl:text-[22px]">¡Envianos tu mensaje aquí abajo!</p>
                        <p className="text-lg font-semibold leading-normal py-[30px] xl:hidden">Consultas</p>
                        <label htmlFor="name" className="mb-2 font-normal font-medium leading-[23px] xl:text-[22px] xl:leading-normal">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Tu nombre completo" className="rounded-lg h-[50px] p-5 mb-[30px]" required />

                        <label htmlFor="phone" className="mb-2 font-normal font-medium leading-[23px] xl:text-[22px] xl:leading-normal">Teléfono</label>
                        <input type="number" id="phone" name="phone" placeholder="Tu número de celular" className="rounded-lg h-[50px] p-5 mb-[30px]" required />

                        <label htmlFor="message" className="mb-2 font-normal font-medium leading-[23px] xl:text-[22px] xl:leading-normal">Consulta</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Escribinos tu consulta acerca del curso o taller" className="rounded-lg p-5 h-[190px]" required></textarea>

                        <div className="flex justify-end">
                            <button type="submit" className="bg-[#004C0B] text-[#F8EBFF] my-[30px] py-2.5 px-5 text-xl font-medium leading-normal rounded-lg xl:text-[22px] xl:py-2.5 xl:px-5 xl:leading-normal">Enviar</button>
                        </div>
                    </form>
                    <img src={actionForm} alt="Woman" className="hidden xl:flex xl:w-[571px] h-[640px]" />
                </div>
            </section>
            <Location />
        </>
    )
}

