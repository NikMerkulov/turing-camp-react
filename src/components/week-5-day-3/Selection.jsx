import React from 'react'
import styles from './Selection.module.css'
import ReactDOM from 'react-dom'

const Selection = ({operation, items, show, setItems, setShow}) => {
  
  const handleAddItem = e => {
    let left = items.slice(0, items.length / 2),
      right = items.slice(items.length / 2)
    if (operation === 'add') {
      let str = prompt()
      if (str !== null)
        if (str.replace(/\s/g, '').length > 0)
          switch (e.target.innerText) {
            case 'Start':
              setItems([str, ...items])
              break
            case 'Middle':
              setItems([...left, str, ...right])
              break
            case 'End':
              setItems([...items, str])
              break
            default:
              break
          }
    } else if (operation === 'remove') {
      switch (e.target.innerText) {
        case 'Start':
          setItems(items.slice(1, items.length))
          break
        case 'Middle':
          if (left.length === right.length)
            left.pop()
            else right.shift()
          setItems([...left, ...right])
          break
        case 'End':
          setItems(items.slice(0, items.length - 1))
          break
        default:
          break
      }
    }
    setShow(false)
  }
  if (!show) return null
  return ReactDOM.createPortal(
    <>
      <div className = {styles.lightsOff}></div>
      <div className = {styles.selection}>
        <p>Select insert position</p>
        <div>
          <button 
            className = {styles.selectButton}
            onClick = {handleAddItem}
            >Start</button>
          <button 
            className = {styles.selectButton}
            onClick = {handleAddItem}
            >Middle</button>
          <button 
            className={styles.selectButton}
            onClick = {handleAddItem}
            >End</button>
        </div>
      </div>
    </>,
    document.querySelector('#portal')
  )
}
export default Selection