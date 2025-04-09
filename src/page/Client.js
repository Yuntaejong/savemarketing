import React from 'react';
import styles from './Client.module.css'
import ClientBanner from '../components/client/ClientBanner'
import ClientList from '../components/client/ClientList'
import Footer from '../components/footer/Footer'
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Client() {
    return (
        <>
            <ClientBanner/>
            <Container fluid>
				<div className={styles.contentWrap}>
					<ClientList/>
				</div>
			</Container>
			<Footer/>
        </>
    )
}

export default Client;