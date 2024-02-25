import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import './index.css'

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <AllRoutes />
      <main/>
      <Footer/>
    </div>
      </>
  );
}

export default App;
