import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Notfound from './components/404';
import Home from './components/Home';
const Repo = React.lazy(() => import('./components/Repos'));

function App() {
	return (
		<div className="App">
			<ul className="App-nav-li">
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/repos">Go to Repos page</Link>
				</li>
			</ul>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/repos"
					element={
						<React.Suspense fallback='Please Wait while the data loads'>
							<Repo />
						</React.Suspense>
					}
				/>
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
