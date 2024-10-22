import logo from './../images/frontpage_image.jpg'
import './FrontPage.css'

const FrontPage = () => {
    return(
        <>
        <div className="frontpage-container">
        <div className="header-buttons-container">
            <h1>Hotel California</h1>
            <button className='sign-button'>Sign up</button><br/>
            <button className='sign-button'>Log in</button><br/>
            <button className='sign-button'>Rooms</button>
        </div>
        <div className="hotel-picture">
            <img src={logo} alt="Hotel picture" />
        </div>
        </div>
        </>
        
    )
}
export default FrontPage;