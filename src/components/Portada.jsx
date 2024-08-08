import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import toga from '../assets/images/toga.png'
import Carousel from './Carousel'
import DownCounter from './Downcounter'

function Portada() {
    return (
        <section className='overflow-hidden'>
            <Carousel images={[{ img: img1, class: 'object-top' }, { img: img2, class: 'object-top' }, { img: img3, class: 'object-top' }]} />
            <section className='flex flex-col justify-center py-8 px-4 relative gap-6 h-[60vh]'>
                <h1 className='text-center text-6xl text-primary font-howell'>Araceli Garcete Núñez</h1>
                <img src={toga} alt='Toga' className='absolute top-0 w-16 h-auto transform absolute top-0 left-1/2 -translate-x-1/2' />
                <p className='text-primary font-poppins text-center text-xl font-bold'>PROMOCIÓN 2023 <br /> LIC. EN E.E.B. 1º Y 2º CICLOS</p>
                <section className='flex flex-col gap-2'>
                    <p className='font-howell text-white text-4xl text-center'>¡Ya falta poco!</p>
                    <DownCounter fecha='2024-08-23' />

                </section>
            </section>
        </section>
    )
}

export default Portada
