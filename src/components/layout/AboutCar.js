import YouTubeVideo from "./YoutubeVideo";

const AboutCar = () => {
    return (
        <div className="About-car">
            <div className='center-div padding-center margin-center'>
                <div className="simple-border-divider" />
                <div className='about'>
                    <div className='title'>
                        <h3> Conheça o BMW Série 4 Cabrio </h3>
                        <div className='video'>
                            <YouTubeVideo />
                        </div>
                        <div className="simple-border-divider" />
                    </div>

                    <div className='more-info'>
                        <span>Texto Legal:</span>
                        <p>
                            Virtus 1.0, 4 portas (cód. BZ23B3), ano/modelo 18/18 à vista a partir de R$ 73490 ou financiado com entrada de R$ 44094 (60%) e mais 24 prestações
                            mensais de R$ 1286. Taxa de juros: 0% a.m. e 0% a.a. Total da operação: R$ 74958. CET máximo para esta operação: 04,75%% a.a. Condições válidas para
                            financiamento pelo Banco Volkswagen. Oferta válida exclusivamente para a cidade de Natal / RN, no período de 30/09/2018 a 31/10/2018 para veículos com pintura
                            sólida.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCar;
