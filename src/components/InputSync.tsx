import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

export const InputSync = () => {
  const [inputValue, setInputValue] = useState("");
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    // Connect to the socket.io server
    const socket = socketIOClient("http://localhost:3001");

    socket.on("connect", () => {
      console.log("Socket.io connection established");
      setSocket(socket);
    });

    socket.on("input", (value) => {
      // Update the input value when a message is received
      setInputValue(value);
    });

    socket.on("disconnect", () => {
      console.log("Socket.io connection closed");
      setSocket(null);
    });
  }, []);

  const handleInputChange = (event: any) => {
    // Send a message to the socket.io server with the new input value
    socket.emit("input", event.target.value);
    setInputValue(event.target.value);
  };

  return <Input type="text" value={inputValue} onChange={handleInputChange} />;
};
