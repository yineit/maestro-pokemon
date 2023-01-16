import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/img/img1.png";


function Header() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image} width="200px"
                   
                />

            </Carousel.Item>
           
        </Carousel>
    );
}

export default Header;