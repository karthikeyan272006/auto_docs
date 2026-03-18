import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex bg-slate-50 min-h-screen">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={`main-content flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-100'}`}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
