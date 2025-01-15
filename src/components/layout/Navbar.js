import { useState } from 'react'
import logoDealer from '../../assets/images/dealer-logo-preta.png'
import logoBMW from '../../assets/images/logo-bmw.png'
import iconTel from '../../assets/svg/icon_tel.svg'
import iconWhatsapp from '../../assets/svg/icon_whatsapp.svg'
import Button from '../common/Button'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <div className='nav-style center-div margin-center padding-center'>
                <div className='logos'>
                    <img className='logo-dealer' src={logoDealer}/>
                    <div className="line-container"/>
                    <img className='logo-car' src={logoBMW}/>
                </div>
                <div className={`contact ${menuOpen ? 'open' : ''}`}>
                    <Button icon={iconTel} text='Ligue Agora'/>
                    <Button icon={iconWhatsapp} text='Whatsapp' color='#4EC859'/>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className={menuOpen ? 'line open' : 'line'}></span>
                    <span className={menuOpen ? 'line open' : 'line'}></span>
                    <span className={menuOpen ? 'line open' : 'line'}></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
