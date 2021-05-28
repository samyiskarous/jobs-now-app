import React, { ReactNode } from 'react';
import './styles.css'

interface MainContainerPropsInterface{
    children?: ReactNode;
}

const MainContainer = (props: MainContainerPropsInterface) => {
    const {children} = props;

    return (
        <div className="mainContainer">
            {children}
        </div>
    );
}

export default MainContainer;