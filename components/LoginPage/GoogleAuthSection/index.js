import React from 'react';

import { Avatar } from '@mui/material';
import { ButtonStyled } from './GoogleAuthElements';

const GoogleIcon = '/images/Miscellaneous/google.png';

class GoogleAuthSection extends React.Component {

    state = { isSignedIn: false };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '727673519892-b7cqntd57qun0g8us8b0n8de7vbau6s0.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });

                    // Listens to user sign in changes
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    // During signing in and out
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <ButtonStyled
                    // startIcon={<Avatar src={GoogleIcon} />}
                    onClick={this.onSignOut}>
                    Sign Out From Google
                </ButtonStyled>
            );
        } else {
            return (
                <ButtonStyled
                    // startIcon={<Avatar src={GoogleIcon} />}
                    onClick={this.onSignIn}>
                    Sign In With Google
                </ButtonStyled>
            )
        }
    }

    render() {
        return <>{this.renderAuthButton()}</>
    }
}

export default GoogleAuthSection;