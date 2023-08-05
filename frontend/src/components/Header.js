import { Link } from 'react-router-dom'

const Header = () => {

   return (

      <header className='navbar'>
            <div> <h1>Kusina Compass </h1></div>
            <div>
               <Link to="/"> Home </Link>
               <Link to="/about"> About </Link>
               <Link to="/blog"> Blog </Link>
               <Link to="/contact"> Contact </Link>
              <Link to="/login"> Log-in </Link>
            </div>
      </header>
   )
}

export default Header;