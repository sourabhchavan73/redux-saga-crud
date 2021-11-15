import React from 'react';
import { loadUserStart, deleteUserStart } from '../redux/actions';
import { connect  } from 'react-redux';
import { MDBIcon } from 'mdb-react-ui-kit';
import {Link } from "react-router-dom";
import {  toast } from 'react-toastify';



class Home extends React.Component {


    componentDidMount(){
        this.props.loadUserStart();
    }

    handleDelete(id){
        console.log(id)
        if(window.confirm("are you sure want to delete")){
            this.props.deleteUserStart(id)
        }
        toast.success("user deleted successfully")
    }

    renderUserList(){
        const { users } = this.props.users;
        return users.map((user, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                        <span data-mdb-toggle="tooltip" title="Edit User">
                            <Link to={`/edituser/${user.id}`}>
                                <MDBIcon style={{ color: '#55acee'}} icon="pen-fancy" />
                            </Link>
                        </span>

                        <span data-mdb-toggle="tooltip" title="Delete">
                            <MDBIcon 
                                className="mx-2" 
                                icon="trash-alt" 
                                onClick = {() => this.handleDelete(user.id)}
                                style={{ color: 'red'}}
                            />
                        </span>

                        <span data-mdb-toggle="tooltip" title="User Info">
                            <Link to={`/userinfo/${user.id}`}>
                                <MDBIcon style={{ color: '#3b5938'}} far icon="eye" />
                            </Link>
                        </span>
                    </td>
                </tr>
            )         
        })
    }

    render() {
        return (
            <div>
                {
                this.props.users.users.length > 0 ?
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderUserList()}
                        </tbody>
                    </table> : "Loading"
                }   

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: Object.assign(state.users)
    }
}

const mapDispatchToProps = dispatch => ({
    loadUserStart: () => dispatch(loadUserStart()),
    deleteUserStart: (id) => dispatch(deleteUserStart(id))
})

export default connect( mapStateToProps, mapDispatchToProps)(Home)

