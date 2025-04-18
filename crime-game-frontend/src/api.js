// // src/api.js
// import axios from 'axios';

// // Backend base URL
// const BASE_URL = 'http://localhost:5000/api';

// // Function to run queries (e.g., for CCTV logs)
// export const runCCTVQuery = async (queryId) => {
//   try {
//     const response = await axios.post(`ahttp://localhost:5000/api/cctv/execute-cctv-query/${queryId}`, {
//       selectedQuery: queryId
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error executing query:", error);
//     throw error;
//   }
// };

// // Function to fetch crime scene data (example)
// export const getCrimeScene = async (location, time) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/crime/crime-scene`, {
//       params: { location, time },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching crime scene:", error);
//     throw error;
//   }
// };
// src/api.js
import axios from 'axios';

// Backend base URL
const BASE_URL = 'http://localhost:5000/api';

// Function to run CCTV queries
export const runCCTVQuery = async (queryId) => {
  try {
    const response = await axios.post(`${BASE_URL}/cctv/execute-cctv-query/${queryId}`);
    return response.data;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};

// Function to fetch crime scene data
export const getCrimeScene = async (location, time) => {
  try {
    const response = await axios.get(`${BASE_URL}/crime/crime-scene`, {
      params: { location, time },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching crime scene:", error);
    throw error;
  }
};
