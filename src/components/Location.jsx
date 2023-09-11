

function Location(){ 
    return (
  <section className="flex flex-wrap justify-center items-center mx-auto m-[70px]">
    
      <div className="max-w-xl flex flex-col xl:w-[571px] xl:h-[300px]  w-[326] h-[170]  rounded-lg  m-5 shadow-md">
        
            <div className="flex flex-col justify-between flex-grow p-5 text-sm  rounded-lg text-[#E5B2FF] bg-[#543366] xl:leading-normal xl:text-lg">
                <h2 className="">¿Como llegar?</h2>
                <p className="mt-[30px]"> Estamos ubicados en Álvarez 32, Barrio Don Bosco, 
                Partido de Quilmes, a dos cuadras de la Estación de Tren. 
                Algunas formas de llegar:</p>
                <ol className="">
                    <li>Tren: Línea Roca (sale desde Constitución, C.A.B.A.)</li>
                    <li>Líneas de Colectivos:</li>
                      <ul>
                          <li>324 (pasa por calle Cramer)</li>
                          <li> 85A, 98A, 98E (pasa por Av. San Martín)</li>
                      </ul>
                </ol> 
        </div>
    </div>
    <iframe className="max-w-xl flex flex-col w-[326] h-[170] xl:w-[571px] xl:h-[300px]  m-5 bg-white border border-gray-200  shadow"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.090665356867!2d-58.29697832525358!3d-34.702893072918826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3320fb68c51fd%3A0x229bf0f9f60595a!2sAgust%C3%ADn%20%C3%81lvarez%20
          32%2C%20Don%20Bosco%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1693873326113!5m2!1ses-419!2sar"></iframe>
          
    
      </section>
    );
}
export default Location;