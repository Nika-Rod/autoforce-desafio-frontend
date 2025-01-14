import logoDealer from '../../assets/images/dealer-logo.png'
import logoAutoForce from '../../assets/images/autoforce-logo.png'
import iconIntagram from '../../assets/svg/icon_instagram.svg'
import iconLinkedin from '../../assets/svg/icon_linkedin.svg'
import iconYoutube from '../../assets/svg/icon_instagram.svg'

const Footer = () => {
    return (
        <footer>
            <div className='center-div margin-center padding-center'>
                <div className='div-footer'>
                    <div className='social-midia'>
                        <img src={logoDealer} />
                        <div className='list'>
                            <p>Siga nos:</p>
                            <ul>
                                <li><a><img src={iconIntagram}></img></a></li>
                                <li><a><img src={iconLinkedin}></img></a></li>
                                <li><a><img src={iconYoutube}></img></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="simple-border-divider" />
                    <div className='company-info'>
                        <h4>Razão Social: <span>AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA</span></h4>
                        <h4>CNPJ:  <span>22.588.947/0001-06</span></h4>
                        <h4>Endereço Matriz: <span>Av. Prudente de Morais, 3966, Lagoa Nova. Natal/RN –  CEP 59056-200</span></h4>
                    </div>

                    <div className="simple-border-divider" />
                    <div className='privacy-policy'>
                        <div>
                            <img src={logoAutoForce} />
                        </div>
                        <div>
                            <p>© Copyright 2021 - AutoForce - Todos os direitos reservados</p>
                            <p>Confira a nossa <a>Politica de privacidade.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
