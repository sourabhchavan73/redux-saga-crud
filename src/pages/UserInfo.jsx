import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';
import { loadUserStart } from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class UserInfo extends React.Component {

    componentDidMount(){
        this.props.loadUserStart();
    }

    renderUser(){
        const {name, email, phone} = this.props.user;
            return (
                <MDBCol>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardBody>
                            <MDBCardTitle>{name}</MDBCardTitle>
                            <MDBCardText>
                                {email}
                            </MDBCardText>
                            <MDBCardText>
                                {phone}
                            </MDBCardText>
                            <Link to="/">
                                <MDBBtn>Back</MDBBtn>
                            </Link>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            )
    }

    render() {
        return (
            <div>
                {this.props.user ? this.renderUser() : "Loadibng"}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       user: state.users.users[ownProps.match.params.id - 1]
    }
}

export default connect(mapStateToProps,{
    loadUserStart,
}) (UserInfo)
