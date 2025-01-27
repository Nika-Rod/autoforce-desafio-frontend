import { useState,useEffect } from 'react'
import logoDealer from '../../assets/images/dealer-logo-preta.png'
import logoBMW from '../../assets/images/logo-bmw.png'
import iconTel from '../../assets/svg/icon_tel.svg'
import iconWhatsapp from '../../assets/svg/icon_whatsapp.svg'
import Button from '../common/Button'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [company, setCompany] = useState(null);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        fetch('http://localhost:3000/company')  
            .then((response) => response.json())
            .then((data) => setCompany(data))
            .catch((error) => console.error('Erro ao buscar dados da API:', error)); 
    }, []); 

    if (!company) {
        return <div>Carregando...</div>; 
    }

    return (
        <nav>
            <div className='nav-style center-div margin-center padding-center'>
                <div className='logos'>
                    <img className='logo-dealer' src={logoDealer} alt='logo-dealer'/>
                    <div className="line-container" />
                    <img className='logo-car' src={logoBMW} alt='logo-carro'/>
                </div>
                <div className={`contact ${menuOpen ? 'open' : ''}`}>
                    <Button srcUrl={`tel:+ ${company.phone}`} icon={iconTel} text='Ligue Agora' />
                    <Button srcUrl={`https://wa.me/${company.whatsapp}`} icon={iconWhatsapp} text='Whatsapp' color='#4EC859' />
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
