// import React from 'react'
// import Card from '../components/card'
// import './App.css'

// const App = () => {
//   return (
//     <>
//     <div className='flex flex-wrap  gap-[50px] justify-center'>
//     <Card title="service" discription=" our quality no compromise" image="https://images.olx.com.pk/thumbnails/475974069-800x600.webp"/>
//     <Card title="bata" discription=" one team one goal" image="https://images.olx.com.pk/thumbnails/475974069-800x600.webp"/>
//     <Card title="unilever" discription=" good quality" image="https://images.olx.com.pk/thumbnails/475974069-800x600.webp"/>
//     </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//     let [users ,setUsers] = useState([]);

//     useEffect(()=>{
//         async function getData(){
// const api= await fetch ("https://jsonplaceholder.typicode.com/users")
// // console.log(await api.json());

// let usersChangeValue = await api.json()
// console.log(usersChangeValue);

// users.push(usersChangeValue)
// setUsers([...usersChangeValue]);

//         }
//         getData()

//         },[])

//         return (
//             <>
//            {users.length > 0 ? (users.map((item , index)=>
//            {
//            return <div className="border border-gray-300 rounded-lg p-4 m-4 bg-white shadow-lg max-w-xs mx-auto" key={item.id}>
//            <h1 className="text-2xl font-bold text-blue-600 mb-2 text-center">{item.name}</h1>
//            <h1 className="text-lg text-gray-700 mb-1 text-center">{item.phone}</h1>
//            <h1 className="text-lg text-gray-700 text-center">{item.email}</h1>
//          </div>
//            }

// )):(<h1>not found</h1>)}

//             </>

//         )
//     }

// export default App

// import axios from 'axios'
// import React, { useRef, useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//   let [show, setShow]=useState([])
//   let [index,setIndex]= useState(0);
// useEffect(()=>{
//    async function receivedData(){
//   const api = await axios (`https://the-trivia-api.com/v2/questions`)
//   var updatedValue = api.data;
//   console.log(updatedValue);

//   setShow(updatedValue)

// }
// receivedData()

// },[])

// function nextFunction (){
//   index < show.length - 1 ? setIndex(index + 1) : alert("question khtm hogaye maalik")
// }

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));

//     [array[i], array[j]] = [array[j], array[i]];
//   }

//   return array;
// }

// // const App = ({ show, index, nextFunction }) => {
//   const checkedInput = useRef([]);

//  return (
//   <>
//             {show.length > 0 ? (
//   <div>
//     <h1>{show[index].question.text}</h1>
//     <ul>
//           {shuffleArray([...show[index].incorrectAnswers ,show[index].correctAnswer]).map((item , index)=>{
//             return <li key={index}>
//             <input type="radio" name='choice' id={item} value={item} ref={el => (checkedInput.current[index] = el)}/>
//             <label htmlFor={item}>{item}</label>
//           </li>

//           })}

//     </ul>
//     <button className=' border border-[1px] ' onClick={nextFunction}>Next </button>
//   </div>
// ) : null}

//   </>
// );
// };

// export default App
import {useEffect} from 'react'

import React, { useState } from 'react'


const App = () => { 
  let [questions,setQuestions] = useState([]);
  let [index,setIndex] = useState(0);

function nextQuestion(){
  console.log('next question function  working')
  if(index < questions.length-1){

    setIndex(index + 1);
  }else{
    alert('Questions Completed')
  }

}

  useEffect(() => {
  async function getData(){
    try{
      const Data = await fetch('https://the-trivia-api.com/v2/questions');
      const apiData =  await Data.json();
      console.log(apiData);
      setQuestions(apiData);
    }catch(error){
      console.log(error)
    }
  }
  
  
    getData()
    
  
  }, [])
  

  return <>
  {questions.length > 0  ? <div>
    <h1>{questions[index].question.text}</h1>
    <button className='border-[1px] border' onClick={nextQuestion}>Next</button>
  </div>:<h1>Loading...</h1>}

  </>;
};

export default App;
