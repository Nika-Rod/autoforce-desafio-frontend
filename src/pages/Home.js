import AboutCar from '../components/layout/AboutCar';
import InfoCar from '../components/layout/InfoCar';
import Header from '../components/layout/Header';

function Home() {
    return (
        <div className='Home'>
            <Header />
            <InfoCar />
            <AboutCar />
        </div>

    );
}

export default Home;
