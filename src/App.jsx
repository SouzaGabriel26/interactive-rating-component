import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import Form from './components/Form';
import Thank from './components/Thank';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [selectedRating, setSelectedRating] = useState();

  return (
    <Box>
      {isTrue
        ? <Thank rating={selectedRating} /> : (
          <Form
            handleResult={() => setIsTrue(true)}
            selectedRating={(rating) => setSelectedRating(rating)}
          />
        )}
    </Box>
  );
}

export default App;
