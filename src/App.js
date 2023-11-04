import './App.css';
import TaskList from './containers/TaskList/TaskList';
import Task from './containers/Task/Task';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import { cofigureStore } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  let { store, persistor } = cofigureStore();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Routes>
            <Route path='/task' element={<Task />} />
            <Route path='/tasklist' element={<TaskList />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>

  );
}

export default App;
