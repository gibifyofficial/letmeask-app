import { Link } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

import '../../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  return (
    <div id="page-auth">

      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let me Ask" />
          <h2>Crie uma nova Sala</h2>
            <form>
              <input 
              type="text" 
              placeholder="Nome da Sala"
              />
              <Button type="submit">
                Criar Sala
              </Button>
            </form>
            <p>
              Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
            </p>
        </div>
      </main>

    </div>
  )
}