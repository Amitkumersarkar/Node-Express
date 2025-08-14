
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
      </div>
    </>
  )
}

export default App
