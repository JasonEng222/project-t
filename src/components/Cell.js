import React from "react"
import { StyledCell } from "./Styles/StyledCell"
import {Tetrominos} from '../tetrominos'



const Cell = ({ type }) => (
    <div>
        <StyledCell type={'L'} color={Tetrominos['L'].color}>cell</StyledCell>
    </div>
)

export default Cell