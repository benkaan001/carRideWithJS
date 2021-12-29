import react, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Game = () => {
  const [playerLevel, setPlayerLevel] = useState(null);
  const fetchWords = async () => {
    const url = `https://twinword-word-association-quiz.p.rapidapi.com/type1/?level=${playerLevel}&area=sat`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
        'x-rapidapi-key': '2cd3bd81a0mshf13b3a487cf865ap19edd7jsn043f617be8f1',
      },
    });
    const words = await response.json();
    return words;
  };

  fetchWords().then((words) => {
    console.log(words);
    return words;
  });

  const levelHandler = (e) => {
    e.preventDefault();
    const usersLevel = e.target.value;
    console.log(usersLevel);
    setPlayerLevel(usersLevel);
  };

  useEffect(() => {
    if (playerLevel) {
      fetchWords();
    }
  }, [playerLevel]);

  return (
    <>
      <Container>
        {!playerLevel && (
          <div className='level-div'>
            <h1> Words in React </h1>
            <p>Select a level to start</p>
            <select value={playerLevel} onChange={levelHandler}>
              <option value={null}>Select a Level</option>
              <option value='1'>Level 1</option>
              <option value='2'>Level 2</option>
              <option value='3'>Level 3</option>
              <option value='4'>Level 4</option>
              <option value='5'>Level 5</option>
              <option value='6'>Level 6</option>
              <option value='7'>Level 7</option>
              <option value='8'>Level 8</option>
              <option value='9'>Level 9</option>
              <option value='10'>Level 10</option>
            </select>
          </div>
        )}
      </Container>

      <Container>
        {playerLevel && (
          <div className='card-div'>
            <h1> Welcome to level: {playerLevel}</h1>
          </div>
        )}
      </Container>
    </>
  );
};

export default Game;
