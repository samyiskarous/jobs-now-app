import React, { ReactNode } from 'react'
import './styles.css'

interface TwoSidedViewPropsInterface{
    mainViewChildren: ReactNode;
    sidebarData: {
        title: string;
        listData: ReactNode;
    };
}

const TwoSidedView = (props: TwoSidedViewPropsInterface) => {
    return (
        <div className="twoSidedViewContainer">
            <div className="mainViewContainer">
                {props.mainViewChildren}
            </div>
            <div className="sidebarContainer">
                <p className="large-font bold">{props.sidebarData.title}</p>
                {props.sidebarData.listData}
            </div>
        </div>
    );
}

export default TwoSidedView;