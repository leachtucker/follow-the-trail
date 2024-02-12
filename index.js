// run `node index.js` in the terminal

const axios = require('axios');

followTheTrail('https://www.letsrevolutionizetesting.com/challenge');

function followTheTrail(url) {
  axios({ url, method: 'GET', headers: { Accept: 'application/json' } })
    .then((response) => {
      const nextPath = response.data.follow;

      if (nextPath) {
        console.count('Following the next pointer');
        followTheTrail(nextPath);
      } else {
        console.log('Trail end: ', response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
