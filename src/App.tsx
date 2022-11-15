import React from 'react'
import ClickCount from './Components/example/clickCount'

import SomeExampleComponent from './Components/example/someExampleComponent'
import MyFirstComponent from './Components/myFirstComponent'



const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App

