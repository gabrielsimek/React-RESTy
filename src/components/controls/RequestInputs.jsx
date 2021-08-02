import React from 'react';
import PropTypes from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import './RequestInputs.css';
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
const RequestInputs = ({ url, method, body, onChange, onSubmit, onJSONInput }) => {
 
  return (
    <div>
      <form name="request-form"
        onSubmit={onSubmit}
      >
        <label>
            URL
          <input 
            placeholder="URL"
            type="text"
            name="url"
            value={url}
            onChange={onChange}
          />
        </label>
        {methods.map((m) => {
          return <>
            <input 
              id={m}
              type="radio"
              value={m}
              name="method"
              checked={method === m}
              onChange={onChange}
            />
            <label htmlFor={m}>{m}</label>
          </>;
        })}
        <button>Go!</button>
        <JSONInput
          form="request-form"
          name="body"
          onChange={onJSONInput}
          id          = "a_unique_id"
          placeholder = { body } 
          locale      = { locale }
          height      = "200px"
          width = "600px"
        />
      </form>
    </div>
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
