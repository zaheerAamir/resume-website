import React from 'react';

import './App.css';
import Connect from './components/Wallet/Connect';
import Home from './components/Home';


const App = () => {
	
	

	return (
		<div className='App-header'>
		<Home/>
		<Connect></Connect>
		</div>
		
	);
};

export default App;
