import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo = {
        text,
        completed: false,
        scheduledDate: scheduledDate || null,
      };

      addTodo(newTodo);
      setText('');
      setScheduledDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={7}>
          <TextField
            fullWidth
            variant="outlined"
            label="Add new todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="todo-input"
            style={{
              borderColor: '#3498db',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            InputProps={{
              style: {
                fontWeight: 'bold',
                color: '#444444', 
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            variant="outlined"
            type="datetime-local"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            style={{
              borderColor: '#3498db',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              background: 'linear-gradient(-45deg, #4caf50, #2196f3)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddTodo;
