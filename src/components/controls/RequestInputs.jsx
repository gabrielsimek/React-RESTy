import React from 'react';
import PropTypes from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
const RequestInputs = ({ url, method, body, onChange, onSubmit, onJSONInput }) => {
  //Use placeholder for JSON input in place of value
  let placeHolder;
  body ? placeHolder =  body : placeHolder = null;
  return (
    <>
      <form name="request-form"
        onSubmit={onSubmit}
      >
        <label>
            URL
          <input 
            type="text"
            name="url"
            value={url}
            onChange={onChange}
          />
        </label>
        <label>
            GET
          <input 
            type="radio"
            value="GET"
            name="method"
            checked={method === 'GET'}
            onChange={onChange}
          />
        </label>
        <label>
            POST
          <input 
            type="radio"
            value="POST"
            name="method"
            checked={method === 'POST'}
            onChange={onChange}
          />
        </label>
        <label>
            PUT
          <input 
            type="radio"
            value="PUT"
            name="method"
            checked={method === 'PUT'}
            onChange={onChange}
          />
        </label>
        <label>
            PATCH
          <input 
            type="radio"
            value="PATCH"
            name="method"
            checked={method === 'PATCH'}
            onChange={onChange}
          />
        </label>
        <label>
            DELETE
          <input 
            type="radio"
            value="DELETE"
            name="method"
            checked={method === 'DELETE'}
            onChange={onChange}
          />
        </label>
        <button>Go!</button>
      </form>
      <label>
      
        <JSONInput
          form="request-form"
          name="body"
          onChange={onJSONInput}
          id          = "a_unique_id"
          placeholder = { placeHolder } 
          locale      = { locale }
          height      = "200px"
        />
      </label>
    </>
  );
};

RequestInputs.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onJSONInput: PropTypes.func.isRequired
};
export default RequestInputs;


//text area alt.
{/* <textarea 
          placeholder="JSON body" 
          form="request-form"
          name="body"
          onChange={onChange}
          value={body}
        ></textarea> */}
