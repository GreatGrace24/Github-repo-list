import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchRepos = (page = 1, perPage = 20) => {
   axios.get(`${BASE_URL}/users/greatgrace24/repos`, {
    params: { page, per_page: perPage },
     return
  });
};
