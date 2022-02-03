import React, {FC} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout:FC = ({children}) => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Footer/>
            {children}
        </div>
    );
}

export default Layout;