import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomID, setRoomID] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomID.trim()) {
      navigate(`/room/${roomID}`);
    } else {
      alert('Please enter a room name');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter room name"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleJoin}>Join Room</button>
    </div>
  );
}

export default Home;


