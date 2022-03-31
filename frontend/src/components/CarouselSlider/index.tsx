import { Carousel, CarouselItem } from 'react-bootstrap';
import SlideAvet01 from 'assets/img/carouselSlider/banner01.png';

function CarouselSlider() {
  return (
    <>
      <Carousel>
        <CarouselItem interval={2000}>
          <img src={SlideAvet01} alt="Slide Avet Cursos" />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default CarouselSlider;