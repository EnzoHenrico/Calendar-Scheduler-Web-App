const get = async (endpoint) => {
  const token = getToken();
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(endpoint, options);
  const json = await response.json();
  
  if (response.status === 401) {
    localStorage.clear();
    return;
  }
  if (response.status != 200){ 
    throw json
  }
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

    const response = await fetch(endpoint, options);    
    const json = await response.json();

    if (response.status != 201){
      throw json;
    }
    return json;
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
  const json = await response.json();

  if (response.status === 401) {
    localStorage.clear();
    return;
  }
  if (response.status != 200){ 
    throw json
  }

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
    const json = await response.json();

    if (response.status != 200){ 
      throw json;
    }
    return json;
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { get, post, patch, reqDelete };
