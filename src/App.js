import logo from './logo.svg';
import './App.css';
import Header from './com/Header';
import Footer from './com/Footer';
// Header

function App() {
  return (
    <div>
  <Header title="Code With Faiz" find={true}/>
  <Footer />
    </div>
  );
}

export default App;
