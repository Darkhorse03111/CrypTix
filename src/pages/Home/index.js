import React from "react";

import styles from './Home.module.scss';
import { useResize } from "../../utils/Helper";
import TextBox from "../../components/TextBox";
import SpinCard from '../../components/SpinCard';
import Button from "../../components/Button";

const cards = [
    {
        "date": "Dec 17, 2021",
        "time": "9 pm CST"
    },
    {
        "date": "Dec 17, 2021",
        "time": "10 pm CST"
    },
    {
        "date": "Dec 18, 2021",
        "time": "8 pm CST"
    },
    {
        "date": "Dec 18, 2021",
        "time": "9 pm CST"
    },
    {
        "date": "Dec 18, 2021",
        "time": "10 pm CST"
    }
]

const Home = () => {

    const { isMobile } = useResize()

    return (
        <div className={styles.div}>
            <div className={styles.text}>
                <TextBox />
            </div>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <SpinCard card={card} key={index} />
                ))}
                <Button value="Buy"
                    style={isMobile ? { width: 343, height: 72, marginTop: 32, marginLeft: 'auto', marginRight: 'auto', marginBottom: 100 }
                        : { width: 445, height: 72, marginTop: 32, marginLeft: 'auto', marginRight: 'auto' }} green />
            </div>
        </div>
    )
}

export default Home