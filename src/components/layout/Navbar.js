import logoDealer from '../../assets/images/dealer-logo-preta.png'
import logoBMW from '../../assets/images/logo-bmw.png'
import iconTel from '../../assets/svg/icon_tel.svg'
import iconWhatsapp from '../../assets/svg/icon_whatsapp.svg'
import Button from '../common/Button'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-style center-div margin-center padding-center'>
                <div className='logos'>
                    <img className='logo-dealer' src={logoDealer}/>
                    <div className="line-container"/>
                    <img className='logo-car' src={logoBMW}/>
                </div>
                <div className='contact'>
                    <Button icon={iconTel} text='Ligue Agora'/>
                    <Button icon={iconWhatsapp} text='Whatsapp' color='#4EC859'/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
