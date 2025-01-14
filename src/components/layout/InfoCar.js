import bmwImage from '../../assets/images/bmw.png';
import iconCilindrada from '../../assets/svg/icon_cilindrada.svg';
import iconConsumo from '../../assets/svg/icon_consumo.svg';
import iconPotencia from '../../assets/svg/icon_potencia.svg';
import iconVelocidade from '../../assets/svg/icon_velocidademax.svg';
import Button from '../../components/common/Button';

const InfoCar = () => {
    return (
        <div className="Info-car">
            <div className='car-info'>
                <div className='car-title'>
                    <h2 className='center-div padding-center margin-center'>BMW Série 4 Cabrio</h2>
                </div>

                <div className='center-div padding-center margin-center'>
                    <h4>Descubra o BMW Série 4 Cabrio</h4>
                    <h4>Cliente On-line tem Condições Especiais e aqui na Dealer BMW!</h4>
                    <h3>A partir de <span>R$ 179.950 </span></h3>
                </div>
            </div>

            <div className='center-div padding-center margin-center'>
                <div className='main-info'>
                    <div className='main-table-info'>
                        <img src={bmwImage} className="App-logo" alt="logo" />

                        <div>
                            <p className='table-info-title'>Destaques</p>
                            <div className='table-info'>
                                <div className='img-icon'>
                                    <img src={iconConsumo} />
                                    <div className='table-info-titles'>
                                        <p>Consumo</p>
                                        <span>14,7 km/l</span>
                                    </div>
                                </div>

                                <div className='img-icon'>
                                    <img src={iconCilindrada} />
                                    <div className='table-info-titles'>
                                        <p>Cilindrada</p>
                                        <span>999 cm3</span>
                                    </div>
                                </div>

                                <div className='img-icon'>
                                    <img src={iconPotencia} />
                                    <div className='table-info-titles'>
                                        <p>Potência</p>
                                        <span>75 cv</span>
                                    </div>
                                </div>

                                <div className='img-icon'>
                                    <img src={iconVelocidade} style={{ marginRight: '5px' }} />
                                    <div className='table-info-titles'>
                                        <p>Velocidade Máx.</p>
                                        <span>154 km/h</span>
                                    </div>
                                </div>
                            </div>

                            <Button />
                        </div>
                    </div>

                    <div className='border-divider' />

                    <div className='main-info-2'>
                        <div className='title'>
                            <h2>
                                A vida é melhor
                                quando compartilhada.
                                BMW Série 4 Cabrio
                            </h2>
                        </div>

                        <div className='text'>
                            <p>
                                A performance irradia de cada ângulo do design inovador do BMW Série 4 Cabrio. Começando pela dianteira, que conta com para-choque clássico dos modelos BMW.
                                Ao correr os olhos pelo design, nota-se imediatamente o teto inclinado e a linha do ombro marcante, que equilibra o centro de gravidade do carro. Voltando-se para as
                                laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21 polegadas que chamam a atenção. Ao chegar na traseira do BMW Série 4 Cabrio, a força do design continua
                                surpreendendo. O para-choque com difusão clássica dos modelos BMW, as lâminas horizontais e teto com spoiler ganham um toque a mais de amplitude devido ao vidro traseiro
                                levemente rebaixado.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCar;