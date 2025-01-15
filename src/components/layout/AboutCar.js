import YouTubeVideo from "./YoutubeVideo";

const AboutCar = ({ vehicle }) => {
    return (
        <div className="About-car">
            <div className='center-div padding-center margin-center'>
                <div className="simple-border-divider" />
                <div className='about'>
                    <div className='title fade-in'>
                        <h3 className='fade-in'> {vehicle.name}</h3>
                        <div className='video fade-in'>
                            <YouTubeVideo videoId={vehicle.video} />
                        </div>
                        <div className="simple-border-divider" />
                    </div>

                    <div className='more-info fade-in'>
                        <span>Texto Legal:</span>
                        <p>
                            {vehicle.legal_text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCar;
