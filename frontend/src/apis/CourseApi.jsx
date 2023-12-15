// Define the URL for courses
const Course_Url = 'http://localhost:3001/api/v1/courses';

// Function to get a paginated list of courses
async function getCourses(page) {
  try {
    // Make a fetch request to the Course_Url with a specified page parameter
    const response = await fetch(`${Course_Url}?page=${page}`);

    // Check if the response is okay (status code 200-299)
    if (response.ok) {
      // Parse the response as JSON and return the data
      const data = await response.json();
      return data;
    } else {
      // Log an error message if the response is not okay
      console.error('Error fetching the list of courses.');
      return null;
    }
  } catch (error) {
    // Log a network error if the fetch operation fails
    console.error('Network error:', error);
    return null;
  }
}

// Function to get course data for a specific course ID
const getCourseForId = async (courseId) => {
  try {
    // Construct the URL for the specific course using the courseId
    const url = `${Course_Url}/${courseId}`;

    // Make a fetch request to get the data for the specific course
    const response = await fetch(url);

    // Parse the response as JSON and return the course data
    const courseData = await response.json();
    return courseData;
  } catch (error) {
    // Log an error if there's an issue fetching the course data
    console.error('Error fetching course data:', error);
    throw error;
  }
};

// Export the functions for external use
export { getCourses, getCourseForId };
