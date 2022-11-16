import axios from 'axios';

export const getFeeds = async () => {
  const nameMedium = 'making-cash';
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${nameMedium}`;
  const extraUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://rss.app/feeds/DruaZbyihFGIxyqu.xml';

  const res = await axios.get(url)
    .then(res => res.data.items)
    .catch(() => 'error');

  if (!Array.isArray(res)) {
    return axios.get(extraUrl)
      .then(res => res.data.items)
      .catch(() => []);
  }
  return res;
};