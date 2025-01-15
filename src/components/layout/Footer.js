import { useState, useEffect } from 'react';
import logoDealer from '../../assets/images/dealer-logo.png'
import logoAutoForce from '../../assets/images/autoforce-logo.png'
import iconIntagram from '../../assets/svg/icon_instagram.svg'
import iconLinkedin from '../../assets/svg/icon_linkedin.svg'
import iconYoutube from '../../assets/svg/icon_instagram.svg'

const Footer = () => {
    const [company, setCompany] = useState(null); 

    useEffect(() => {
        fetch(`http://localhost:3000/company`)
            .then((response) => response.json())
            .then((data) => setCompany(data)); 
    }, []); 

    if (!company) { 
        return <div>Carregando...</div>;
    }

    return (
        <footer>
            <div className='center-div margin-center padding-center'>
                <div className='div-footer'>
                    <div className='social-midia'>
                        <img src={logoDealer} alt='logo-dealer'/>
                        <div className='list'>
                            <p>Siga nos:</p>
                            <ul>
                                <li><a href="https://www.instagram.com/autoforcebr/" target='_blank' rel="noreferrer"><img src={iconIntagram} alt="Instagram"/></a></li>
                                <li><a href='https://www.linkedin.com/company/autoforcebrasil/' target='_blank' rel="noreferrer"><img src={iconLinkedin} alt="LinkedIn"/></a></li>
                                <li><a href='https://www.youtube.com/@autoforcebr' target='_blank' rel="noreferrer"><img src={iconYoutube} alt="YouTube"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="simple-border-divider" />
                    <div className='company-info'>
                        <h4>Razão Social: <span>{company.company_name}</span></h4>
                        <h4>CNPJ:  <span>{company.cnpj}</span></h4>
                        <h4>Endereço Matriz: <span>{company.address}</span></h4>
                    </div>

                    <div className="simple-border-divider" />
                    <div className='privacy-policy'>
                        <div>
                            <img src={logoAutoForce} alt='logo-autoforce'/>
                        </div>
                        <div>
                            <p>© Copyright 2021 - AutoForce - Todos os direitos reservados</p>
                            <p>Confira a nossa <a href='https://lp.autoforce.com/pol%C3%ADtica-de-privacidade' style={{textDecoration: "underline"}}>Politica de privacidade.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
