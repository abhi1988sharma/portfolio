import React from 'react'

type MyFirstComponentProps = {

}

const MyFirstComponent: React.FC<MyFirstComponentProps> = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first component 😎</p>
    </div>
  )
}

export default MyFirstComponent;