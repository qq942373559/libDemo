import React from 'react';
import {Button} from '../lib/main';
import {ColorPicker} from '../lib/main';

function App() {
  const msg = '系统消息'
  return (
    <>
      <h1>lib练习</h1>
      <Button msg={msg}/>
      <br />
      <ColorPicker/>
    </>
  )
}

export default App
