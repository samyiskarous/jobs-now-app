import React, { ReactNode } from 'react';
import './styles.css'

interface MainContainerPropsInterface{
    children?: ReactNode;
    title: string;
}

const MainContainer = (props: MainContainerPropsInterface) => {
    const {children, title} = props;

    return (
        <div className="mainContainer">
            <p className="xlarge-font bold mainContainerTitle">{title}</p>

            <div className="mainContainerContent">
                {children}
            </div>
        </div>
    );
}

export default MainContainer;