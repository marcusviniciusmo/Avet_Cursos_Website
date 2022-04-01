import Header from "components/Header";
import CourseCard from "components/CourseCard";
import Footer from "components/Footer";

function Cursos() {
  return (
    <>
      <h1>VIEW</h1>
      <h1>Avet - Página Cursos</h1>

      <Header />

      <h1>BODY</h1>
      <CourseCard
        imageUrl="AQUI VAI UMA IMAGEM"
        imageDescription="Curso Auxiliar Veterinário logo"
        courseTitle="Auxiliar Veterinário"
        durationInfoHeader="Completo,Módulo I,Módulo II"
        durationInfoBody="1 Ano,6 Meses,6 Meses"
        periodInfoHeader="Manhã,Tarde,Noite"
        periodInfoBody="08h às 12h,13:30 às 17:30,18:30 às 22:30"
      />

      <CourseCard
        imageUrl="AQUI VAI UMA IMAGEM"
        imageDescription="Curso Auxiliar em Silvestres e Exóticos logo"
        courseTitle="Auxiliar em Silvestres e Exóticos"
        durationInfoBody="Duração de 6 Meses"
        periodInfoHeader="Manhã,Tarde,Noite"
        periodInfoBody="08h às 12h,13:30 às 17:30,18:30 às 22:30"
      />

      <CourseCard
        imageUrl="AQUI VAI UMA IMAGEM"
        imageDescription="Curso Aux. Instrument. e Proced. Cirúrgicos logo"
        courseTitle="Auxiliar em Instrumentação e Procedimentos Cirúrgicos"
        durationInfoBody="Duração de 6 Meses"
        periodInfoHeader="Manhã,Tarde,Noite"
        periodInfoBody="08h às 12h,13:30 às 17:30,18:30 às 22:30"
      />

      <h4>Incluso em todos os cursos</h4>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h4>Apostila</h4>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h4>Certificado</h4>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h4>Jaleco e Estetoscópio</h4>

      <h6>
        * Uma aula na semana, contendo a parte teórica e prática. ** Aprendizado
        na prática com atendimentos reais.
      </h6>

      <h3>AQUI VAI UM BOTÃO</h3>
      <h4>Matricule-se Já</h4>

      <Footer />
    </>
  );
};

export default Cursos;