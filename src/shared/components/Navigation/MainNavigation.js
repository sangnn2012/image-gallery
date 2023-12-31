import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from './../UIElement/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const toggleSideDrawer = () => {
        setIsDrawerOpened((prevIsDrawerOpened) => !prevIsDrawerOpened);
    };
    const openDrawer = () => {
        setIsDrawerOpened(true);
    }
    const closeDrawer = () => {
        setIsDrawerOpened(false);
    }
    const itemClickedHandler = () => {
        closeDrawer();
    }
    return (
        <React.Fragment>
            {isDrawerOpened && <Backdrop onClick={closeDrawer}/>}
            <SideDrawer show={isDrawerOpened}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks onItemClicked={itemClickedHandler} />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button
                    className="main-navigation__menu-btn"
                    onClick={openDrawer}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        YourPlaces
                    </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
};

export default MainNavigation;