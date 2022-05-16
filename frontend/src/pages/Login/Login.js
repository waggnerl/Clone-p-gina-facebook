import './index.css';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='containerMaster'>
      <div className='containerMiddle'>
      <div class="container">
        <div class="row">
            <div class="col">
              <div className='left'>
              <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='foto referente a logomarca do facebook'></img>
              </div>
              <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
            </div>
            <div class="col">
              <div className='right'>
                  <div className='container-form'>
                    <form>
                    <div className="mb-3">
                      <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email ou Telefone"/>
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Senha"/>
                    </div>
                    <div className="mb-3">
                      <div className="button">                        
                      <Link to="/home" type="submit" class="btn btn-primary form-control">Entrar</Link>
                      </div>
                    
                    </div>
                    <a>Esqueceu sua senha?</a>
                    <div className='border'></div>
                    <div className='buttonNewAccount'>
                    <button type="submit" class="btn btn-success ">Criar nova conta</button>
                    </div>
                    </form>
                  </div>
                  <div className='finalFrase'>
                    <a><strong>Criar uma página</strong> para uma celebridade, uma marca ou uma empresa</a>
                  </div>
              </div>  
            </div>            
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Login;
