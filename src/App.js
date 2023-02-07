import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Footer from "./components/Footer";
import Pricing from './routes/Pricing'
import Faq from './routes/Faq'
import Contact from './routes/Contact'

function App() {
  return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;




