import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-userRef/FocusScreen'
// import { Layout } from './05-useLayoutEffet/Layout'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemorizeHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Padre } from './07-tarea-memo/Padre'
// import { HooksApp } from './HooksApp'

import { TodoApp } from './08-reducer/TodoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <MultipleCustomHooks />
)
