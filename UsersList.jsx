import { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/0/1')
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
        {users.map(user =>(
            <h1>{user}</h1>
        ))}
    </div>
  );
}

export default UsersList;
