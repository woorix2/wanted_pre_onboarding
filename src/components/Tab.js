import './Tab.scss';
import React, { useState, useRef } from 'react';
import styled from "styled-components";

const Tab = () => {
    const underlineRef = useRef();
    
    const [width, setWidth] = useState(0);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [id, setId] = useState('');

    const getTab = (e) => {
        setWidth(e.target.offsetWidth);
        setLeft(e.target.offsetLeft);
        setTop(underlineRef.current.offsetHeight);
        setId(e.target.id);
    }
    
    const DivUnderline = styled.div`
        width: ${width}px;
        height: 3px;
        position: absolute;
        background-color: #00caa6;
        top: ${ top - 3}px;
        left: ${left}px;
        transition: 0.5s ease-in-out;
    `
    return (
        <div>
            <h2>Tab</h2>
            <div className='Tab'>
                <div ref={underlineRef} className='Tab-list'>
                    <a id='1' onClick={getTab} href='#!' className={id==='1' ? 'Tab-bar-Clicked' : 'Tab-bar'}>감자</a>
                    <a id='2' onClick={getTab} href='#!' className={id==='2' ? 'Tab-bar-Clicked' : 'Tab-bar'}>고구마</a>
                    <a id='3' onClick={getTab} href='#!' className={id==='3' ? 'Tab-bar-Clicked' : 'Tab-bar'}>카레라이스</a>
                </div>
                <DivUnderline />
            </div>
        </div>
        
    )
}
export default Tab;