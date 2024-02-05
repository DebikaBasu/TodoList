import React, { useState } from 'react';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import Login from './component/Login';
import Reminder from './component/Reminder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    if (index >= 0 && index < newTodos.length && typeof newTodos[index] === 'object') {
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleLogin = (user, pass) => {
    if (user && pass) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  };

  return (
    <div className="app-container">
      <BrowserRouter>
        <Container maxWidth="sm" style={{ marginTop: '50px', fontFamily: 'Open Sans, sans-serif', color: '#333' }}>
          <Typography variant="h4" align="center" gutterBottom>
            {isLoggedIn ? (
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#000000' }}>My Todo List</h1>
            ) : (
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#000000' }}>Please Login</h1>
            )}
          </Typography>

          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <>
                    <AddTodo addTodo={addTodo} />
                    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    <Reminder todos={todos} />
                  </>
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
