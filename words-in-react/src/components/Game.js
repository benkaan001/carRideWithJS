import react from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Game = () => {
  const url =
    'https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=sound';

  const fetchWords = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com',
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
  return (
    <>
      <h2>game page</h2>
    </>
  );
};

export default Game;
