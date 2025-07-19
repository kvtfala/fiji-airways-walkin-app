import React from 'react';
import './App.css';
import Header from './components/Header';
import QueueBoard from './components/QueueBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <QueueBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
