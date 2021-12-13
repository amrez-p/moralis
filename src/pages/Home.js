import react, { useState } from "react";
import { useMoralis } from "react-moralis";
import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  Input,
} from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";

function Home() {
  const SignUp = () => {
    const { signup } = useMoralis();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <Box>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => signup(email, password)}>Sign Up</Button>
      </Box>
    );
  };
  const LogIn = () => {
    const { login } = useMoralis();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <Box>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => login(email, password)}>Log In</Button>
      </Box>
    );
  };

  const {
    authenticate,
    isAuthenticated,
    authError,
    isAuthenticating,
    logout,
    user,
  } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome {user.attributes.username}</Heading>
        <Button onClick={() => logout()}>Log Out</Button>
      </Container>
    );
  }
  return (
    <div>
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
            Authenticate via metamask
          </Button>
        </span>
        <span>Or</span>
        <LogIn />
        <span>Or</span>
        <SignUp />
      </div>
    </div>
  );
}

export default Home;
