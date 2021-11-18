import React from "react"
import { StyledCell } from "./Styles/StyledCell"
import {Tetrominos} from '../tetrominos'

const Cell = ({ type }) => (
    <StyledCell type={type} color={Tetrominos[type].color}>cell</StyledCell>
)

export default Cell