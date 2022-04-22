import './Input.scss';
import { useState, useEffect } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';

const Input = () => {
    const [passwordState, setPasswordState] = useState({
        type: 'password',
        visible: false
    });
    const [emailValue, setEmailValue] = useState('');
    const [emailState, setEmailState] = useState('');

    const eyeClicked = () => {
        setPasswordState( () => {
            if(!passwordState.visible) return {type: 'text', visible: true}
           else return{ type: 'password', visible: false }
        })
    }
    let validEmail =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    
    const getEmailValue = (e) => {
        setEmailValue(e.target.value);
    }
    useEffect(() => {
        setEmailState(validEmail.test(emailValue));
    }, [emailValue])

    return (
        <div className='Input'>
            <h2>Input.js</h2>
            <div className='login-area'>
                <div className='area'>
                    <label htmlFor="email" className='basic' >E-mail</label>
                    <div className='text-area'>
                        <input type='text' id='email' placeholder='E-mail' onBlur={getEmailValue} />
                        <span><MdOutlineCheckCircleOutline className={emailState === false ? '' : 'chkBox-on'} /></span>
                    </div>
                    {emailState === false && emailValue ? <p className='email-des'>Invalid Email address</p> : ''}
                </div>
                <div className='area'>
                    <label htmlFor="password" className='basic' >password</label>
                    <div className='text-area'>
                        <input type={passwordState.type} id='password' placeholder='Password'/>
                        <span><FaEye onClick={eyeClicked} className='eye' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Input;