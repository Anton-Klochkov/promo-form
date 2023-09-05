import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Dialog from './dialogPromo/DialogPromo';

const root = ReactDOM.createRoot(
  document.getElementById('dialog') as HTMLElement,
);

root.render(
  <StrictMode>
    <Dialog />
  </StrictMode>,
);
