import React, { useState } from "react"
import styles from './TextList.module.css'
import Selection from "./Selection"

const Items = ({items}) => {
  if (items.length === 0) return <p className={styles.empty}>The list is empty</p>
  return (
    items.map((item, i) => 
      <li key = {i}>
        <p>{item}</p>
        <button 
          onClick = {() => alert(item)}>Alert
        </button>
      </li>)
  )
}
const TextList = () => {
  const [items, setItems] = useState(['List item 1', 'List item 2', 'List item 3', 'List item 4']),
    [show, setShow] = useState(false),
    [operation, setOperation] = useState('')
  return (
    <>
      <ul>
        <div>
          <button 
            className = {styles.newItemButton}
            onClick = {() => {
              setOperation('add')
              setShow(true)
            }}
            >Add new item
          </button>
          <button
            onClick = {() => {
              setOperation('remove')
              setShow(true)
            }}
            >Remove item
          </button>
        </div>
        <Items items = {items}/>
      </ul>
      <Selection 
        operation = {operation}
        items = {items} 
        setItems = {setItems}
        show = {show} 
        setShow = {setShow}
      />
    </>
  )
}
export default TextList