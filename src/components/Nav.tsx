import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

import { OverlayNavData } from './NavData';

const OverlayNavMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: var(--gray-200);
    position: absolute;
    bottom: 5%;
    left: 80%;
    z-index: 1000;
`
const MenuItems = styled.li`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
`
const MenuItemLinks = styled(Link)`
    display: flex;
    width: 100%;
    font-size: 2rem;
    color: var(--whiter);

    &:hover {
        background-color: var(--gray-400);
        color: var(--gray-200);
        border-radius: 1rem;
    }
`

const Nav: React.FunctionComponent = () => {
    return (
        <>
            <OverlayNavMenu role="navigation">
                {OverlayNavData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                            </MenuItemLinks>
                        </MenuItems>
                    )
                }
                )}
            </OverlayNavMenu>
        </>
    )
}

export default Nav
