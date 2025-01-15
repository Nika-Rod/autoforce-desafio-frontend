import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const cars = [
        { id: 1, icon: <AudiIcon />, title: "Audi", details: "Audi A5 Cabriolet" },
        { id: 2, icon: <MercedesIcon />, title: "Mercedes-Benz", details: "Mercedes-Benz Classe C Cabriolet" },
        { id: 3, icon: <JaguarIcon />, title: "Jaguar", details: "Jaguar F-Type Convertible" },
        { id: 4, icon: <PorsheIcon />, title: "Porsche", details: "Porsche 911 Cabriolet" },
        { id: 5, icon: <BmwIcon />, title: "BMW", details: "BMW Série 4 Cabrio" },
        { id: 6, icon: <AstonMartinIcon />, title: "Aston Martin", details: "Aston Martin Vantage Roadster" },
        { id: 7, icon: <MaseratiIcon />, title: "Maserati", details: "Maserati GranCabrio" },
        { id: 8, icon: <MiniIcon />, title: "Mini (BMW Group)", details: "Mini Cooper S Cabriolet" },
        { id: 9, icon: <FordIcon />, title: "Ford", details: "Ford Mustang Convertible" },
        { id: 10, icon: <ChevroletIcon />, title: "Chevrolet", details: "Chevrolet Camaro Cabriolet" },
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
                </div>
                <div className="fade-in">
                    <HeaderCarousel />
                </div>
            </div>

            <div className="simple-border-divider" />

            <div className="header-main">
                <div className="title-text fade-in">
                    <h2 className="fade-in">Nossos Modelos</h2>
                    <p className="fade-in">
                        Confira abaixo nossos melhores modelos. Selecione um card para explorar todas as informações que cada um pode oferecer a você
                    </p>
                </div>
                <div className="cards-container">
                    {cars.map((car) => (
                        <div className="card"
                            key={car.id}
                            onClick={() => navigate(`/offers/${car.id}`, { state: { carName: car.title, carDetails: car.details}})}>
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

