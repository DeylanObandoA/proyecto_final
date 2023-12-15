// Define the URL for the list of institutions
const Institution_url = 'http://localhost:3001/api/v1/institutions';

// Define the base URL for fetching the name of a specific institution
const name_Institution_Url = 'http://localhost:3001/api/v1/institutions/';

// Function to get a list of institutions
async function getInstitutions() {
    try {
        // Make a fetch request to the Institution_url
        const response = await fetch(Institution_url);

        // Check if the response is okay (status code 200-299)
        if (response.ok) {
            // Parse the response as JSON and return the data
            const data = await response.json();
            return data;
        } else {
            // Log an error message if the response is not okay
            console.error('Error fetching the list of institutions.');
            return null;
        }
    } catch (error) {
        // Log a network error if the fetch operation fails
        console.error('Network error:', error);
        return null;
    }
}

// Function to fetch the name of a specific institution by ID
const fetchInstitutionName = async (institutionId) => {
    try {
        // Construct the URL for the specific institution using the institutionId
        const url = `${name_Institution_Url}${institutionId}`;
        console.log('Request URL:', url);

        // Make a fetch request to get the data for the specific institution
        const response = await fetch(url);

        // Check if the response is okay
        if (!response.ok) {
            // Parse the error response and throw an error
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error in the institution API response');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Check if the response contains a valid name
        if (!data || !data.name) {
            console.log('The institution API response does not contain a valid name.');
            return { name: "Name not available" };
        }

        // Return the institution data
        return data;
    } catch (error) {
        // Log an error if there's an issue fetching the institution name
        console.error('Error fetching institution name:', error);
        throw error;
    }
};

// Export the functions for external use
export { getInstitutions, fetchInstitutionName };
