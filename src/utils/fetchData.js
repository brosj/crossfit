export const exerciseOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    // 'X-RapidAPI-Host': process.env.REACT_APP_EXERCISE_HOST
    'X-RapidAPI-Key': 'd59dc72159msh49371331c025731p1333a0jsn0da0a14716ee',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    // 'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_HOST
    'X-RapidAPI-Key': 'd59dc72159msh49371331c025731p1333a0jsn0da0a14716ee',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  // console.log(data);

  return data;
}