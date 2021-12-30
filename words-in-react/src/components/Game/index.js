import axios from 'axios';
import { useEffect, useState } from 'react';

const Game = () => {
  const [playerLevel, setPlayerLevel] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [clickedButton, setClickedButton] = useState([]);
  const [score, setScore] = useState(0);

  const fetchWords = () => {
    const words = {
      method: 'GET',
      // ----------- destructured url -------------
      // url: 'http://localhost:8000/words',
      // params: { level: playerLevel, area: 'sat' },
      url: `http://localhost:8000/words?level=${playerLevel}&area=sat`,
    };

    axios
      .request(words)
      .then((response) => {
        console.log(response.data);
        setQuizData(response.data);
        // console.log(response.data.quizlist);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (playerLevel) fetchWords();
  }, [playerLevel]);

  const checkAnswer = (option, optionIndex, correctAnswer) => {
    console.log(optionIndex, correctAnswer);
    if (optionIndex == correctAnswer) {
      setCorrectAnswers([...correctAnswers, option]);

      setScore((score) => score + 1);
    } else {
      setScore((score) => score - 1);
    }
    setClickedButton([...clickedButton, option]);
  };

  console.log(`correctAnswers: ${correctAnswers}`);
  console.log(`clickedButton: ${clickedButton}`);

  return (
    <div className='app'>
      {!playerLevel && (
        <div className='level-selector'>
          <h1>Words in React</h1>
          <p>Select Your level to start</p>
          <select
            name='levels'
            id='levels'
            value={playerLevel}
            onChange={(e) => setPlayerLevel(e.target.value)}
          >
            <option value={''}>Select a Level</option>
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

      {playerLevel && quizData && (
        <div className='question-area'>
          <h1>Welcome to level: {playerLevel}</h1>
          <h3>Your score is: {score}</h3>

          <div className='questions'>
            {quizData.quizlist.map((quizQ, _quizQIndex) => (
              <div key={_quizQIndex} className='question-box'>
                {quizQ.quiz.map((finalQ, _index) => (
                  <p key={_index}>{finalQ}</p>
                ))}
                <div className='question-buttons'>
                  {quizQ.option.map((option, optionIndex) => (
                    <div key={optionIndex} className='question-button'>
                      <button
                        disabled={clickedButton.includes(option)}
                        onClick={() =>
                          checkAnswer(option, optionIndex + 1, quizQ.correct)
                        }
                      >
                        {option}
                      </button>
                      {correctAnswers.includes(option) && <p>Correct!</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setPlayerLevel(null)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Game;
