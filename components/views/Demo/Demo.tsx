import React, {useState} from 'react'

type Props = {
  children: React.ReactNode;
}

const Demo: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(prevState => prevState + 1);
  };

  return (<div>{children}
    <button onClick={handleClick}>Update count</button>
    <p>Current count: {count}</p></div>
  )
}

export default Demo;