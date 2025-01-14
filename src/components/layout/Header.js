import React from 'react';
import HeaderCarousel from './HeaderCarousel';
import Button from '../common/Button';
import AudiIcon from '../../assets/svg/icon_audi';
import MercedesIcon from '../../assets/svg/icon_mercedes';
import JaguarIcon from '../../assets/svg/icon_jaguar';
import PorsheIcon from '../../assets/svg/icon_porsche';
import BmwIcon from '../../assets/svg/icon_bmw';
import AstonMartinIcon from '../../assets/svg/icon_aston_martin';
import MaseratiIcon from '../../assets/svg/icon_maserati';
import MiniIcon from '../../assets/svg/icon_mini';
import FordIcon from '../../assets/svg/icon_ford';
import ChevroletIcon from '../../assets/svg/icon_chevrolet';

const Header = () => {

    const cars = [
        { icon: <AudiIcon/>, title: "Audi", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <MercedesIcon/>, title: "Mercedes-Benz", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <JaguarIcon/>, title: "Jaguar", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <PorsheIcon/>, title: "Porsche", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <BmwIcon/>, title: "BMW", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <AstonMartinIcon/>, title: "Aston Martin", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <MaseratiIcon/>, title: "Maserati", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <MiniIcon/>, title: "Mini (BMW Group)", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <FordIcon/>, title: "Ford", datails: "Ipsum diam justo sed rebum vero dolor duo." },
        { icon: <ChevroletIcon/>, title: "Chevrolet", datails: "Ipsum diam justo sed rebum vero dolor duo." },
    ];

    return (
        <div className="Header center-div padding-center margin-center">
            <div className="header-row">
                <div className='title-text'>
                    <h1 className="fade-in">
                        Está em busca do <span className="text-primary">Carro Perfeito </span> Então está no lugar certo!
                    </h1>
                    <p className="fade-in">
                        Bem-vindo ao site da Dealer! Estamos aqui para ajudá-lo a encontrar todas as informações que precisa para escolher o carro perfeito para você.
                    </p>
                    <div className="fade-in"><Button text={"Começar"} /></div>

                </div>
                <div className="fade-in">
                    <HeaderCarousel />
                </div>
            </div>

            <div className="simple-border-divider" />

            <div className="header-main">
                <div className="title-text fade-in">
                    <h2 className="fade-in">Property Types</h2>
                    <p className="fade-in">
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                    </p>
                </div>
                <div className="cards-container">
                    {cars.map((car, index) => (
                        <div className="card" key={index}>
                            <div className="card-icon">
                                {car.icon ? car.icon : <span>Sem ícone</span>}
                            </div>
                            <h3 className="card-title">{car.title}</h3>
                            <p className="card-details">{car.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
