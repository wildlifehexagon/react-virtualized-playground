import React, { Component } from 'react'
import { InfiniteLoader, Table, Column } from 'react-virtualized'
import 'react-virtualized/styles.css'

class TableData extends Component {
    state = { comments: [] }

    componentDidMount() {
        fetch('/data')
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center'}}>Comments</h1>
                    <InfiniteLoader
                        isRowLoaded={({ index }) => index < this.state.comments.length}
                        rowCount={this.state.comments.length}
                        loadMoreRows={this.loadMoreRows}
                    >
            
                    {({onRowsRendered, registerChild}) =>
                        <Table
                            headerHeight={50}
                            height={630}
                            width={1000}
                            rowCount={this.state.comments.length}
                            rowGetter={ ({index}) => this.state.comments[index] }
                            rowHeight={100}
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
