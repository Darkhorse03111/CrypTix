import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from './PrivateRoute.module.scss';
import { getImg, useResize } from "../../utils/Helper";
import { initWallet, accountAddress } from "../../utils/web3/Wallet";
import { closeWalletProvider } from "../../utils/web3/Wallet";
import Header from "../../components/Header";

const PrivateRoute = ({ component: Component, ...restOfProps }) => {

    const { isMobile } = useResize()
    const address = useSelector(state => state.wallet.address)
    const [account, setAccount] = useState("")
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const init = async () => {
        await initWallet()
        setAccount(accountAddress)
    }

    const handleSetAccount = () => {
        init()
        setIsOpenMenu(false)
    }

    const closeAccount = () => {
        closeWalletProvider()
        setAccount("")
        setIsOpenMenu(false)
    }

    useEffect(() => {
        if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) init()
        else setAccount("")
    }, [address])

    return (
        <div className={styles.div}
            style={!isMobile ? { backgroundImage: `url(${getImg('bg.png')})` } : {}}>
            {/* {!isMobile && <img src={getImg('bg.png')} alt="bg_mob" />} */}
            {isMobile && <img src={getImg('bg_mob.png')} alt="bg_mob" />}
            <div className="container">
                <Header
                    account={account}
                    isOpenMenu={isOpenMenu}
                    setIsOpenMenu={setIsOpenMenu}
                    handleClick={handleSetAccount}
                    closeAccount={closeAccount} />
                <Route
                    {...restOfProps}
                    render={(props) =>
                        // accountAddress ? <Component {...props} /> : <Redirect to="/" />
                        <Component {...props} />
                    }
                />
            </div>
        </div>

    )
}

export default PrivateRoute;