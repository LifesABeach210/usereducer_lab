import { useState, useReducer } from 'react';
import './App.css';
import { productReducer } from './reducers/productReducer';
import { logDOM } from '@testing-library/react';
function App() {
  const [usersData, setUsersData] = useState(false)
  const [inputUserData, setInputUserData] = useState('')
  const [postsData, setPostsData] = useState(false)
  const [inputPostsData, setInputPostsData] = useState('')
  const [todosData, setTodosData] = useState(false)
  const [inputTodoData, setInputTodoData] = useState('')
  let initialState = ''
  const [productState, dispatch] = useReducer(productReducer, initialState)
  console.log(productState, 'app.js')

  return (
    <div className="App">
      <input placeholder='UsersID' onChange={(e) => {
        e.preventDefault()

        setInputUserData(e.target.value);
        setUsersData(true)



      }}></input><div><button onClick={() => {
        if (usersData === true && inputUserData !== " ") {
          const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputUserData}`)
            const responseJSON = await response.json()
            console.log(responseJSON);

          }
          getData()
        }
        if (usersData === false) {
          const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const responseJSON = await response.json()
            console.log(responseJSON);
          }
          getData()
        }
      }}>Get Users</button></div>
      <input placeholder='PostID' onChange={(e) => {
        e.preventDefault()

        setInputPostsData(e.target.value);
        setPostsData(true)



      }}></input><div><button onClick={() => {
        if (postsData === true && inputPostsData !== " ") {
          const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputPostsData}`)
            const responseJSON = await response.json()
            console.log(responseJSON);

          }
          getData()
        }
        if (postsData === false) {
          const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const responseJSON = await response.json()
            console.log(responseJSON);
          }
          getData()
        }
      }}>Get Post</button></div>
      <input placeholder='TodoID' onChange={(e) => {
        e.preventDefault()

        setInputTodoData(e.target.value);
        setTodosData(true)



      }}></input><div><button onClick={() => {
        if (todosData === true && inputTodoData !== " ") {
          const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputTodoData}`)
            const responseJSON = await response.json()
            console.log(responseJSON);
            dispatch({
              type: "TODO_SINGLE",
              payload: responseJSON
            })
          }
          getData()
        }
        if (todosData === false) {
          const getData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const responseJSON = await response.json()
            console.log(responseJSON);
          }
          getData()
        }
      }}>Get Todos</button></div>
    </div>
  );
}

export default App;
