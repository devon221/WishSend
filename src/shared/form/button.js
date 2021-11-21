import React from 'react';
import './button.css';
import {Link} from 'react-router-dom'

const styles = ['btn--def' , 'btn--outline'];
const sizes = ['medium' , 'large'];
 const Button = ({
    children , 
    type , 
    onClick , 
    buttonStyle , 
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return(
        <Link to='/guide' className='btn--mobile'>
            <button 
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick = {onClick}
            type={type}>
                {children}
            </button>
        </Link> 
    );
};

export default Button;