import { useState, useEffect } from "react";

const PrivateText = ({ currUser }) => {
    // State to hold the message obtained from the server
    const [message, setMessage] = useState(null);

    // Function to fetch private text from the server
    const getText = async () => {
        try {
            // Get the stored token from local storage
            const token = localStorage.getItem("token");

            // Send a GET request to the server for private text
            const response = await fetch("http://localhost:3001/private/test", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });

            // Parse the response JSON data
            const data = await response.json();

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(data.error);
            }

            // Set the message state with the obtained text
            setMessage(data.message);
        } catch (error) {
            console.log("Error al obtener el texto privado", error);
            setMessage(error.message);
        }
    };

    // useEffect hook to call getText when currUser changes
    useEffect(() => {
        // Call getText when currUser is truthy
        if (currUser) {
            getText();
        }
    }, [currUser]);

    // Render the obtained message or error
    return <div>{message}</div>;
};

export default PrivateText;
