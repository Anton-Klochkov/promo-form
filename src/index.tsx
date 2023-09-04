import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import FormPromo from './FormPromo';

const root = ReactDOM.createRoot(
  document.getElementById('formPromo') as HTMLElement,
);

root.render(
  <StrictMode>
    <FormPromo />
  </StrictMode>,
);
