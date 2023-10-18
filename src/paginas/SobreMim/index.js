import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto_sobre_mim.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Wellington!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Wellington sorrindo"
        className={styles.fotoSobreMim}
      />
    <p className={styles.paragrafo}>
    Oi, tudo bem? Eu sou estudante de Análise e Desenvolvimento de Sistemas e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Meu amor pela programação começou cedo, mas devido aos contratempos da vida, não entrei para a área de primeira. Sou formado em Logística e tenho MBA em Gestão de Pessoas, trabalhei aproximadamente 10 anos nessa área, mas sentia que não era o que eu realmente queria para a minha carreira. 
            </p>
            <p className={styles.paragrafo}>
               Comecei a fazer Análise e Desenvolvimento de sistemas 1 mês depois de ter completado 31 anos de idade. Eu aprendi lógica de programação e o básico de várias linguagens, como C#, JavaScript e Java, onde me aprofundei um pouco mais. Eu gosto muito de estudar programação, meu objetivo hoje é conseguir um estágio para me aperfeiçoar mais e para ter minha experiência de dev mais próxima da realidade.
            </p>                   


        </PostModelo>
    )
}