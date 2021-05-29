import React, { ReactNode } from 'react';
import './styles.css'

interface MainContainerPropsInterface{
    children?: ReactNode;
}

const MainContainer = (props: MainContainerPropsInterface) => {
    const {children} = props;

    return (
        <div className="mainContainer">
            <div className="mainContainerContent">
                {children}
            </div>
        </div>
    );
}

export default MainContainer;