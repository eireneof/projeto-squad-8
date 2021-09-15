// import { useHistory } from "react-router";
import { Button } from "../../components/Button";
import logoFCamaraImg from '../../assets/images/logo-fcamara.svg'
import Ondulacoes from '../../assets/images/ondinhas.svg'
import ilustracaoHomeImg from '../../assets/images/ilustracao-home.svg'
import './styles.css'


const Dashboard = () => {
  // const history = useHistory();

  // function navigateToConfimation() {
  //   history.push('/confirmation/Confirmation')
  // }

  // function navigateToDeselect() {
  //   history.push('/deselect/Deselect')
  // }

  return (
    <main className="main">
      <section className="white-box">
        <h1>
          <img
            className="logo"
            src={logoFCamaraImg}
            alt="Logo FCamara"
          />
        </h1>
        <div className="white-box-content">
          <img
            className="waves" 
            src={Ondulacoes}
            alt="Logotipo FCamara"
          />
          <Button className="button" type='submit'>Agendamento</Button>
          <Button className="button" type='submit'>Desmarcar agendamento</Button>
          <Button className="button" type='submit'>Relatórios (em breve)</Button>
        </div>
      </section>
      <section className="orange-box">
        <div className="orange-box-content">
          <img
            className="ilustracao-home"
            src={ilustracaoHomeImg}
            alt="Ilustracao Home"
          />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;



