import React, { Component } from 'react'
import Qualification from './Qualification'
import DataComic from './DataComic'

export class Comic extends Component {
    render() {
        return (
            <div>
                <DataComic/>
                <Qualification/>
            </div>
        )
    }
}

export default Comic
