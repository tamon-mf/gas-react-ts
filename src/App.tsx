import "./App.css";
import { PageContainer } from "./components/PageContainer";
import { PageManagerProvider } from "./contexts/PageManagerContext";

function App() {
	return (
		<PageManagerProvider>
			<PageContainer />
		</PageManagerProvider>
	);
}

export default App;
