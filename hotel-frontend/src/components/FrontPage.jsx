import logo from './../images/frontpage_image.jpg'
import './FrontPage.css'
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
    const navigate = useNavigate();
    const signUpClick = () => {
        navigate("/signupform");
    }

    return(
        <>
        <div className='frontpage'>
        <div className="frontpage-container">
        <div className="hotel-picture">
            <img src={logo} alt="Hotel picture" />
        </div>
        <div className="header-buttons-container">
            <h1 style={{ fontFamily: 'Lora', fontSize: '50px', fontWeight: 'bold' }}>Hotel</h1>
            <h1 style={{fontFamily: 'Proxima Nova', fontSize: '40px', fontWeight: 'light' }}>California</h1>
            <button className='sign-button' style={{marginTop: '50px'}} onClick={signUpClick}>Sign up</button><br/>
            <button className='sign-button'>Log in</button><br/>
            <button className='sign-button'>Rooms</button>
        </div>
        </div>
        </div>
        </>
        
    )
}
export default FrontPage;