import { Carousel, CarouselItem } from 'react-bootstrap';
import SlideAvet01 from 'assets/img/carouselSlider/banner01.png';
import SlideAvet02 from 'assets/img/carouselSlider/banner02.png';
import SlideAvet03 from 'assets/img/carouselSlider/banner03.png';
import SlideAvet04 from 'assets/img/carouselSlider/banner04.png';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function CarouselSlider() {
  const slideInterval = 2000;
  const slides = [SlideAvet01, SlideAvet02, SlideAvet03, SlideAvet04];

  return (
    <div id='carouselSliderContainer'>
      <Carousel>
        {
          slides.map((slide) => {
            return (
              <CarouselItem interval={slideInterval}>
                <img
                  className='d-block w-100'
                  src={slide}
                  alt="Slide Avet Cursos" />
              </CarouselItem>
            )
          })
        }
      </Carousel>
    </div>
  );
};

export default CarouselSlider;