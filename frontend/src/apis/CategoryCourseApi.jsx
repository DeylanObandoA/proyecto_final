// Define the URL for category courses
const CategoryCourse_url = 'http://localhost:3001/api/v1/category_courses';

// Function to get the list of category courses
async function getCategoryCourses() {
    try {
        // Make a fetch request to the CategoryCourse_url
        const response = await fetch(CategoryCourse_url);

        // Check if the response is okay (status code 200-299)
        if (response.ok) {
            // Parse the response as JSON and return the data
            const data = await response.json();
            return data;
        } else {
            // Log an error message if the response is not okay
            console.error('Error fetching the list of category courses.');
            return null;
        }
    } catch (error) {
        // Log a network error if the fetch operation fails
        console.error('Network error:', error);
        return null;
    }
}

// Export the function for external use
export { getCategoryCourses };
