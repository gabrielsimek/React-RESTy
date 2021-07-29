import React from 'react';
import PropTypes from 'prop-types';

const RequestInputs = () => {
  return (
    <>
      <form name="request-form">
        <label>
            URL
          <input type="text"/>
        </label>
        <label>
            GET
          <input 
            type="radio"
            value="GET"
          />
        </label>
        <label>
            POST
          <input 
            type="radio"
            value="POST"
          />
        </label>
        <label>
            PUT
          <input 
            type="radio"
            value="PUT"
          />
        </label>
        <label>
            PATCH
          <input 
            type="radio"
            value="PATCH"
          />
        </label>
        <label>
            DELETE
          <input 
            type="radio"
            value="DELETE"
          />
        </label>

      </form>
      
      <label>

        <textarea placeholder="JSON body" form="request-form"></textarea>
      </label>
    </>
  );
};

export default RequestInputs;
