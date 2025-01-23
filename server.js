const express = require('express');
const fetch = require('node-fetch'); // Import fetch (from node-fetch)
const app = express();
const port = 8000;

// YouTube API URL (use the RapidAPI URL from the endpoint you gave)
const youtubeApiUrl = 'https://youtube-v31.p.rapidapi.com/';

// Your API key from RapidAPI
const apiKey = 'your-rapidapi-key-here';

const fetchVideoData = async (videoId) => {
  try {
    const response = await fetch(`${youtubeApiUrl}videos?part=statistics&id=${videoId}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
      },
    });
    const data = await response.json();
    return data.items[0].statistics;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

// Set up a route to get data for a video
app.get('/video-stats/:videoId', async (req, res) => {
  const videoId = req.params.videoId;
  const data = await fetchVideoData(videoId);
  if (data) {
    res.json(data);  // Show the data as JSON
  } else {
    res.status(500).json({ message: 'Failed to fetch data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
