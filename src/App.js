import React from 'react';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/Header";
import {AppRoutes} from './AppRoutes'
import Footer from "./Components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;