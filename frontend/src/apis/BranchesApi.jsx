// Define the URL for branches
const Branches_url = 'http://localhost:3001/api/v1/branches';

// Function to get all branches
async function getBranches() {
    try {
        // Make a fetch request to the Branches_url
        const response = await fetch(Branches_url);

        // Check if the response is okay (status code 200-299)
        if (response.ok) {
            // Parse the response as JSON and return the data
            const data = await response.json();
            return data;
        } else {
            // Log an error message if the response is not okay
            console.error('Error fetching branches.');
            return null;
        }
    } catch (error) {
        // Log a network error if the fetch operation fails
        console.error('Network error:', error);
        return null;
    }
}

// Function to fetch branches for a specific course
const fetchCourseBranches = async (courseId) => {
    try {
        // Construct the URL for course branches using the courseId
        const url = `http://localhost:3001/api/v1/courses/${courseId}/branches`;

        // Make a fetch request to the constructed URL
        const response = await fetch(url);

        // Check if the response is not okay (status code outside 200-299)
        if (!response.ok) {
            // Parse the error response as JSON and throw an error
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error in the branch API response');
        }

        // Parse the response as JSON and return the data
        const data = await response.json();
        return data;
    } catch (error) {
        // Log an error if there is an issue fetching course branches
        console.error('Error fetching branches:', error);
        // Re-throw the error to propagate it up the call stack
        throw error;
    }
};

// Export the functions for external use
export { getBranches, fetchCourseBranches };
