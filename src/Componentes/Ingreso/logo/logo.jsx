import LogoMoviStar from '../../../assets/movieStar.png';
import './logo.css';


const Logo = () => {
    return (
        <figure className="contenedor-logo">
            <img src={LogoMoviStar} alt="logo" />
        </figure>
    );
};

export default Logo;