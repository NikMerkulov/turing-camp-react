import styles from './styles.module.css'
import { useState, useEffect, useRef } from 'react'

const Post = ({ header, content, height }) => {
  const [fontSize, setFontSize] = useState(15),
    ref = useRef()
  useEffect(() => {
    if (ref.current.clientHeight > 200) {
      setFontSize(20)
      if (ref.current.clientHeight > 300) setFontSize(30)
    }
  }, [])
  return (
    <div ref={ref} style={{ fontSize: fontSize, height: height }}>
      <h3>{header}</h3>
      <p>{content}</p>
    </div>
  )
}
const FuncComp = () => {
  const inputRef = useRef(),
    [text, setText] = useState(''),
    input2Ref = useRef(),
    textRef = useRef(),
    posts = [
      {
        header: 'My first post.',
        content: 'Some text',
      },
      {
        header: 'My second post.',
        content: 'Some text',
      },
      {
        header: 'My third post.',
        content: 'Some text',
      }
    ]

  useEffect(() => {
    if (text === 'Hello World!') input2Ref.current.blur()
  })

  const handleButtonClick = () => {
    textRef.current.scrollTop = textRef.current.scrollHeight
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
        <input ref={inputRef} />
      </div>
      <hr />
      <div className={styles.two}>
        <input
          ref={input2Ref}
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </div>
      <hr />
      <div className={styles.three}>
        {posts.map((post, i) => (
          <Post
            key={i}
            header={post.header}
            content={post.header}
            height={++i * 100}
          />
        ))}
      </div>
      <hr />
      <div className={styles.four}>
        <button onClick={handleButtonClick}>To Bottom</button>
        <div ref={textRef}>
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
export default FuncComp
