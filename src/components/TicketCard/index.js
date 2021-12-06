import React from "react";

import styles from './TicketCard.module.scss';
import { getImg } from "../../utils/Helper";

const TicketCard = (props) => {

    return (
        <div className={styles.div}>
            <img src={getImg('ticket.png')} alt="ticket" />
            <h5>
                {props.card.title}
            </h5>
            <div className={styles.divider} />
            <div className={styles.footer}>
                <div>
                    <div className={styles.date}>
                        {props.card.date}
                    </div>
                    <div className={styles.time}>
                        {props.card.time}
                    </div>
                </div>
                <img src={getImg('qr.png')} />
            </div>
        </div>
    )
}

export default TicketCard