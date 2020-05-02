import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer H5v69QGVcBeG_Yw4DkBV59qnsDuMjGPJHi3x-0CJDUPxJ3HxC32J4KNz-5tm0mW0LDkfplgmXkLJLvkuS1AutktEFIDuec5p1TmeMsQLhQ0MVoUIUiv0GjUhMfClXnYx'
  }
});
