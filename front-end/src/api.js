export const get = async (endpoint) => {
  const token = getToken();
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(endpoint, options);

  if (response.status === 401) {
    localStorage.clear();
    return;
  }

  const json = response.json();
  return json;
};

const getToken = () => {
  return localStorage.getItem('token');
};
