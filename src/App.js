import styles from './App.module.css'
import TextList from './components/week-5-day-3/TextList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import PartTwo from './components/week-5-day-3-pt2/PartTwo'

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.header}>
          <Link to='/TextList'>Text List</Link>
          <Link to='/PartTwo'>Part Two</Link>
        </div>
        <Switch>
          <Route path="/TextList">
            <TextList />
          </Route>
          <Route path="/PartTwo">
            <PartTwo />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App