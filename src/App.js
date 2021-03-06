import React, { Suspense } from 'react';
import { BrowserRouter as Router }  from 'react-router-dom';

import Loadable from 'react-loadable'
import Loader from './components/ui/Loader/Loader'

import Routes from './router/router'

import './App.css'

const Header = Loadable({
  loader: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(import('./components/header/Header')), 1000);
    }),
  loading: Loader,
  render: (module, props) => {
    const { Header } = module;
    return <Header {...props} />;
  },
})

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
        </Suspense>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
