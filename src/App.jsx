import React, { useState,useEffect, useRef} from 'react'

const App = () => {
  const[question , setQuestion] =useState([]);
  const[index , setIndex] = useState(0)
  const checkedInput =useRef([])
  const [selectAnswer, setSelectAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false  );
  function nextQuestion() {

const checkedButton = checkedInput.current.find(input => input.checked)
if(checkedButton){
  const answer =checkedButton.value;
  const correctAnswer = question[index].correctAnswer;


  const isAnswerCorrect = answer === correctAnswer;
  setIsCorrect(isAnswerCorrect);


  if(isAnswerCorrect){
    setCorrectAnswersCount(prevCount => prevCount +1);
  }

 
  
  
  if(index < question.length -1){
    setIndex(index + 1)
    setSelectAnswer(''); // Reset the selected answer for the next question
    checkedInput.current.forEach(el=> el.checked =false)
  }else{
    setQuizCompleted(true);
    
  }
}
};
function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
  
        [array[i], array[j]] = [array[j], array[i]];
      }
  
      return array;
      console.log(shuffleArray);
      
    }
  

  useEffect(() => {
async function getData(){
   try{
const Data = await fetch ('https://the-trivia-api.com/v2/questions');
const apiData = await Data.json();
console.log(apiData);
setQuestion (apiData);

        }catch(error){
            console.log(error);
            
        }
  }

      
  getData();
  
  
},[]);
return (
  <div className="container mx-auto p-4">
  {question.length > 0 ? (
    <div className="my-4">
      {!quizCompleted ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{question[index].question.text}</h1>

          <div className="space-y-2">
            {shuffleArray([...question[index].incorrectAnswers, question[index].correctAnswer]).map((item, i) => (
              <div key={i} className="flex items-center">
                <input
                  type="radio"
                  name="choice"
                  id={item}
                  value={item}
                  ref={el => (checkedInput.current[i] = el)}
                  onChange={() => setSelectAnswer(item)}
                  checked={selectAnswer === item}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <label htmlFor={item} className="ml-2 text-lg">
                  {item}
                </label>
              </div>
            ))}
          </div>

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            onClick={nextQuestion}
          >
            Next
          </button>

          {isCorrect !== null && (
            <p className={`mt-4 text-lg ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </p>
          )}
        </>
      ) : (
        <h1 className="text-xl font-bold">
          Your final score is: {correctAnswersCount} out of {question.length}
        </h1>
      )}
    </div>
  ) : (
    <h1 className="text-xl">Loading...</h1>
  )}
</div>
);
};

export default App;







































// not cmplete
// import { useEffect, useRef } from "react";

// import React, { useState } from "react";

// const App = () => {
//   let [questions, setQuestions] = useState([]);
//   let [index, setIndex] = useState(0);
//   const checkedInput = useRef([]);

//   function nextQuestion() {
  
//     const checkedButton = checkedInput.current.find(input => input.checked);
//  if(checkedButton){
//    console.log(checkedButton.value);

//  }
 
//     if (index < questions.length - 1) {
//       setIndex(index + 1);
//     } else {
//       alert("Questions Completed");
//     }
//   }

//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));

//       [array[i], array[j]] = [array[j], array[i]];
//     }

//     return array;
//   }

//   useEffect(() => {
//     async function getData() {
//       try {
//         const Data = await fetch("https://the-trivia-api.com/v2/questions");
//         const apiData = await Data.json();
//         console.log(apiData);
//         setQuestions(apiData);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getData();
//   }, []);

//   return (
//     <>
//       {questions.length > 0 ? (
//         <div>
//           <h1>{questions[index].question.text}</h1>

//           {shuffleArray([...questions[index].incorrectAnswers , questions[index].correctAnswer]).map((item , index)=>{
//             return <li key={index}>
//             <input type="radio" name='choice' id={item} value={item} ref={el => (checkedInput.current[index] = el)}/>
//             <label htmlFor={item}>{item}</label>
//           </li>
          
//           })}
//           <button className="border-[1px] border" onClick={nextQuestion}>
//             Next
//           </button>
//         </div>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </>
//   );
// };

// export default App
