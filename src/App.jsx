
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3500/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  const handleAddUser = (e) => {
    e.preventDefault();
    // const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:3500/users', {
      method: 'POST',
      headers: {
        ' content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('inside post response', data);
      })
  }
  return (
    <>
      <div>
        <h1>Users Management System</h1>
        <h3>Numbers of users : {users.length}</h3>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="add users" />
        </form>
        <div>
          {
            users.map((user) => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
