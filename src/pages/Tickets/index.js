import React from "react";

import styles from './Tickets.module.scss';
import { useResize } from "../../utils/Helper";
import TicketCard from "../../components/TicketCard";

const cards = [
    {
        "title": "PageDAO Metaverse Authors' Party",
        "date": "Dec 17, 2021",
        "time": "9 pm CST"
    },
    {
        "title": "PageDAO Metaverse Authors' Party",
        "date": "Dec 17, 2021",
        "time": "9 pm CST"
    },
    {
        "title": "PageDAO Metaverse Authors' Party",
        "date": "Dec 18, 2021",
        "time": "9 pm CST"
    },
    {
        "title": "PageDAO Metaverse Authors' Party",
        "date": "Dec 18, 2021",
        "time": "9 pm CST"
    }
]

const Tickets = () => {

    const { isMobile } = useResize()

    return (
        <div className={styles.div}>
            <h2>My Tickets</h2>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <TicketCard card={card} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Tickets