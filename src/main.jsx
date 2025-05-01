import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dis from './Dis.jsx';
import List from './List.jsx';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
   <Dis/>
   <List />
  </>
);
