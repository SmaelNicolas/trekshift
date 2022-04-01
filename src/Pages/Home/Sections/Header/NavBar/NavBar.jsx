import './NavBar.css'
import aboutButton from '../../../../../Assets/Header/aboutButton.png'
import blogButton from '../../../../../Assets/Header/blogButton.png'
import contactButton from '../../../../../Assets/Header/contactButton.png'
import logo from '../../../../../Assets/Logo.svg'

function NavBar(){
    return(
        <nav>
            <img src={logo} alt={'logo'} className={'logo'}/>
            <a href={'#'} className={'navLink'}><img src={aboutButton} alt={'link about'}/></a>
            <a href={'#'} className={'navLink'}><img src={blogButton} alt={'link blog'}/></a>
            <a href={'#'} className={'navLink'}><img src={contactButton} alt={'link contact'}/></a>
        </nav>
    )
}

export default NavBar;