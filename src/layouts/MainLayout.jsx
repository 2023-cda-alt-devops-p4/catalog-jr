import React from 'react';
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
};

export default MainLayout;