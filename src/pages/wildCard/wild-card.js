import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./style.css";

function WildCardPage () {
    const navigation = useNavigate();

    const goToHome = () => {
        navigation('/');
    }

    return (
        <div className="container">
            <div className="not-found-text"> Page Not found. </div>
            <Button variant="primary" onClick={goToHome}>Go To Home</Button>
        </div>
    );
}

export default WildCardPage;