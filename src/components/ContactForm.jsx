import actionForm from '../assets/actionForm.png'

export default function ContactForm() {
    return (
        <section className='m-[18px] xl:m-[60px] xl:flex xl:flex-col'>
            <div>
                <h3 className='font-medium text-xl py-[30px] xl:text-[38px] xl:font-semibold xl:py-[70px]'>Información de Contacto</h3>
                <p className='hidden font-normal text-xl leading-[30px] xl:flex'>Para que podamos brindarte toda la  información que necesitás, escribinos sobre qué curso o taller querés iniciar. No te va a llevar más de 5 minutos, y te contestaremos muy pronto.</p>
                <p className='hidden font-normal text-xl leading-[30px] pb-[30px] xl:flex xl:pb-[70px]'>Una vez que hayas completado los datos, apretá el botón “Enviar” para que nos llegue tu consulta. ¡Y listo!</p>
            </div>
            <div className='xl:flex'>
                <form action='' className='bg-[#ccc] flex flex-col px-[25px] w-[383px] rounded-lg xl:w-[571px] xl:mr-[29px]'>
                    <p className='py-[30px] font-semibold text-lg'>¡Envianos tu mensaje aquí abajo!</p>
                    <label htmlFor='name' className='mb-2 font-medium'>Nombre</label>
                    <input type='text' id='name' placeholder='Tu nombre completo' className='rounded-lg h-[50px] p-5 mb-[30px]' />

                    <label htmlFor='phone' className='mb-2 font-medium'>Teléfono</label>
                    <input type='text' id='phone' placeholder='Tu número de celular' className='rounded-lg h-[50px] p-5 mb-[30px]' />

                    <label htmlFor='message' className='mb-2 font-medium'>Consulta</label>
                    <textarea name='message' id='message' cols='30' rows='10' placeholder='Escribinos tu consulta acerca del curso o taller' className='rounded-lg p-5 h-[190px]'></textarea>

                    <div className='flex justify-end'>
                        <button type='submit' className='my-[30px] text-xl py-2.5 px-5 font-medium leading-normal bg-white rounded-lg'>Enviar</button>
                    </div>
                </form>
                <img src={actionForm} alt='Woman' className='hidden xl:flex w-[557px] h-[640px]' />
            </div>
        </section>
    )
}

