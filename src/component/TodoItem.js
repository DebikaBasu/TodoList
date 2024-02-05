import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ index, todo, toggleTodo, deleteTodo }) {
  return (
    <ListItem
      style={{
        background: todo.completed
          ? 'linear-gradient(-45deg, #81A9A3, #6D928D)'
          : 'linear-gradient(-45deg, #b69ea6, #8f78b3, #9d90b8)',
        border: '1px solid #CABABA',
        borderRadius: '8px',
        marginBottom: '8px',
        transition: 'background 0.3s ease-in-out',
      }}
      secondaryAction={
        <IconButton onClick={() => deleteTodo(index)} style={{ color: '#BD0F0F' }}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
        style={{
          color: '#10F710',
        }}
      />
      <ListItemText
        primary={todo.text}
        secondary={todo.scheduledDate ? `Scheduled at: ${new Date(todo.scheduledDate).toLocaleString()}` : null}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          fontWeight: 'bold',
          fontSize: '2px',
          color: todo.completed ? '#C71616' : '#212121',
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
