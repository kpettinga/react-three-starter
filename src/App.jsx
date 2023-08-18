import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'
import './App.css'

function App() {
	return (
		<div className="App">
			<Canvas>
				<OrbitControls minDistance={1} maxDistance={10} />
				<ambientLight intensity={0.2} />
				<directionalLight color="skyblue" intensity={0.4} position={[-5, 0, 5]} />
				<directionalLight color="pink" intensity={0.4} position={[5, 0, -5]} />
				<Cube />
			</Canvas>
		</div>
	)
}

export default App
