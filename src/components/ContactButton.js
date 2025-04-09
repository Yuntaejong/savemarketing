import React from 'react';
import styles from './ContactButton.module.css'
import { Link } from "react-router-dom";

function ContactButton() {
    return (
        <button className={styles.btn}>
			<span className={`${styles.theArrow} ${styles.leftArrow}`}>
				<span className={styles.shaft}></span>
			</span>
            <Link to="/contact">
				<span className={styles.main}>
					<span className={styles.text}>Contact</span>
					<span className={`${styles.theArrow} ${styles.rightArrow}`}>
						<span className={styles.shaft}></span>
					</span>
				</span>
			</Link>

        </button>
    )
}

export default ContactButton;
