import React from 'react';
import Header from './components/header/Header';
import TaskManager from './components/index'
import './App.css';
import { CartProvider } from 'react-use-cart';

function App() {
	
	return ( 
		<>
		<CartProvider>
			<Header/>
		<TaskManager/>
		</CartProvider>
		</>
	);
}

export default App;



