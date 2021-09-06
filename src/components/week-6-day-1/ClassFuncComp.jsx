import styles from './styles.module.css'
import React, { createRef } from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.header = props.header
    this.content = props.content
    this.height = props.height

    this.state = {
      fontSize: 15
    }
  }

  ref = createRef()
  componentDidMount() {
    if (this.ref.current.clientHeight > 200) {
      this.setState({fontSize: 20})
      if (this.ref.current.clientHeight > 300)
        this.setState({fontSize: 20})
    }
  }
  render () {
    return (
      <div 
        ref={this.ref}
        style={{fontSize: this.state.fontSize, height: this.height}}
      >
        <h3>{this.header}</h3>
        <p>{this.content}</p>
      </div>
    )
  }
}
class ClassFuncComp extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      text: '',
      posts: [
        {
          header: 'My first post.',
          content: 'Some text'
        },
        {
          header: 'My second post.',
          content: 'Some text'
        },
        {
          header: 'My third post.',
          content: 'Some text'
        }
      ]
    }
  }
  
  componentDidUpdate() {
    if (this.state.text === 'Hello World!')
      this.state.input2Ref.current.blur()
  }

  inputRef = createRef()
  input2Ref = createRef()
  textRef = createRef()

  handleButtonClick = () => {
    this.textRef.current.scrollTop = this.textRef.current.scrollHeight
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.one}>
          <button onClick={() => this.state.inputRef.current.focus()}>Focus</button>
          <input name="" ref={this.state.inputRef} />
        </div>
        <hr />
        <div className={styles.two}>
          <input 
            ref={this.state.input2Ref}
            onChange={e => this.setState({text: e.target.value})}
            value={this.state.text}
          />
        </div>
        <hr />
        <div className={styles.three}>
        {this.state.posts.map((post, i) =>
          <Post
            key={i}
            header={post.header}
            content={post.header}
            height={++i*100}
          />)}
        </div>
        <hr />
        <div className={styles.four}>
          <button onClick={this.handleButtonClick}>To Bottom</button>
          <div ref={this.textRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            ut, tempore atque nostrum nobis quidem ullam dolorem quasi nemo magnam
            odio architecto mollitia minus alias libero repudiandae quod natus a.
            Illum nisi consectetur alias inventore ratione quae obcaecati fugiat
            totam labore saepe accusamus minus asperiores cupiditate modi culpa
            repudiandae doloremque impedit sint rem, illo tempora hic quam
            excepturi sunt! Ipsum! Doloribus at suscipit molestiae mollitia quis
            expedita, repudiandae eos, quaerat exercitationem cupiditate minus
            impedit voluptate. Nihil possimus dolor reiciendis voluptatibus sed
            hic, explicabo laboriosam est fugiat iure rem. Sint, dolor? Delectus
            non aliquid voluptatem magnam alias recusandae, excepturi, quo
            repellendus reiciendis, facere ratione laboriosam. Quam, ullam
            commodi? Quis similique laboriosam nisi animi, adipisci repudiandae,
            et odit reiciendis voluptate, libero labore. Eius magnam sequi facere
            quam illo, animi pariatur illum libero dolore beatae blanditiis
            sapiente voluptate veniam sunt qui natus aliquid ipsa debitis voluptas
            a culpa quidem nulla eos similique. Voluptates.
          </div>
        </div>
      </div>
    )
  }
}

export default ClassFuncComp