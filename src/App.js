import './App.css';
import {Admin, Resource, ListGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {TodoList} from './TodoList.js'
import {EditList} from './EditList'
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

function App() {

  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="todos" list={TodoList} edit={EditList}  icon={PostIcon} />
        <Resource name="users" icon={UserIcon} list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
