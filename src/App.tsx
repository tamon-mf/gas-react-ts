import { useState } from "react";
import "./App.css";
import { Button, MultipleSelectBox } from "@moneyforward/mfui-components";

function App() {
	const [count, setCount] = useState(0);

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
					options={[
						{
							label: "Option 1",
							value: "option1",
						},
						{
							label: "Option 2",
							value: "option2",
						},
						{
							label: "Option 3",
							value: "option3",
						},
					]}
				/>
			</div>
		</>
	);
}

export default App;
