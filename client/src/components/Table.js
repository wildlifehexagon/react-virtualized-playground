import React, { Component } from 'react'
import { AutoSizer, Table, Column } from 'react-virtualized'

class App extends Component {
    state = { users: [] }

    componentDidMount() {
        fetch('/data')
            .then(res => res.json())
            .then(users => this.setState({ users }))
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.map(user => (
                    <table key={user.id} style={ { width: '100%' } }>
                        <tr>
                            <td style={ { width: '25%' } }>{user.id}</td>
                            <td style={ { width: '25%' } }>{user.name}</td>
                            <td style={ { width: '25%' } }>{user.username}</td>
                            <td style={ { width: '25%' } }>{user.email}</td>
                        </tr>
                    </table>
                ))}

                <AutoSizer>
                {({ height, width }) => (
                    <Table
                    headerHeight={30}
                    height={height}
                    rowCount={10}
                    rowGetter={ ({index}) => this.state.users[index] }
                    rowHeight={50}
                    width={width}
                    >
                        <Column
                            label="Index"
                        />
                        <Column
                            label="Name"
                        />
                        <Column
                            label="Username"
                        />
                        <Column
                            label="Email"
                        />
                    </Table>
                )}
                </AutoSizer>
            </div>
        )
    }
}

export default App
