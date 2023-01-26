import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { db } from './firebase';

function CheckUp(e) {
  e.preventDefault();
  const history = useHistory()
  const [userExists, setUserExists] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .where('username', '==', username)
      .onSnapshot((snapshot) => {
        setUserExists(snapshot.size > 0);
      });

    return () => unsubscribe();
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.elements.username.value);
  }

  if (userExists) {
    const answer = window.confirm(`User ${username} exists. Do you want to create a store component?`);
    if (answer) {
      history.push("/store");
    }
  } else {
    console.log("User not found.");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckUp;
