import React from 'react';
import Header from "../Header";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    const {darkMode} = useSelector(s => s)

    return (
        <div  style={{
            background: darkMode? "#1B0A06" : "white"
        }}>
            <Header/>
            <div className="main">
                {children}
            </div>
        </div>
    );
};

export default Layout;