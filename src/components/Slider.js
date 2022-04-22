import './Slider.scss';
import React, { useState } from 'react';

const Slider = () => {
    const [value, setValue] = useState(0);
    const getInputValue = (e) => {
        setValue(e.target.value);
    }
    const getPercent = (e) => {
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
                onChange={getInputValue} 
                type='range' 
                className='range-bar' 
                name='range-bar' 
                min='1' 
                max='100' 
                step='1' />
                <ul className="range-labels">
                    <li id='1' onClick={getPercent}>1%</li>
                    <li id='25' onClick={getPercent}>25%</li>
                    <li id='50' onClick={getPercent}>50%</li>
                    <li id='75' onClick={getPercent}>75%</li>
                    <li id='100' onClick={getPercent}>100%</li>
                </ul>
            </div>
        </div>
    )
}
export default Slider;