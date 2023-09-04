import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Headers from './components/Headers'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'

import Counter from './components/Counter'
import TodoApp from './components/TodoApp'
import DataFetcher from './components/DataFetcher'
import DataFetcherHooks from './components/DataFetcherHooks'
import HandleIncrementCallback from './components/HandleIncrementCallback'


function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/todoapp" element={<TodoApp />} />
          <Route exact path="/datafetcher" element={<DataFetcher />} />
          <Route exact path="/datafetcherhooks" element={<DataFetcherHooks />} />
          <Route exact path="/incrementcallback" element={<HandleIncrementCallback />} />
        </Routes>
      </Router>
    </>
  )
}

export default App