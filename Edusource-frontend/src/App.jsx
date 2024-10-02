import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'; // Adjust this path based on your file structure
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {}
                <Route path="/" element={<Home />} />
                {}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
