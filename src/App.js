import './App.css';
import {Admin, Resource, EditGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {TodoList} from './TodoList.js';

function App() {

  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="todos" list={TodoList} edit={EditGuesser} />
      </Admin>
    </div>
  );
}

export default App;
