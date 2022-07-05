const get = async (endpoint, user) => {
  const token = getToken();
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    user,
  };

  const response = await fetch(endpoint, options);

  if (response.status === 401) {
    localStorage.clear();
    return;
  }

  const json = response.json();
  console.log('API: ', json);
  return json;
};

const getToken = () => {
  return localStorage.getItem('token');
};

export default get;
