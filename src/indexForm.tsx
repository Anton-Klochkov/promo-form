import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import FormPromo from './formPromo/FormPromo';

const root = ReactDOM.createRoot(
  document.getElementById('form') as HTMLElement,
);

root.render(
  <StrictMode>
    <FormPromo />
  </StrictMode>,
);
