const makeRequest = async (url, method, body, authType, authValue) => {

  try {
    const res = await fetch(url, {
      method,
      headers: {
        ...(body && { 'Content-Type': 'application/json' }),
        ...((authType && authValue) && { [authType]: authValue })
      },
      ...(body && { body: JSON.stringify(body) })
      
      // Short explanation goes like this: "..." spread operator deconstructs the object literal and adds it to "obj" e.g. in this case ...(true) && {someprop: 42}, the whole term that is to be deconstructed is "(true) && {someprop: 42}", in this case the boolean is true and the term just yields {someprop:42} which is then deconstructed and added into obj. if the boolean is false instead, then the term will just be false, and nothing will be deconstructed and added into obj
    });
    const json = await res.json();
    if(json) return json;
    return { Error: 'Not found' };
    
  } catch(error) {
    console.log(error);
  }
  

  
};

export default makeRequest;

