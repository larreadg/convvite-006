import Slider from "react-slick";
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {images.map((el, index) => {
                return (
                    <section key={index}>
                        <img src={el.img} alt={`img${index}`} className={`w-full h-[40vh] object-cover ${el.class}`}/>
                    </section>
                )
            })}
        </Slider>
    );
};

Carousel.propTypes = {
    images: PropTypes.array.isRequired
};

export default Carousel;
