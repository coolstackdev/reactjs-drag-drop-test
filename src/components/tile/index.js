
import PropTypes from 'prop-types'
import React, { useCallback, useState, useMemo } from 'react'
import cn from 'classnames'
import shapeRect from '../../assets/shape-rect.svg'
import shapeCircle from '../../assets/shape-circle.svg'
import shapeTriangle from '../../assets/shape-triangle.svg'
import shapeDiamond from '../../assets/shape-diamond.svg'
import iconCheck from '../../assets/icon-check.svg'
import iconX from '../../assets/icon-x.svg'
import './style.css'

export const Shape = {
  rect: 'rect',
  circle: 'circle',
  triangle: 'triangle',
  diamond: 'diamond',
}

export const Status = {
  normal: 'normal',
  success: 'success',
  failure: 'failure'
}

export const Polygon = ({ shape }) => {
  return useMemo(() => {
    switch(shape) {
      case Shape.rect:
        return <img src={shapeRect} width="100" alt="rect" />
      case Shape.circle:
        return <img src={shapeCircle} width="100" alt="circle" />
      case Shape.triangle:
        return <img src={shapeTriangle} width="100" alt="triangle" />
      case Shape.diamond:
        return <img src={shapeDiamond} width="100" alt="diamond" />
      default:
        return <></>
    }
  }, [shape])
}

const ResultIcon = ({ status }) => {
  return useMemo(() => {
    switch(status) {
      case Status.normal:
        return <></>
      case Status.success:
        return <img className="icon" src={iconCheck} width="100" alt="success-icon" />
      case Status.failure:
        return <img className="icon" src={iconX} width="100" alt="failure-icon" />
      default:
        return <></>
    }
  }, [status])
}

function Tile({ shape, dropShape, onCheck }) {
  const [status, setStatus] = useState(Status.normal)
  const [failureShape, setFailureStatus] = useState('')

  const allowDrop = (event) => {
    event.preventDefault()
  }

  const handleDrop = useCallback(() => {
    if (shape === dropShape) {
      setStatus(Status.success)
    } else {
      setStatus(Status.failure)
      setFailureStatus(dropShape)
    }
    onCheck(shape, shape === dropShape)
  }, [shape, dropShape])

  return useMemo(() => (
    <div
      className={cn('tile', `tile-${status}`)}
      onDrop={handleDrop}
      onDragOver={(event) => allowDrop(event)}
    >
      <Polygon shape={status === Status.failure ? failureShape : shape} />
      <ResultIcon status={status} />
    </div>
  ), [handleDrop, allowDrop, status, failureShape])
}

Tile.propTypes = {
  shape: PropTypes.oneOf(Object.keys(Shape)),
  dropShape: PropTypes.oneOf(Object.keys(Shape).concat('')),
  onCheck: PropTypes.func
}

export default Tile
