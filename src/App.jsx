
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3500/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <>
      <div>
        <h1>Users Management System</h1>
        <h3>Numbers of users : {users.length}</h3>
        <form>
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
