import { Slides } from 'utils/Mocks/CarouselSlider';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function CarouselSlider() {
  return (
    <div id='carouselSliderContainer'>
      <Carousel>
        {
          Slides.map((slide) => {
            return (
              <CarouselItem interval={slide.slideInterval}>
                <img
                  className='d-block w-100'
                  src={slide.imageUrl}
                  alt={slide.imageDescription}
                />
              </CarouselItem>
            )
          })
        }
      </Carousel>
    </div>
  );
};

export default CarouselSlider;