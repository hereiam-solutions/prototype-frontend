import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { OverlayNavData } from './NavData';

const OverlayNavMenu = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 5rem;
    background-color: var(--base-light);
`
const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 35px;
    padding-top: 1rem;
`
const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 2rem;
    text-decoration: none;
    color: var(--base-dark);

    &:hover {
        background-color: var(--gray-400);
        color: var(--gray-200);
        font-weight: 400;
        border-radius: 5px;
    }
`

const Nav: React.FunctionComponent = () => {
    return (
        <>
            <OverlayNavMenu>
                {OverlayNavData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginTop: '10px'}}>{item.title}</span>
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
