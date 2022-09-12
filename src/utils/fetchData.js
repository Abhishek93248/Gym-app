export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '85639aa264msh863c6bd99267cbep14bd9djsn25fccea7ee7d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '85639aa264msh863c6bd99267cbep14bd9djsn25fccea7ee7d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
