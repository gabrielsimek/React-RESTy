const makeRequest = async (url, method, body) => {
  try {
    let res;
    if(body){
      res = await fetch(url, {
        method,
        body
      });
    }
    res = await fetch(url, {
      method
    });
  
    const json = await res.json();
    return json;
    
  } catch(error) {
    if(error) return error.message;
  }

};

export default makeRequest;

