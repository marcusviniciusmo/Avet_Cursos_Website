import { LogoAvet, AvetAboutText1, AvetAboutText2 } from 'utils/Mocks/AAvet';
import Header from "components/Header";
import PhotoGallery from "components/PhotoGallery";
import Footer from "components/Footer";
import './styles.css';

function AAvet() {
  return (
    <section>
      <Header />

      <div id="aavetContainer">
        <div id="aavetAreaAbout">
          <img src={LogoAvet.imageUrl} alt={LogoAvet.imageDescription} />

          <span>
            {AvetAboutText1}
            <br /><br />
            {AvetAboutText2}
          </span>
        </div>

        <PhotoGallery />
      </div>

      <Footer />
    </section>
  );
};

export default AAvet;