import React from 'react'

//Components Below
import Stage from './Stage'
import Display from './Display'
import Startbutton from './StartButton'
import { createStage } from '../gameHelpers'

const Tetris = () => {
    return (
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score"></Display>        
                    <Display text="Level"></Display>        
                    <Display text="Rows"></Display>        
                </div>
            <Startbutton/>
            </aside>
        </div>
    )
}

export default Tetris