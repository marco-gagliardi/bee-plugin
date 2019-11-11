import React, {StrictMode} from 'react'
import Routes from "./pages/Routes";
import ErrorHandler from "./components/ErrorHandler";
import './App.css'

const App = () => {
  return (
    <StrictMode>
      <ErrorHandler>
        <Routes/>
      </ErrorHandler>
    </StrictMode>
  )
};

export default App