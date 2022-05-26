import "./App.css";
import PageLayout from "./components/Layout/PageLayout";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
	return (
		<>
			<PageLayout>
				<Navbar />
				<HomePage />
			</PageLayout>
		</>
	);
}

export default App;
