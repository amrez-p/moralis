import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import {
  Button,
  Stack,
  Box,
  Text,
  Input,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  AlertDescription,
} from "@chakra-ui/react";
function Profile() {
  const { user, setUserData, userError } = useMoralis();
  const [username, setUsername] = useState(user.attributes.username);
  const [password, setPassword] = useState(user.attributes.password);
  const [email, setEmail] = useState("");

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password,
    });
  };
  return (
    <Center>
      {userError && (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription display="block">
              {userError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      <Box w="500px">
        <Stack spacing={3}>
          <Box>
            <Text>Username</Text>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Box>
          <Box>
            <Text>Password</Text>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Stack>
        <Button onClick={handleSave}>Save Changes</Button>
      </Box>
    </Center>
  );
}

export default Profile;
