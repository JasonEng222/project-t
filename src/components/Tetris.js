import React from 'react'
import { createStage } from '../gameHelpers'


//Components Below
import Stage from './Stage'
import Display from './Display'
import Startbutton from './StartButton'
import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris'


const Tetris = () => {  
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <div></div>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score"></Display>        
                        <Display text="Level"></Display>        
                        <Display text="Rows"></Display>        
                    </div>
                <Startbutton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris