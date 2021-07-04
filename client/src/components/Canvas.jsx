import React, {useEffect, useRef} from 'react'
import '../styles/canvas.scss'
import {observer} from 'mobx-react-lite'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'

function Canvas() {
    const canvasRef = useRef()

    useEffect(()=> {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return (
        <div className="canvas">
            <canvas width={600} height={400} ref={canvasRef}></canvas>
        </div>
    )
}

export default observer(Canvas)
