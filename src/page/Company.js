import React from 'react';
import CompanyBanner from '../components/company/CompanyBanner'

import Footer from '../components/footer/Footer'
import styles from './Company.module.css'
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import Method from '../components/company/Method'
import Performance from '../components/company/Performance'
// import Interaction from '../components/company/Interaction'

function Company() {
    return (
        <>
            <CompanyBanner/>
            <Container>
                <div className={styles.contentWrap}>
                    <Method/>
					<Performance/>
					{/* <Interaction/> */}
                </div>
			</Container>
            <Footer/>
        </>

    )
}

export default Company;