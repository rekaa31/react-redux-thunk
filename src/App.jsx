import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { PostService } from './services/PostService';

function App() {

	const [listPost, setListPost] = useState([])

	// HTTP Request ? GET, POST, PUT, DELETE

	// GET -> MENGAMBIL 
	// POST -> MENGIRIMKAN 
	// PUT -> MENGIRIMKAN (UPDATE )
	// DELETE -> MENGHAPUS

	// ComponentDidMount -> Suatu proses ketika component pertama kali di render
	useEffect(() => {
		PostService.getPost('https://jsonplaceholder.typicode.com/posts').then((response) => {
			setListPost(response)
		})
	}, [])

	return (
		<div className="App">
			<ul>
				{listPost.map((item) => 
					<li>{item.title}</li>
				)}
			</ul>
		</div>
	);
}

export default App;
