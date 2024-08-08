import { MapPinIcon } from "../icons/MapPinIcon"
import { redirectTo } from "../utils"
import PropTypes from 'prop-types'

function Lugar({ invitado }) {
    return (
        <section className='flex flex-col justify-center items-center py-8 px-4 gap-8'>
            <p className='text-white font-howell text-center text-6xl'>{invitado}</p>
            <p className='text-primary font-poppins text-center text-xl'>ME COMPLACE INVITARTE A MI ACTO DE GRADUACIÓN</p>
            <section className='flex flex-col gap-2'>
                <p className='font-howell text-primary text-4xl text-center' translate='no'>el día</p>
                <section className='flex items-center gap-2'>
                    <p className='font-poppins text-white text-2xl font-bold border-y border-white' translate='no'>VIERNES</p>
                    <p className='font-poppins text-white text-4xl font-bold' translate='no'>23</p>
                    <p className='font-poppins text-white text-2xl font-bold border-y border-white' translate='no'>AGOSTO</p>
                </section>
                <p className='font-poppins text-white text-2xl font-bold text-center' translate='no'>9:30HS</p>
            </section>
            <p className='font-howell text-primary text-4xl text-center'>¿dónde?</p>
            <p className='font-poppins text-white text-2xl text-center' translate='no'>SND ARENA - ASUNCIÓN</p>
            <button className='flex items-center justify-center gap-4 bg-primary w-full shadow-md rounded-md p-4 text-neutral-950' onClick={() => { redirectTo('https://maps.app.goo.gl/XtL3P6G7VPKSZ4aRA') }}>
                <MapPinIcon />
                <p className='font-poppins text-xl' translate='no'>VER UBICACIÓN</p>
            </button>
        </section>
    )
}

Lugar.propTypes = {
    invitado: PropTypes.string.isRequired,
}

export default Lugar
