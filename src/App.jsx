import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Footer from './components/Footer';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Loader from './components/Loader';
import Routing from '../routing/Routing';

function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div>
    {isLoading ? <Loader />:  <Routing />}
    </div>
  );
}

export default App;