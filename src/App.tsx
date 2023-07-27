import { useEffect, useState } from 'react';
import {PageIndex} from "./pages/index";
import { InfoSmallSizeComponent } from './components/InfoSmallSizeComponent';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 700;

  return (
    <>
      {isMobile ? (
        <InfoSmallSizeComponent/>
      ) : (
        <div className="App">
      <PageIndex />
    </div>
      )}
    </>
  );
};

export default App;
