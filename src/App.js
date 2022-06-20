import './App.css';
import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {TodoList} from './TodoList.js'
import {EditList} from './EditList'

function App() {

  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="todos" list={TodoList} edit={EditList} />
      </Admin>
    </div>
  );
}

export default App;
