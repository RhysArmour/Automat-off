import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageBody from './components/PageBody';
import Footer from './components/Footer';

function App() {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  return (
    <>
      <Header />
      <PageBody isOnline={isOnline} />
      <Footer />
    </>
  );
}
export default App;

