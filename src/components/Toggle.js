import React, { useState } from 'react';
import './Toggle.scss';
import styled, { keyframes } from "styled-components";

const Toggle = () => {
    
    const [value, setValue] = useState("basic");
    const onClick =(e) => {
        console.log(e.target.htmlFor)
        setValue(e.target.htmlFor);
    }
    const move = keyframes`
        from {
            margin-left: ${value === 'basic' ? '0px' : '0px'};
        }
        to {
            margin-left: ${value === 'basic' ? '97px' : '97px'};
        }
    `
    const DivBall = styled.div`
        position: absolute;
        height: 46px;
        width: 98px;
        border-radius: 30px;
        top: 2px;
        left: 2px;
        background-color: #fff;
        animation: ${move} 0.5s ease-in-out;
        animation-fill-mode: forwards;
        animation-direction: ${value === 'basic' ? 'reverse' : 'normal'};
    `

    return (
        <div>
            <h2>Toggle</h2>
            <div className='Toggle' >
                <input type='checkbox' id='basic' value='basic'/>
                <label htmlFor="basic" className='basic' onClick={onClick}>기본</label>
                <DivBall  />
                <input type='checkbox' id='detail' value='detail' />
                <label htmlFor="detail" className='detail' onClick={onClick} >상세</label>
            </div>
        </div>
        
    )
}
export default Toggle;

// div onClick={onClick} className={isClicked ? 'clicked' : 'Toggle'}
// left: ${value === 'basic' ? '2px' : '100px'};
// animation-play-state: ${moving === false ? 'paused' : 'running'};
// transform: translateX(${value === 'basic' ? '0px' : '0px'});
// transform: translateX(${value === 'basic' ? '98px' : '98px'});
// animation-direction: ${value === 'basic' ? 'reverse' : 'normal'};