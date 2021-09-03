import styles from "./PartTwo.module.css"
import React, { useState } from "react"

const PartTwo = () => {
  const [textArea, setTextArea] = useState(""),
    [inputText, setinputText] = useState(""),
    [list, setList] = useState([]),
    [newItem, setNewItem] = useState(""),
    [itemNumber, setItemNumber] = useState(),
    [checked, setChecked] = useState(false),
    [numberOne, setNumberOne] = useState(0),
    [numberTwo, setNumberTwo] = useState(0),
    [fontSize, setFontSize] = useState("16px"),
    [username, setUsername] = useState(""),
    [password, setPassword] = useState(""),
    [options, setOptions] = useState([]),
    [newOption, setNewOption] = useState(''),
    users = [
      {
        username: "admin",
        password: "admin",
      },
      {
        username: "clown",
        password: "baloon",
      },
    ],
    Items = ({ items }) => {
      if (items.length === 0) return <p>The list is empty</p>
      return items.map((item, i) => (
        <li key={i}>
          <p>{item}</p>
        </li>
      ))
    },
    Select = ({ options }) => {
      if (options.length === 0) return  <p>Add new options</p>
      return (
        <select>
          {options.map((option, i) => <option key = {i}>{option}</option>)}
        </select>  
      )
    }
  return (
    <div className={styles.partTwo}>
      <div className={styles.one}>
        <textarea
          onChange={e => setTextArea(e.target.value)}
          maxLength="210"
        ></textarea>
        {textArea === "" ? null : <p>{textArea}</p>}
      </div>
      <hr />
      <div className={styles.two}>
        <input type="text" onChange={e => setinputText(e.target.value)} />
        <button onClick={() => alert(`Length: ${inputText.length}`)}>
          Length
        </button>
      </div>
      <hr />
      <div className={styles.three}>
        <input
          type="number"
          onChange={e => setNumberOne(+e.target.value)}
          value={numberOne}
        />
        <span> + </span>
        <input
          type="number"
          onChange={e => setNumberTwo(+e.target.value)}
          value={numberTwo}
        />
        <button onClick={() => alert(`Sum: ${numberOne + numberTwo}`)}>
          Result
        </button>
      </div>
      <hr />
      <div className={styles.four}>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (newItem !== "") {
              setList([...list, newItem])
              setNewItem("")
            }
          }}
        >
          <input onChange={e => setNewItem(e.target.value)} value={newItem} />
          <button>Add</button>
        </form>
        <form
          onSubmit={e => {
            e.preventDefault()
            itemNumber < 1
              ? alert("There is no item with such index.")
              : setList([
                  ...list.slice(0, itemNumber - 1),
                  ...list.slice(itemNumber),
                ])
          }}
        >
          <input
            type="number"
            onChange={e =>
              setItemNumber(e.target.value === undefined ? "" : +e.target.value)
            }
            value={itemNumber}
          />
          <button>Remove</button>
        </form>
        <ol>
          <Items items={list} />
        </ol>
      </div>
      <hr />
      <div className={styles.six}>
        <form
          onSubmit={e => {
            e.preventDefault()
            let message = "Cannot find the user"
            if (username === "") {
              alert(message)
            } else {
              users.forEach(user => {
                if (user.username === username) {
                  if (user.password === password) {
                    message = "Welcome"
                  } else message = "Incorrect password"
                }
              })
              alert(message)
            }
          }}
        >
          <div>
            <label htmlFor="username">Username: </label>
            <input
              placeholder="admin"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="admin"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
      <hr />
      <div className={styles.seven}>
        <input type="checkbox" onChange={e => setChecked(e.target.checked)} />
        {!checked ? <div></div> : null}
      </div>
      <hr />
      <div className={styles.eight}>
        <select
          name="fontSize"
          value={fontSize}
          onChange={e => setFontSize(e.target.value)}
        >
          <option value="8px">8px</option>
          <option value="16px">16px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
        </select>
        <p style={{ fontSize: fontSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus
          debitis aut, dolore consequuntur quaerat ab reiciendis repudiandae
          voluptate, neque delectus blanditiis incidunt nesciunt repellat,
          officiis quibusdam nihil nobis quas. Sed magni doloribus, aut labore
          maiores reprehenderit repellendus rerum? Ipsum, odio reiciendis esse
          debitis autem nostrum exercitationem sapiente, facilis in neque,
          beatae ducimus consequuntur veritatis animi. Natus aperiam neque
          corrupti?
        </p>
      </div>
      <div className={styles.nine}>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (newOption !== '') {
              setOptions([...options, newOption])
              setNewOption('')
            }
          }}>
            <input onChange = {e => setNewOption(e.target.value)} value = {newOption} />
            <button>Add</button>
        </form>
        <Select options = {options} />
      </div>
    </div>
  )
}
export default PartTwo
