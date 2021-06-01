import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import './styles.css'

const Loader = () => {

    return (
        <div className="loaderContainer">
            <GridLoader loading={true} color="#C4C4C4" size={70}/>
        </div>        
    )
}

 
export default Loader;