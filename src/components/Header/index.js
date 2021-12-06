import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'

import { getImg, useResize } from "../../utils/Helper";
import styles from './Header.module.scss';
import Button from "../Button";

const headerStyle = {
    position: 'fixed',
    background: 'var(--grey)',
    top: 0,
    left: 0,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16
}

const Header = (props) => {

    const { isMobile } = useResize()
    let toggleImg = getImg('toggle.png')

    if (props.isOpenMenu) toggleImg = getImg('close.png')
    else toggleImg = getImg('toggle.png')

    const toggleMenu = () => {
        props.setIsOpenMenu(!props.isOpenMenu)
    }

    return (
        <header style={(isMobile && props.isOpenMenu) ? headerStyle : {}}>
            <div className={styles.div}>
                <NavLink to="/"><img src={getImg('logo.png')} alt="logo" /></NavLink>
                <div>
                    {!isMobile && props.account && <NavLink to="/tickets" activeClassName={styles.active}>My Tickets</NavLink>}
                    {!isMobile && <Button
                        value={props.account ? props.account.substr(0, 5) + '...' + props.account.substr(38, 42) : "Connect"}
                        style={{ width: 140, height: 56 }} white
                        onClick={props.handleClick} />}
                    {isMobile && (props.account ? <Button
                        value={props.account.substr(0, 5) + '...' + props.account.substr(38, 42)}
                        style={{ width: 95, height: 32, fontSize: 12 }} white />
                        : <img src={getImg('wallet.png')} onClick={props.handleClick} alt="wallet" />)}
                    {isMobile && <img src={toggleImg} onClick={toggleMenu} className={styles.toggle} alt="toggle" />}
                </div>
            </div>
            {props.isOpenMenu && <div className={styles.menu}>
                <div>
                    {props.account && <NavLink to="/tickets" activeClassName={styles.active} onClick={() => props.setIsOpenMenu(false)}>My Tickets</NavLink>}
                    <div onClick={props.closeAccount}>Disconnect</div>
                </div>
            </div>}
        </header>
    )
}

export default Header