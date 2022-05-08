import { ICarouselSlider } from 'utils/Types';
import SlideAvet01 from 'assets/img/carouselSlider/banner01.png';
import SlideAvet02 from 'assets/img/carouselSlider/banner02.png';
import SlideAvet03 from 'assets/img/carouselSlider/banner03.png';
import SlideAvet04 from 'assets/img/carouselSlider/banner04.png';

export const Slides: ICarouselSlider[] = [
  {
    content: {
      url: SlideAvet01,
      description: 'Slide Avet Cursos',
    },
    slideInterval: 2000
  },
  {
    content: {
      url: SlideAvet02,
      description: 'Slide Avet Cursos',
    },
    slideInterval: 2000
  },
  {
    content: {
      url: SlideAvet03,
      description: 'Slide Avet Cursos',
    },
    slideInterval: 2000
  },
  {
    content: {
      url: SlideAvet04,
      description: 'Slide Avet Cursos',
    },
    slideInterval: 2000
  },
];