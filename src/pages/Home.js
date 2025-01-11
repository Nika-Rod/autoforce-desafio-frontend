import bmwImage from '../assets/images/bmw.png';
import iconCilindrada from '../assets/svg/icon_cilindrada.svg';
import iconConsumo from '../assets/svg/icon_consumo.svg';
import iconPotencia from '../assets/svg/icon_potencia.svg';
import iconVelocidade from '../assets/svg/icon_velocidademax.svg';

function Home() {
    return (
        <div className="Home container mx-auto">
            <div id='car-title'>
                <div className=''>
                    <h2>BMW Série 4 Cabrio</h2>
                </div>

                <div>
                    <h4>Descubra o BMW Série 4 Cabrio</h4>
                    <h4>Cliente On-line tem Condições Especiais e aqui na Dealer BMW!</h4>
                    <h3>A partir de <span>R$ 179.950 </span></h3>
                </div>
            </div>

            <div>
                <div className='flex'>
                    <img src={bmwImage} className="App-logo" alt="logo" />

                    <div>
                        <p>Destaques</p>
                        {/* colocar grid */}
                        <div className='table-info grid grid-cols-2 gap-10'>
                            <div>
                                <div className='table-info-titles'>
                                    <img src={iconConsumo} />
                                    <p>Consumo</p>
                                </div>
                                <span>14,7 km/l</span>
                            </div>

                            <div>
                                <div className='table-info-titles'>
                                    <img src={iconCilindrada} />
                                    <p>Cilindrada</p>
                                </div>
                                <span>999 cm3</span>
                            </div>

                            <div>
                                <div className='table-info-titles'>
                                    <img src={iconPotencia} />
                                    <p>Potência</p>
                                </div>
                                <span>75 cv</span>
                            </div>

                            <div>
                                <div className='table-info-titles'>
                                    <img src={iconVelocidade} />
                                    <p>Velocidade Máx.</p>
                                </div>
                                <span>154 km/h</span>
                            </div>
                        </div>

                        <button>Tenho Interesse </button>
                    </div>

                </div>

                <div>
                    <h2>A vida é melhor
                        quando compartilhada.
                        BMW Série 4 Cabrio
                    </h2>

                    <p>
                        A performance irradia de cada ângulo do design inovador do BMW Série 4 Cabrio. Começando pela dianteira, que conta com para-choque clássico dos modelos BMW. Ao correr os olhos pelo design, nota-se imediatamente o teto inclinado e a linha do ombro marcante, que equilibra o centro de gravidade do carro. Voltando-se para as laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21 polegadas que chamam a atenção. Ao chegar na traseira do BMW Série 4 Cabrio, a força do design continua surpreendendo. O para-choque com difusão clássica dos modelos BMW, as lâminas horizontais e teto com spoiler ganham um toque a mais de amplitude devido ao vidro traseiro levemente rebaixado.
                    </p>

                </div>
            </div>

            {/* Outro Componente */}

            <div>
                <div>
                    <h3> Conheça o BMW Série 4 Cabrio </h3>
                    <div>
                        {/* video */}
                    </div>
                </div>

                <div>
                    <span>Texto Legal:</span>
                    <p>Virtus 1.0, 4 portas (cód. BZ23B3), ano/modelo 18/18 à vista a partir de R$ 73490 ou financiado com entrada de R$ 44094 (60%) e mais 24 prestações mensais de R$ 1286. Taxa de juros: 0% a.m. e 0% a.a. Total da operação: R$ 74958. CET máximo para esta operação: 04,75%% a.a. Condições válidas para financiamento pelo Banco Volkswagen. Oferta válida exclusivamente para a cidade de Natal / RN, no período de 30/09/2018 a 31/10/2018 para veículos com pintura sólida.</p>
                </div>
            </div>

        </div>
    );
}

export default Home;
