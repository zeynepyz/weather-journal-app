// Global Variables
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
// Personal API Key for OpenWeatherMap API
const apiKey = '35b97ffbc75ae753a764f2c84a1262bf';
const serverURL = 'http://localhost:8000/add';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
  
      try {
        const newData = await response.json();
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  };


/* Function called by event listener */
function performAction() {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const date = new Date().toLocaleDateString();

    getWeatherData(baseURL, zip, apiKey)
        .then(data => {
            // Extract temperature from the data
            const temperature = data.main.temp;
            // Prepare the data object
            const postDataObj = {
                temperature,
                date,
                userResponse: feelings
            };
            // Here you can handle the data, e.g., update the UI or log it
            return postData(serverURL, postDataObj);
        })
        .then(() => {
            updateUI();
        })
        .catch(error => console.error("Error:", error));
}

// Async GET request to OpenWeatherMap API
const getWeatherData = async (baseURL, zip, apiKey) => {
    const response = await fetch(`${baseURL}${zip}&appid=${apiKey}`);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
};

// Async function to update the UI
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData)
        // Update the UI with the fetched data
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
        document.getElementById('content').innerHTML = `Feeling: ${allData.userResponse}`;
    } catch (error) {
        console.error("Error:", error);
    }
};
