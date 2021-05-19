import React, { useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import Tile, { Polygon } from '../tile'

const arrItems = [
  'rect',
  'triangle',
  'diamond',
  'circle'
]

// reset order of board tiles
const tileItems = arrItems.slice().sort(() => Math.random() - 0.5)

function Board() {
  const [draggingShape, setDraggingShape] = useState('')
  const [result, setResult] = useState({
    'rect': false,
    'circle': false,
    'triangle': false,
    'diamond': false
  })
  const history = useHistory()

  const handleDrag = (shape) => {
    setDraggingShape(shape)
  }

  const handleCheck = (shape, status) => {
    // update result state
    const newResult = result
    newResult[shape] = status
    setResult(newResult)

    // check if all are correct
    let isCompleted = true
    Object.values(result).forEach(val => {
      isCompleted = isCompleted && val
    })

    // if so, go to `complete` page
    if (isCompleted) history.push('/complete')
  }

  return useMemo(() => (
    <div className="board-wrapper">
      <div className="board">
        {
          tileItems.map((shape, index) => {
            return (
              <Tile
                key={`tile-${index}`}
                shape={shape}
                dropShape={draggingShape}
                onCheck={handleCheck}
              />
            )
          })
        }
      </div>
      <div className="pannel">
        {
          arrItems.map((shape, index) => {
            return (
              <div key={`polygon-${index}`} draggable className="pannel-item" onDragStart={() => handleDrag(shape)}>
                <Polygon shape={shape} />
              </div>
            )
          })
        }
      </div>
    </div>
  ), [draggingShape, handleCheck, handleDrag])
}

export default Board