import React, { useState } from 'react'

export const Example = () => {
  // runs everytime, ugh
  // useMemo would serve cached if no changes
  // https://reactjs.org/docs/hooks-reference.html#usememo
  const [count, setCount] = useState(0)
  const [word, setWord] = useState('world')
  
  const handleClick = (e) => {
    e.preventDefault()
    setCount(count+1)
  }

  const handleInput = (e) => {
    setWord(e.target.value)
  }

  return (
    <div>
      <h1>{word}</h1>
      <input text={word} onInput={(e) => handleInput(e)} />
      <button onClick={(e) => handleClick(e)}>
        Clicks: {count}
      </button>
    </div>
  )
}