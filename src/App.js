import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routers from './Routes';
import { AppProvider } from './Context.js/Context';




function App() {

  return (
   
     <>
    <AppProvider>
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      
    </div>
  </AppProvider>
    </>
  );
}

export default App;
