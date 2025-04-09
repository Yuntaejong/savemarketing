import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from "./Navigation.module.css";

function Navigation() {
	const location = useLocation(); // 현재 경로 가져오기
	const currentPath = location.pathname.replace(/\/$/, ""); // 마지막 '/' 제거
	const [expanded, setExpanded] = useState(false);

	const closeNavbar = () => setExpanded(false);

	return (
		<Navbar 
			expand="lg" 
			className={`${styles.container} ${styles.navi}`} 
			expanded={expanded}
			onToggle={setExpanded}
		>
			<Container fluid>
				<Navbar.Brand>
					<h1>
						<Link to="/" className={styles.logo} onClick={closeNavbar}>SAVEMARKETING</Link>
					</h1>
				</Navbar.Brand>
				
				<Navbar.Toggle aria-controls="navbarNav" className={styles.navbarToggler} />
				
				<Navbar.Collapse id="navbarNav" className={styles.navCollapse}>
					<Nav className="ms-auto">
						<Nav.Item>
							<Link 
								to="/" 
								className={`${styles.navLink} ${currentPath === "" ? styles.active : ""}`}
								onClick={closeNavbar}
							>
								세이브마케팅
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link 
								to="/company" 
								className={`${styles.navLink} ${currentPath === "/company" ? styles.active : ""}`}
								onClick={closeNavbar}
							>
								회사 소개
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link 
								to="/solution" 
								className={`${styles.navLink} ${currentPath === "/solution" ? styles.active : ""}`}
								onClick={closeNavbar}
							>
								솔루션
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link 
								to="/client" 
								className={`${styles.navLink} ${currentPath === "/client" ? styles.active : ""}`}
								onClick={closeNavbar}
							>
								클라이언트
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link 
								to="/contact" 
								className={`${styles.navLink} ${currentPath === "/contact" ? styles.active : ""}`}
								onClick={closeNavbar}
							>
								상담 문의
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;