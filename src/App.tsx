import React from 'react';
import { Navbar } from './components/Nawbar';
import { TodoForm } from './components/TodoForm';



const App: React.FunctionComponent = () => {
  return ( 
    <>
      <Navbar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
