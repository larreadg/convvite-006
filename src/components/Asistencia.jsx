import { WhatsAppIcon } from "../icons/WhatsAppIcon"
import { redirectTo } from "../utils"

function Asistencia() {
    return (
        <section className='flex flex-col justify-center items-center py-8 px-4 gap-8'>
            <p className='text-primary font-poppins text-center text-xl'>CONFIRMAR ASISTENCIA POR WHATSAPP:</p>
            <button className='flex items-center justify-center gap-4 w-full shadow-md bg-green-700 rounded-md p-4 text-white border border-2 border-green-900 shadow-lg' onClick={() => { redirectTo('https://wa.me/595984345259?text=Hola%20Araceli%2C%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20ceremonia%20de%20graduaci%C3%B3n') }}>
                <WhatsAppIcon />
                <p className='font-poppins text-xl' translate='no'>ARACELI GARCETE NÚÑEZ</p>
            </button>
            <p className='text-white font-poppins text-center text-xl'>SI DESEAS DARME UN REGALO, TU MEJOR OBSEQUIO SERÍA UNA PEQUEÑA COLABORACIÓN EN MI CUENTA BANCARIA PARA QUE PODAMOS COMPARTIR UN ALMUERZO DESPUÉS DEL ACTO</p>
            <section className='border border-2 border-primary p-4 w-full rounded-md'>
                <section className='flex gap-4'>
                    <p className="text-lg font-bold font-poppins">Banco:</p>
                    <p className="text-lg font-bold font-poppins text-primary">Ueno Bank</p>
                </section>
                <section className='flex gap-4'>
                    <p className="text-lg font-bold font-poppins">Nro. Cuenta:</p>
                    <p className="text-lg font-bold font-poppins text-primary">619575804</p>
                </section>
                <section className='flex gap-4'>
                    <p className="text-lg font-bold font-poppins">Nombre:</p>
                    <p className="text-lg font-bold font-poppins text-primary">ARACELI GARCETE NÚÑEZ</p>
                </section>
                <section className='flex gap-4'>
                    <p className="text-lg font-bold font-poppins">CI:</p>
                    <p className="text-lg font-bold font-poppins text-primary">5761119</p>
                </section>
                
            </section>
        </section>
    )
}

export default Asistencia