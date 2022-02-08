import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import './index.css'
import Footer from './components/Footer';

export default function App() {
	return (
		<div className=" bg-gray-300 font-mono"
		>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
		
	)
}
