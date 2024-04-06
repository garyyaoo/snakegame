import React, {useEffect, useState} from 'react'

const makeGrid = (n) => {
    var grid = []
    for (var i = 0 ; i < n ; i++) {
        grid.push(Array(n).fill(0))
    }
    return grid
}
const N = 10
const emptyGrid = makeGrid(N)
emptyGrid[0][0] = 'X'

export default function Game() {
    const [grid, setGrid] = useState(emptyGrid)
    const [head, setHead] = useState([0,0])
    const [direction, setDirection] = useState([1,0])

    const renderBlock = (val) => {
        return (
            <p>
                {val}
            </p>
        )
    }

    // takes in row
    const renderRow = (row) => {
        return (
            <div className="row">
                {row.map(
                    val => renderBlock(val)
                )}
            </div>
        )
    }

    const getNewState = () => {
        const newX = (head[0] + direction[0])%N
        const newY = (head[1] + direction[1])%N

        grid[head[0]][head[1]] = 0
        grid[newX][newY] = 'X'

        setHead([newX, newY])
        setGrid(grid)
    }

    useEffect(() => {
        const interval = setInterval(
            () => {
                getNewState()
            },
            2000
        ) 
    }
    )


    return (
        <div className="grid">
            {grid.map(
                (row) => renderRow(row)
            )}
        </div>
    )

}