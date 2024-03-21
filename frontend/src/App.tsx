import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageBody from './components/PageBody';
import Footer from './components/Footer';

function App() {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      platform: 'web',
    }),
  };

  async function postData() {
    const { status } = await fetch('http://localhost:4000/v1/maintenance-mode', requestOptions);
    console.log(status);
    if (status === 404) {
      setIsOnline(false);
    } else {
      setIsOnline(true);
    }
  }

  useEffect(() => {
    const intervalCall = setInterval(() => {
      postData();
    }, 30000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <>
      <Header />
      <PageBody isOnline={isOnline} />
      <Footer />
    </>
  );
}
export default App;

