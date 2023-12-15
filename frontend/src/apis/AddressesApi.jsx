// Define the URL for addresses
const AddressesUrl = 'http://localhost:3001/api/v1/addresses';

// Function to get all addresses
const getAddresses = async () => {
  try {
    // Make a fetch request to the AddressesUrl
    const response = await fetch(AddressesUrl);

    // Check if the response is okay (status code 200-299)
    if (response.ok) {
      // Parse the response as JSON and return the data
      const data = await response.json();
      return data;
    } else {
      // Log an error message if the response is not okay
      console.error('Error fetching addresses.');
      return null;
    }
  } catch (error) {
    // Log a network error if the fetch operation fails
    console.error('Network error:', error);
    return null;
  }
};

// Function to fetch addresses for a specific course
const fetchCourseAddresses = async (courseId) => {
  try {
    // Construct the URL for course addresses using the courseId
    const url = `http://localhost:3001/api/v1/courses/${courseId}/addresses`;

    // Make a fetch request to the constructed URL
    const response = await fetch(url);

    // Check if the response is not okay (status code outside 200-299)
    if (!response.ok) {
      // Parse the error response as JSON and throw an error
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error in the address API response');
    }

    // Parse the response as JSON and return the data
    const data = await response.json();
    return data;
  } catch (error) {
    // Log an error if there is an issue fetching course addresses
    console.error('Error fetching addresses:', error);
    // Re-throw the error to propagate it up the call stack
    throw error;
  }
};

// Export the functions for external use
export { getAddresses, fetchCourseAddresses };
