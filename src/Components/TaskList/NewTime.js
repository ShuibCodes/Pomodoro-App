import React from 'react';

const NewTime = ({timeChange, to30, to45}) => {

    
      


    return (
        <div>
            <ul className="group" >

                <li className="times"><button  className="mins" onClick={timeChange}> 15 mins </button></li>
                <li className="times"><button className="mins"  onClick={to30}> 30 mins </button> </li>
                <li className="times"><button  className="mins" onClick={to45}> 45 mins </button> </li>
            </ul>   

        </div>
    );
}

export default NewTime;
