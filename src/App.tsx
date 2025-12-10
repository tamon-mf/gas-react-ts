import { useState } from "react";
import "./App.css";
import { Button, MultipleSelectBox } from "@moneyforward/mfui-components";
import { useDevices } from "./hooks/useDevices";

function App() {
	const [count, setCount] = useState(0);

	const { data, isLoading } = useDevices();

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)} type="button">
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<Button priority="primary">MFUI Button</Button>
				<MultipleSelectBox
					placeholder="Select devices"
					options={data?.map((device) => ({
						label: device.name,
						value: device.id,
					}))}
					loading={isLoading}
				/>
			</div>
		</>
	);
}

export default App;
