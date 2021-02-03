import React from 'react';
import {Principal} from './components/Principal'
import {Provider} from 'react-redux';
import generarStore from './Redux/store';

function App() {
  return (
    <Provider store = {generarStore()}>    
      <Principal/>      
    </Provider>
  );
}

export default App;
