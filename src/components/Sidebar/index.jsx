import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../App.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;
    const trigger = useRef(null)
    const sidebar = useRef(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    useEffect(() => {
        const clickHandler = (target) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            console.log('Render')
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = (keyCode) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <aside ref={sidebar}
            className={`asidelayout ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="brandLayout">
                <NavLink to="/" className="nav-link">
                    <h2>RSBuilder</h2>
                </NavLink>


                {/* 
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button> */}
            </div>
            <div className="navouterlayout">
                <nav className="leftlayoutnav">
                    <div className="navinnerlayout">
                        <h6>
                            MENU
                        </h6>
                        <ul className="navLinks">
                            <li>
                                <NavLink to="/" className="nav-link">
                                <img src="public/home.svg" alt="HomeSVG" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/templateGallery" className="nav-link">
                                <img src="public/template.svg" alt="tplySVG" />
                                    Template Gallery
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </aside>

    )
}

export default Sidebar;