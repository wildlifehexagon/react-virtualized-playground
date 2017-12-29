import React, { Component } from 'react'
import { InfiniteLoader, Table, Column } from 'react-virtualized'
import 'react-virtualized/styles.css'

class TableData extends Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/data')
            .then(res => res.json())
            .then(users => this.setState({ users }))
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center'}}>Users</h1>
                    {/* <InfiniteLoader
                        isRowLoaded={({ index }) => index < this.state.users.length}
                        rowCount={this.state.users.length}
                        loadMoreRows={this.loadMoreRows}
                    >
            
                    {({onRowsRendered, registerChild}) => */}
                        <Table
                            headerHeight={50}
                            height={630}
                            width={1050}
                            rowCount={this.state.users.length}
                            rowGetter={ ({index}) => this.state.users[index] }
                            rowHeight={100}
                        >
                            <Column
                                label="ID"
                                dataKey="id"
                                width={ 250 }
                            />
                            <Column
                                label="Name"
                                dataKey="name"
                                width={ 250 }
                            />
                            <Column
                                label="Username"
                                dataKey="username"
                                width={ 250 }
                            />
                            <Column
                                label="Email"
                                dataKey="email"
                                width={ 250 }
                            />
                        </Table>
                    {/* }
                    </InfiniteLoader> */}            
            </div>
        )
    }
}

export default TableData
