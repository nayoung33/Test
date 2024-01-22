import React from 'react'
import './App.css'
import Test from './component/test1/Test'


const App = () => {
  return (
    <>
      <div style={{height:"200px", backgroundColor: "yellowgreen" }}>헤더입니다</div>
      <Test />
    
      <div style={{height: "100px", backgroundColor: "pink"}}>푸터입니다</div>
    </>
  )
}

export default App