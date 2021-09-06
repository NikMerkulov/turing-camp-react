import PropTypes from 'prop-types'
import styles from './styles.module.css'
// << IMAGE >>

const Image = ({src, width, height}) => 
  <img src={src} width={width} height={height} alt='' />

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}
// << BUTTON >>

const Button = ({text, onClick}) =>
  <button onClick={onClick}>{text}</button>

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
// << HEADER >>
const Header = ({text, color}) =>
  <h1 style={{color: color}}>{text}</h1>

Header.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}
// << LINK >>

const Link = ({href, text, isUnderlined}) =>
  <a href={href} style={{textDecoration: isUnderlined ? 'underline' : 'none'}}>{text}</a>

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool
}
// << UNORDERED LIST >>

const UnorderedList = ({listItems}) => {
  return (
    <ul>
      {listItems.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

UnorderedList.propTypes = {
  listItems: PropTypes.array.isRequired
}
// << SMART BUTTON >> 

const SmartButton = ({isButton, href, text, onClick, isUnderlined}) => isButton ?
  <Button text={text} onClick={onClick} /> :
  <Link href={href} text={text} isUnderlined={isUnderlined}/>

SmartButton.propTypes = {
  isButton: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isUnderlined: PropTypes.bool
}
// MAIN

const PropTypesPractice = () => {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <Image src='/images/tenor.gif' width='100px' height='100px' />
      </div>
      <hr />
      <div className={styles.two}>
        <Button text='A button' onClick={() => alert('Click')} />
      </div>
      <hr />
      <div className={styles.three}>
        <Header text='A header' color='#BB6969' />
      </div>
      <hr />
      <div className={styles.four}>
        <Link href='/TextList' text='A link' isUnderlined={true} />
      </div>
      <hr />
      <div className={styles.five}>
        <UnorderedList listItems={['Item 1', 42, 'Item 3']}/>
      </div>
      <hr />
      <div className={styles.six}>
        <SmartButton isButton={true} text='A button' onClick={() => alert('Click')} />
        <SmartButton isButton={false} href='/TextList' text='A link' isUnderlined={true} />
      </div>
    </div>
  )  
}

export default PropTypesPractice