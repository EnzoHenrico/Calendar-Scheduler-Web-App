const get = async (endpoint) => {
  const token = getToken();
  const options = {
    method: 'GET',
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

const post = async (endpoint, body) => {
  const token = getToken();
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };

  try {
    const response = await fetch(endpoint, options);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const patch = async (endpoint, body) => {
  const token = getToken();
  const options = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };

  const response = await fetch(endpoint, options);

  if (response.status === 401) {
    localStorage.clear();
    return;
  }

  const json = response.json();
  return json;
};

const reqDelete = async (endpoint) => {
  const token = getToken();
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

export { get, post, patch, reqDelete };
