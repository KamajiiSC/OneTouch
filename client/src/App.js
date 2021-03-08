import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import JoinPage from './components/JoinPage/JoinPage';
import FindPage from './components/FindPage/FindPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <main className="App">
      <LandingPage />
      <JoinPage />
      <FindPage />
      <ContactPage />
    </main>
  );
}

export default App;
