import { useCallback, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';

/** Survives StrictMode remounts within the same JS module lifetime. */
let bootstrapped = false;

export default function App() {
  const [ready, setReady] = useState(() => bootstrapped);
  const onLoadDone = useCallback(() => {
    bootstrapped = true;
    setReady(true);
  }, []);

  return (
    <>
      {!ready && <LoadingScreen onDone={onLoadDone} />}
      <div className={`app-shell${ready ? ' app-shell--visible' : ''}`} aria-hidden={!ready}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
