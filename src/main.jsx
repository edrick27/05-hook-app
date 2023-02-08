import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-userRef/FocusScreen'
import { Layout } from './05-useLayoutEffet/Layout'
import { MemorizeHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemorizeHook/>
  </React.StrictMode>,
)
