import React, { Component } from 'react'
import { Table, Column } from 'react-virtualized'

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
                        <Table
                            headerHeight={50}
                            height={630}
                            width={1100}
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
                ))}

                {/* <table key={user.id} style={ { width: '100%' } }>
                    <tbody>
                        <tr>
                            <td style={ { width: '25%' } }>{user.id}</td>
                            <td style={ { width: '25%' } }>{user.name}</td>
                            <td style={ { width: '25%' } }>{user.username}</td>
                            <td style={ { width: '25%' } }>{user.email}</td>
                        </tr>
                    </tbody>
                </table> */}                
            </div>
        )
    }
}

export default App
