import AuthSection from './AuthSection';

// import GoogleAuthSection from './GoogleAuthSection';
import {
    LoginContainer,
    LoginWrapper,
    // LoginMainHeader,
    LoginGridWrapper,
    LoginGrid,
    LoginHeader,
    LoginContent,
    LoginGrid2,
    LoginIconWrapper
} from './LoginElements';

const Pattern = '/images/Miscellaneous/pattern.png';

function LoginPage() {
    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginGridWrapper>
                    <LoginGrid>
                        <LoginHeader>
                            Hola!
                        </LoginHeader>
                        <LoginContent>
                            We are excited to have you join us!
                        </LoginContent>

                        {/* Login Section */}
                        <AuthSection />

                        {/* <GoogleAuthSection />
                        <GoogleAuthSection /> */}
                    </LoginGrid>
                    <LoginGrid2>
                        <LoginIconWrapper src={Pattern} />
                    </LoginGrid2>
                </LoginGridWrapper>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default LoginPage