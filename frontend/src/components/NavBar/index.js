import './index.css'
import logo from '../../assets/facebook_logo.webp'

function NavBar() {
  return (
    <nav class='border'>
      <div class="container">
        <div class="row">
            <div class="col col-left">
              <img src={logo}/>
              <input className='inputBordered' placeholder='Pesquisar no Facebook'/> 
            </div>
            <div class="col">
              <img src={logo}/>
              <input className='inputBordered' placeholder='Pesquisar no Facebook'/> 
            </div>
            <div class="col">
              <img src={logo}/>
              <input className='inputBordered' placeholder='Pesquisar no Facebook'/> 
            </div>        
                
        </div>                        
      </div>                        
    </nav>
  );
}

export default NavBar;