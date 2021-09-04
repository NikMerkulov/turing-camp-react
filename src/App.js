import styles from './App.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import TextList from './components/week-5-day-3/TextList'
import PartTwo from './components/week-5-day-3-pt2/PartTwo'
import FuncComp from './components/week-6-day-1/FuncComp'
import ClassFuncComp from './components/week-6-day-1/ClassFuncComp'

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.header}>
          <Link to='/TextList'>Text List</Link>
          <Link to='/PartTwo'>Part Two</Link>
          <Link to='/W6D1'>W6D1</Link>
          <Link to='W6D1Class'>W6D1Class</Link>
        </div>
        <Switch>
          <Route path="/TextList">
            <TextList />
          </Route>
          <Route path="/PartTwo">
            <PartTwo />
          </Route>
          <Route path='/W6D1'>
            <FuncComp />
          </Route>
          <Route>
            <ClassFuncComp path='W6D1Class'/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App