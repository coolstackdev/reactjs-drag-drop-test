import React, { useMemo } from 'react'
import Header from '../components/header'
import Board from '../components/board'

function Home() {
  return useMemo(() => (
    <div className="main">
      <Header />
      <div className="content">
        <div className="desc">
          <p className="title">
            Sticker Match
          </p>
          <p className="sub-title">
            <span>Drag-and-drop the sticker to match its shape in the chart</span>
          </p>
        </div>
        <div className="board-area">
          <Board />
        </div>
      </div>
    </div>
  ), [])
}

export default Home
