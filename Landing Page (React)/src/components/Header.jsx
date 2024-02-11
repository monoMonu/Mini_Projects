import Navbar from './Navbar'
import logo from './../img/logo.png'

function Header(){
   return (
      <header className='app-header'>
         <a href='#'>
            <img className='app-logo' src={logo} alt="Logo" />
         </a>
         <Navbar />
      </header>
   );
}

export default Header