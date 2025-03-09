import React from 'react';
import { ListItem, IconButton, Checkbox, Typography } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <ListItem
      sx={{
        mb: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
        '&:hover': { bgcolor: 'grey.50' },
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        color="primary"
      />
      <Typography
        sx={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'text.secondary' : 'text.primary',
        }}
      >
        {todo.text}
      </Typography>
      <IconButton
        onClick={() => onDelete(todo.id)}
        color="error"
        size="small"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem; 