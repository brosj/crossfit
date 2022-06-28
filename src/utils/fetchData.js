export const exerciseOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    // 'X-RapidAPI-Host': process.env.REACT_APP_EXERCISE_HOST
    'X-RapidAPI-Key': '23283a7853mshe922f45812927c6p1ac4f7jsn760b99374f3f',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    // 'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_HOST
    'X-RapidAPI-Key': '23283a7853mshe922f45812927c6p1ac4f7jsn760b99374f3f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  // console.log(data);

  return data;
}