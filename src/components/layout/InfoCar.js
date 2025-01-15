import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import iconCilindrada from '../../assets/svg/icon_cilindrada.svg';
import iconConsumo from '../../assets/svg/icon_consumo.svg';
import iconPotencia from '../../assets/svg/icon_potencia.svg';
import iconVelocidade from '../../assets/svg/icon_velocidademax.svg';
import Button from '../../components/common/Button';
import AboutCar from './AboutCar';
import { formatarDinheiro } from '../formatarDinheiro';

const Breadcrumb = ({ items }) => {
    return (
        <div className='breadcrumb center-div padding-center margin-center' aria-label="breadcrumb">
            <ol>
                {items.map((item, index) => (
                    <li key={index}>
                        {index < items.length - 1 ? (
                            <span>
                                {item.label}
                            </span>
                        ) : (
                            <span> <span style={{ marginRight: "4px" }}>→</span> {item.label}</span>
                        )}
                    </li>
                ))}
            </ol>

            <div className="breadcrumb-back">
                <Link to={"/"}>Voltar para página anterior</Link>
            </div>
        </div>
    );
};

const InfoCar = () => {
    const { carId } = useParams();
    const location = useLocation();
    const [vehicle, setVehicle] = useState(null);
    const [company, setCompany] = useState(null);
    const carName = location.state?.carName;

    const breadcrumbItems = [
        { label: 'Ofertas', path: '/' },
        {
            label: carName,
            path: `/offers/${carId}`
        }
    ];
    useEffect(() => {
        fetch(`http://localhost:3000/vehicle/${carId}`)
            .then((response) => response.json())
            .then((data) => setVehicle(data));
    }, [carId]);

    useEffect(() => {
        fetch('http://localhost:3000/company')
            .then((response) => response.json())
            .then((data) => setCompany(data))
            .catch((error) => console.error('Erro ao buscar dados da API:', error));
    }, []);

    if (!vehicle || !company) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="Info-car">
            <div className="car-info">
                <div className="car-title">
                    <Breadcrumb items={breadcrumbItems} />
                    <h2 className="center-div padding-center margin-center slide-in-left">{vehicle.name}</h2>
                </div>

                <div className="car-subtitle center-div padding-center margin-center slide-in-left">
                    <h4>Descubra o {vehicle.name}</h4>
                    <h4>Cliente On-line tem Condições Especiais e aqui na Dealer BMW!</h4>
                    <h3>A partir de <span>{formatarDinheiro(vehicle.price)}</span></h3>
                </div>
            </div>

            <div className="center-div padding-center margin-center">
                <div className="main-info">
                    <div className="main-table-info">
                        <img src={`${vehicle.image}`} className="App-logo slide-in-left" alt="logo" 
                        style={{
                            width: "40vw",
                            height: "auto",
                            objectFit: "cover", 
                            borderRadius: "8px" 
                        }} />

                        <div className="div-table-info-title slide-in-right">
                            <p className="table-info-title">Destaques</p>
                            <div className="table-info">
                                <div className="img-icon">
                                    <img src={iconConsumo} alt='icon-consumo'/>
                                    <div className="table-info-titles">
                                        <p>Consumo</p>
                                        <span>{vehicle.features.consumption}</span>
                                    </div>
                                </div>

                                <div className="img-icon">
                                    <img src={iconCilindrada} alt='icon-cilindro'/>
                                    <div className="table-info-titles">
                                        <p>Cilindrada</p>
                                        <span>{vehicle.features.engine}</span>
                                    </div>
                                </div>

                                <div className="img-icon">
                                    <img src={iconPotencia} alt='icon-potencia'/>
                                    <div className="table-info-titles">
                                        <p>Potência</p>
                                        <span>{vehicle.features.power}</span>
                                    </div>
                                </div>

                                <div className="img-icon">
                                    <img src={iconVelocidade} style={{ marginRight: "5px" }} alt='icon-velocidade'/>
                                    <div className="table-info-titles">
                                        <p>Velocidade Máx.</p>
                                        <span>{vehicle.features.speed}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="main-button">
                                <Button srcUrl={`https://wa.me/${company.whatsapp}`} />
                            </div>
                        </div>
                    </div>

                    <div className="border-divider" />

                    <div className="main-info-2 fade-in">
                        <div className="title">
                            <h2>
                                A vida é melhor
                                quando compartilhada. <br/>
                                {vehicle.name}
                            </h2>
                        </div>

                        <div className="text">
                            <p>
                                A performance irradia de cada ângulo do design inovador do {vehicle.name}. Começando pela dianteira, que conta com para-choque clássico dos modelos BMW.
                                Ao correr os olhos pelo design, nota-se imediatamente o teto inclinado e a linha do ombro marcante, que equilibra o centro de gravidade do carro. Voltando-se para as
                                laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21 polegadas que chamam a atenção. Ao chegar na traseira do {vehicle.name}, a força do design continua
                                surpreendendo. O para-choque com difusão clássica dos modelos BMW, as lâminas horizontais e teto com spoiler ganham um toque a mais de amplitude devido ao vidro traseiro
                                levemente rebaixado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <AboutCar vehicle={vehicle} />
        </div>
    );
};

export default InfoCar;
