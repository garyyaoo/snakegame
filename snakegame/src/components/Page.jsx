import React from 'react'
import Game from './Game'
import '../css/styles.css'

export default function Page() {
    return (
        <div className="background">
            <div className="box">
                <Game/>
            </div>
        </div>
    )

}