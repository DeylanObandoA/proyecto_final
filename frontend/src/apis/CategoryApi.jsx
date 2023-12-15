// Define the URL for categories
const Category_url = 'http://localhost:3001/api/v1/categories';

// Function to get all categories
async function getCategories() {
    try {
        // Make a fetch request to the Category_url
        const response = await fetch(Category_url);

        // Check if the response is okay (status code 200-299)
        if (response.ok) {
            // Parse the response as JSON and return the data
            const data = await response.json();
            return data;
        } else {
            // Log an error message if the response is not okay
            console.error('Error fetching categories.');
            return null;
        }
    } catch (error) {
        // Log a network error if the fetch operation fails
        console.error('Network error:', error);
        return null;
    }
}

// Export the function for external use
export { getCategories };
