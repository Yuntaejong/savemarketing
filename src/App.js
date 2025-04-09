import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";

// 페이지 컴포넌트 Lazy 로딩
const Main = lazy(() => import("./page/Main"));
const Company = lazy(() => import("./page/Company"));
const Solution = lazy(() => import("./page/Solution"));
const Client = lazy(() => import("./page/Client"));
const Contact = lazy(() => import("./page/Contact"));

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<Suspense fallback={<div className="loading"><span className="loader"></span></div>}>
				<Navigation />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/company" element={<Company />} />
						<Route path="/solution" element={<Solution />} />
						<Route path="/client" element={<Client />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
