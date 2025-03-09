import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1 }}>
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        size="small"
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </Box>
  );
}

export default AddTodo; 