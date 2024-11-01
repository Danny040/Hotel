import { useNavigate } from "react-router-dom";
import './SignUpForm.css'

const SignUpForm = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate("/");
    }
    const submitSignup = () => {

    }
    // <button className='sign-button' onClick={goBack}>Back to frontpage</button><br/>
    return(
        <>
        <div className="signup-container">
        <h1 style={ {fontFamily:'Lora', fontWeight:'bold', fontSize:'40px'}}>Sign Up</h1><br/>
        
      <form onSubmit={submitSignup}>
        <div className="input-field">
        <label>Your name:</label><br/>
        <input id="name" required/><br/><br/>
        <label>Your lastname:</label><br/>
        <input id="lastname" required/><br/><br/>
        <label>Your email:</label><br/>
        <input id="email" type="email" required/><br/><br/>
        <label>Your password:</label><br/>
        <input id="password" type="password" required/><br/><br/>
        <label>Repeat your password:</label><br/>
        <input type="password"/><br/>
        </div>
        <div className="sign-buttons">
            <button type="submit" className="sign-button">Sign Up</button>
            </div>
        </form>
        
        </div>
        </>
    )
}
export default SignUpForm;