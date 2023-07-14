import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './Components/Feed'
import SearchResult from './Components/SearchResult'
// import SearchDetails from './Components/VideoDetails'
import Header from './Components/Header'
import VideoDetails from './Components/VideoDetails'
import { AppContext } from './context/ContextApi'


const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path='/' exect element={<Feed />} />
            <Route path='searchResult/:searchQuary' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App