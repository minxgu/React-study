import React from 'react';
import PropsBox from './PropsBox';

function Hello() {
    return (
        <div className='box'>
            <h1>안녕하세요</h1>
            <PropsBox name="text" color="red" isSpecial={true}/>
            <PropsBox color="pink"/>
        </div>
    )
}

export default Hello;