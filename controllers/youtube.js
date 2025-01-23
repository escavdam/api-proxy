// Make an API request from the browser (no need to install axios or node-fetch)
const fetchVideoData = async (videoId) => {
    try {
      const response = await fetch(`https://youtube-v31.p.rapidapi.com/videos?part=statistics&id=${videoId}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
          'X-RapidAPI-Key': 'your-rapidapi-key-here',
        },
      });
      const data = await response.json();
      console.log(data.items[0].statistics);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  