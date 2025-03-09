import React, { useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          My Todo List
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <AddTodo onAdd={addTodo} />
          <Box sx={{ mt: 2 }}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default TodoList; 