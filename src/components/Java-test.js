import React from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'В React все является ... ?',
    variants: [
      'Модулем',
      'Пакетом',
      'Компонентом',
      'Классом',
    ],
    correct: 2,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Какое из перечисленных ниже слов не является зарезервированным словом в JavaScript?',
    variants: [
      'default',
      'throw',
      'finally',
      'undefined',
    ],
    correct: 3,
  },
];

function Result ({correct}) {

  return (
    <div className="result">
      <img className="result__img" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt = ""/>

      <h2 className="result__text">Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
      <button className="result__button">Попробовать снова</button>
      </a>
    </div>
  );
}

function Game ({step, question, onClickVariant}) {
  const percentStep = Math.round((step / questions.length) * 100);

  console.log(percentStep)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentStep}%` }} className="progress__inner"></div>
      </div>
      <h1 className="question">{question.title}</h1>
      <ul className="answer">
        {
            question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function JavaTest() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }

  };

  return (
    <div className="JavaTest">
     { 
     step !== questions.length ? 
      (<Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (<Result correct={correct} />)}

    </div>
  );
}

export default JavaTest;