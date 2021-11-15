import React  from 'react'
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import history from '../history';
import { connect } from 'react-redux';
import { createUserStart } from '../redux/actions';
import {  toast } from 'react-toastify';

class AddEditUser extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",

            
        }
    }

    componentDidMount(){
        const user = this.props.user
        
        this.setState({...user})
        console.log(user)
    }

    submitHandler = event => {
        event.preventDefault();
        const { name, email, phone, address} = this.state;
        event.target.className += " was-validated"; 
        if( name && email && phone && address){
            this.props.createUserStart(this.state);
            toast.success("user added Successfully")
            setTimeout(() => history.push("/"), 500)
        }
    };
    
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
        
    };

    onGoBack(){
        history.push('/')
    }

    render() {
        const { name, email, phone, address} = this.state;
        console.log(this.props)
        return (
            <MDBRow>
                <MDBCol xl="5" lg="6" md="8" className="mx-auto">
                    <form
                        className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate
                    >
                        <MDBRow>
                            <MDBCol md="12" className="mb-3">
                                <label htmlFor="user-name" className="grey-text">
                                    First name
                                </label>

                                <input
                                    value={name || "" }
                                    onChange={this.changeHandler}
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="First name"
                                    required
                                />

                                <div className="invalid-feedback">
                                    Please provide a valid Name
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>

                            <MDBCol md="12" className="mb-3">
                                <label htmlFor="email" className="grey-text">Email</label>
                                <input
                                    value={email }
                                    name="email"
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterEmailEx2"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>

                            <MDBCol md="12" className="mb-3">
                                <label htmlFor="user-phone" className="grey-text">
                                    Phone
                                </label>

                                <input
                                    value={phone || "" }
                                    onChange={this.changeHandler}
                                    type="number"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    required
                                />

                                <div className="invalid-feedback">
                                    Please provide a valid Phone.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>

                            <MDBCol md="12" className="mb-3">
                                <label htmlFor="defaultFormRegisterPasswordEx4"className="grey-text" >
                                    Address
                                </label>
                                <input
                                    value={address || "" }
                                    onChange={this.changeHandler}
                                    type="text"
                                    id="defaultFormRegisterPasswordEx4"
                                    className="form-control"
                                    name="address"
                                    placeholder="Enter Address"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                            </MDBCol>
                        </MDBRow>
                        
                        <div>
                            <MDBBtn color="primary" type="submit" >
                                Add User
                            </MDBBtn>

                            <MDBBtn type="button" onClick ={this.onGoBack}>
                                Go Back
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.users[ownProps.match.params.id - 1]
    }
}

export default connect(mapStateToProps, {
    createUserStart
}) (AddEditUser);
