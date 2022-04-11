import Header from "components/Header";
import AvetCursosLogo from 'assets/img/aavet/avetLogo.png';
import PhotoGallery from "components/PhotoGallery";
import Footer from "components/Footer";
import './styles.css';

function AAvet() {
  return (
    <section>
      <Header />

      <div id="aavetContainer">
        <div id="aavetAreaAbout">
          <img src={AvetCursosLogo} alt="Avet Cursos logo" />

          <span>
            A Avet Cursos detectou essa necessidade e por isso oferece o curso de
            Auxiliar Veterinário e estágios supervisionados para os apaixonados por
            cães e gatos.<br /><br />
            O projeto Avet nasceu há cinco anos, quando a Dra. Maria Arianna começou
            a lecionar em cursos de Auxiliar Veterinário e sentiu a necessidade de
            ensinar, orientar e ajudar pessoas que amam animais a cuidar deles. Ao
            fazer a formação em Auxiliar Veterinário, o profissional sai para o
            mercado com um bom conhecimento de campo, com amplo conhecimento teórico
            e principalmente prático de como lidar com a rotina clínica, seja ela em
            hospitais veterinários, clínicas veterinárias, laboratórios ou abrigos.
          </span>
        </div>

        <PhotoGallery />
      </div>

      <Footer />
    </section>
  );
};

export default AAvet;