/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  const addUser = async () => {
    const response = await axios.post(API_URL, newUser);
    setUsers([...users, response.data]);
    setNewUser({ name: '', email: '' });
  };

  const updateUser = async () => {
    const response = await axios.put(`${API_URL}/${editingUser.id}`, editingUser);
    setUsers(users.map(user => (user.id === editingUser.id ? response.data : user)));
    setEditingUser(null);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="user-form">
        <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={editingUser ? editingUser.email : newUser.email}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={editingUser ? updateUser : addUser}>
          {editingUser ? 'Update' : 'Add'}
        </button>
        {editingUser && <button className="cancel" onClick={() => setEditingUser(null)}>Cancel</button>}
      </div>
      <div className="user-list">
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <div>
                <strong>{user.name}</strong> - {user.email}
              </div>
              <div>
                <button className="edit" onClick={() => setEditingUser(user)}>Edit</button>
                <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;