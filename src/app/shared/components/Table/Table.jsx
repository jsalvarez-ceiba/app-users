import React, { Component } from 'react';
import './Table.style.css';
import { connect } from 'react-redux';

class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tableContainer">
                {
                    this.props.users.length !== 0 ? (

                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.users.map((item, index) => (
                                        <tr key={index.toString()}>
                                            <td> {index + 1} </td>
                                            <td> {item.id} </td>
                                            <td> {item.name} </td>
                                            <td> {item.email} </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <h5 className="text-white">Press the button to generate the users</h5>
                    )
                }

            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
    }
}

export default connect(mapStateToProps, null)(Table);



