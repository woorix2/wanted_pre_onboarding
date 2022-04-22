import { useEffect, useRef, useState } from 'react';
import './Dropdown.scss';
import { GoTriangleDown } from 'react-icons/go';

const Dropdown = () => {
    const [inputValue, setInputvalue] = useState('');
    const [searchValue, setSearchvalue] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const ulRef = useRef();

    const getListValue = (e) => {
        setInputvalue(e.target.outerText);
        setIsClicked(!isClicked);
    }

    const getSearchValue = (e) => {
        setSearchvalue(e.target.value.toUpperCase());
        console.log(searchValue);  
    }
    useEffect( ()=> {
        console.log(ulRef.current.childNodes);
        let li = ulRef.current.childNodes;
        let listLength = ulRef.current.childNodes.length;

        for( let i = 1; i<listLength; i++) {
            let liValue = li[i].innerText;
            console.log(liValue.indexOf(searchValue));
            
            if( liValue.indexOf(searchValue) > -1) {
                //찾는 값이 있으면 li를 그대로 보이게
                li[i].style.display = '';
            } else {
                //없으면 안보이게
                li[i].style.display = 'none';
            }; 
        };
    }, [searchValue])

    const inputClicked = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className='Dropdown'>
            <h2>Dropdown</h2>
            <div className='DropBox'>
                <div onClick={inputClicked} className='input-area'>
                    <input value={inputValue} placeholder='All Symbols' type="text" />
                    <GoTriangleDown className='triangle' />
                </div>
                <ul ref={ulRef} className={isClicked === false ? 'hide' : 'dropList'}>
                    <input placeholder='search symbol' onChange={getSearchValue} type='search' />
                    <li onClick={getListValue} >All Symbols</li>
                    <li onClick={getListValue} >BTCUSD.PERP</li>
                    <li onClick={getListValue} >ETHUSD.PERP</li>
                    <li onClick={getListValue} >BCHUSD.PERP</li>
                    <li onClick={getListValue} >LTCUSD.PERP</li>
                    <li onClick={getListValue} >1000USD.PERP</li>
                    <li onClick={getListValue} >XRPUSD.PERP</li>
                </ul>
            </div>
        </div>
    )
}
export default Dropdown;
