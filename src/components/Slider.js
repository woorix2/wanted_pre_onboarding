import './Slider.scss';
import React, { useState, useRef } from 'react';

const Slider = () => {
    const [value, setValue] = useState(0);
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onClick = (e) => {
        setValue(e.target.id);
    }

    return(
        <div>
            <h2>Slider</h2>
            <div className='Slider'>
                <input className='inputNum' type='text' readOnly value={`${value}%`}/>
                <br />
                <input 
                value={value}
                onChange={onChange} 
                type='range' 
                className='range-bar' 
                name='range-bar' 
                min='1' 
                max='100' 
                step='1' />
                <ul className="range-labels">
                    <li id='1' onClick={onClick}>1%</li>
                    <li id='25' onClick={onClick}>25%</li>
                    <li id='50' onClick={onClick}>50%</li>
                    <li id='75' onClick={onClick}>75%</li>
                    <li id='100' onClick={onClick}>100%</li>
                </ul>
            </div>
        </div>
    )
}
export default Slider;