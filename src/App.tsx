import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-container">
          <h3>Хочу достичь следующих целей:</h3>
          <ul>
            <li>погрузиться в разработку фронтенда на React</li>
          </ul>

          <h3>Владею следующими технологиями:</h3>
          <ul>
            <li>backend на java и немного css/html/javascript</li>
          </ul>

          <h3>О себе:</h3>
          <ul>
            <li>довольно давно на java backend, на проекте возникла задача по переносу клиентской части приложения
               на html/javascript и стало интересно как устроен современный фронтенд</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
