import React from 'react'

const UserPage = async() => {

  interface User{
    id:number;
    name:string;
  }
    const res =await fetch("https://jsonplaceholder.typicode.com/users");
    const users:User[] = await res.json();
  return (
    <div>
      <h2>User page</h2>
      <ul>
        {users.map(user =><li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UserPage
