import { useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import { LuPanelRightClose, LuPanelLeftClose } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from "react-icons/md";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const sidebarRef = useRef(null);

    // Safe click handler using function reference
    const handleToggle = () => {
        setIsSidebarOpen(prev => !prev);
    };

    // Safe submenu toggle
    const handleSubmenuToggle = () => {
        setActiveSubmenu(prev => prev === 'calculators' ? null : 'calculators');
    };

    // Safe click-outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && 
                !sidebarRef.current.contains(event.target) && 
                !event.target.closest('.sidebar-toggle')) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div 
                className={`sidebar ${isSidebarOpen ? "active" : ''}`} 
                ref={sidebarRef}
            >
                <div className="sidebar-content">
                    <div className="sidebar-logo">
                        <p>Dipped<span>Bytes</span></p>
                    </div>
                    
                    <ul className="sidebar-menu">
                        <li className="menu-item">
                            <div 
                                className="menu-header"
                                onClick={handleSubmenuToggle}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleSubmenuToggle()}
                            >
                                <span className="menu-link">Calculators</span>
                                {activeSubmenu === 'calculators' ? (
                                    <MdOutlineArrowDropDown className="dropdown-icon" />
                                ) : (
                                    <MdOutlineArrowRight className="dropdown-icon" />
                                )}
                            </div>
                            
                            {activeSubmenu === 'calculators' && (
                                <ul className="submenu">
                                    <li>
                                        <Link 
                                            className="submenu-item" 
                                            to="/bmi" 
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            BMI Calculator
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="submenu-item" 
                                            to="/measurements" 
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            Unit Converter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="submenu-item" 
                                            to="/machines" 
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            Machine Tools
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div 
                className='sidebar-toggle' 
                onClick={handleToggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
            >
                {isSidebarOpen ? (
                    <LuPanelLeftClose className="toggle-icon" />
                ) : (
                    <LuPanelRightClose className="toggle-icon" />
                )}
            </div>
        </>
    );
};

export default Sidebar;