import React, { Component } from 'react'
import { InfiniteLoader, Table, Column } from 'react-virtualized'
import 'react-virtualized/styles.css'

class TableData extends Component {
    state = { 
        comments: []
     }

    componentDidMount() {
        fetch('/data')
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
    }

    isRowLoaded = ({ index }) => {
        return !!this.state.comments[index]
    }

    loadMoreRows = ({ startIndex, stopIndex }) => {
        return fetch(`/data?startIndex=${startIndex}&stopIndex=${stopIndex}`)
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
    }

    render() {
        const rowCount = this.state.comments.length

        return (
            <div>
                <h1 style={{ textAlign: 'center'}}>Comments</h1>
                    <InfiniteLoader
                        isRowLoaded={this.isRowLoaded}
                        rowCount={rowCount}
                        loadMoreRows={this.loadMoreRows}
                        threshold={10}
                    >
            
                    {({onRowsRendered, registerChild}) =>
                        <Table
                            ref={ registerChild }
                            headerHeight={50}
                            height={630}
                            width={1000}
                            rowCount={rowCount}
                            rowGetter={ ({index}) => this.state.comments[index] }
                            rowHeight={50}
                            onRowsRendered={onRowsRendered}
                        >
                            <Column
                                label="ID"
                                dataKey="id"
                                width={ 50 }
                            />
                            <Column
                                label="Name"
                                dataKey="name"
                                width={ 250 }
                            />
                            <Column
                                label="Email"
                                dataKey="email"
                                width={ 250 }
                            />
                            <Column
                                label="Body"
                                dataKey="body"
                                width={ 350 }
                            />
                        </Table>
                    }
                    </InfiniteLoader>
            </div>
        )
    }
}

export default TableData
