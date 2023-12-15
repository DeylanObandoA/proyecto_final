import React from "react";
import "./Logout.css"

const Logout = ({ setCurrUser }) => {
    // Function to send the logout request to the server
    const logout = async (setCurrUser) => {
        try {
            // Send a DELETE request to the server for logout
            const response = await fetch("http://localhost:3001/logout", {
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                },
            })

            // Parse the response JSON data
            const data = await response.json()

            // Check if the response is successful
            if (!response.ok) throw data.error

            // Remove the token from local storage and set the current user to null
            localStorage.removeItem("token")
            setCurrUser(null)
        } catch (error) {
            console.log("error", error)
        }
    }

    // Handle click on the logout button
    const handleClick = e => {
        e.preventDefault()
        logout(setCurrUser)
    }

    return (
        <div>
            {/* Logout button with an icon and text */}
            <button className="Btn" value='Logout' onClick={handleClick}>
                <div className="sign">
                    {/* Logout icon */}
                    <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                </div>
                {/* Logout text */}
                <div className="text">Logout</div>
            </button>
        </div>
    )
}

export default Logout;
