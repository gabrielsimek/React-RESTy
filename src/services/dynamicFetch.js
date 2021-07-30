const makeRequest = async (url, method, body) => {
  let res;
  if(body){
    res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
  else {
    res = await fetch(url, {
      method
    });
  }
  
  const json = await res.json();
  return json;
};

export default makeRequest;

