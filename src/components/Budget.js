import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const changeEvent = () => {
    
}

const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            {/*<span>Budget: £{budget}</span>*/}
            {/*<span><input type="value"  onChange={event=> changeEvent()}></input></span>*/}

        </div>
    );
};
export default Budget;
