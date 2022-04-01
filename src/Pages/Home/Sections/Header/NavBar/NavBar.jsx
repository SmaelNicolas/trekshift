import './NavBar.css'
import aboutButton from '../../../../../Assets/Header/aboutButton.png'
import blogButton from '../../../../../Assets/Header/blogButton.png'
import contactButton from '../../../../../Assets/Header/contactButton.png'
import logo from '../../../../../Assets/Logo.svg'
import { useState } from "react";

function NavBar(){

    const [check, setCheck] = useState(false)

    function handleCheck(e) {
        setCheck(e.target.checked)
    }

    let element = document.getElementById('root');

    let enabled = ''

    if(check){
        enabled = ' enabled';
        element.classList.add('blockScroll');
    } else {
        enabled = '';
        element.classList.remove('blockScroll');
    }

    return(
        <>
            <nav>
                <img src={logo} alt={'logo'} className={'logo'}/>
                <a href={'#'} className={'navLink'}><img src={aboutButton} alt={'link about'} className={'linkButton'}/></a>
                <a href={'#'} className={'navLink'}><img src={blogButton} alt={'link blog'} className={'linkButton'}/></a>
                <a href={'#'} className={'navLink'}><img src={contactButton} alt={'link contact'} className={'linkButton'}/></a>
                <div className={'hambContainer'}>
                    <input className="side-menu" type="checkbox" id="side-menu" onChange={handleCheck}/>
                    <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
                </div>
            </nav>
            <div className={'menu' + enabled}>
                <a href={'#'} className={'menuLink'}><img src={aboutButton} alt={'link about'} className={'menuButton'}/></a>
                <a href={'#'} className={'menuLink'}><img src={blogButton} alt={'link blog'} className={'menuButton'}/></a>
                <a href={'#'} className={'menuLink'}><img src={contactButton} alt={'link contact'} className={'menuButton'}/></a>
            </div>

        </>
    )
}

export default NavBar;