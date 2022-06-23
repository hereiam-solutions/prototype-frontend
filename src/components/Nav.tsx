import React from 'react';
import { Link } from 'react-router-dom';

import { OverlayNavData } from './NavData';

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
