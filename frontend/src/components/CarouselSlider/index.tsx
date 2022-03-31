import { Carousel, CarouselItem } from 'react-bootstrap';
import SlideAvet01 from 'assets/img/carouselSlider/banner01.png';
import SlideAvet02 from 'assets/img/carouselSlider/banner02.png';
import SlideAvet03 from 'assets/img/carouselSlider/banner03.png';
import SlideAvet04 from 'assets/img/carouselSlider/banner04.png';

function CarouselSlider() {
  return (
    <>
      <Carousel>
        <CarouselItem interval={2000}>
          <img src={SlideAvet01} alt="Slide Avet Cursos" />
        </CarouselItem>

        <CarouselItem interval={2000}>
          <img src={SlideAvet02} alt="Slide Avet Cursos" />
        </CarouselItem>

        <CarouselItem interval={2000}>
          <img src={SlideAvet03} alt="Slide Avet Cursos" />
        </CarouselItem>

        <CarouselItem interval={2000}>
          <img src={SlideAvet04} alt="Slide Avet Cursos" />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default CarouselSlider;