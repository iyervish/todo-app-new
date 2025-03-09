import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import TodoList from './components/TodoList';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
