import React from 'react';
import * as PropTypes from 'prop-types';

const ListErrors = ({ errors }) => {
  if (errors) {
    return (
      <ul className="error-messages">
        {
          Object.keys(errors).map(key => {
            return (
              <li key={key}>
                {key} {errors[key]}
              </li>
            );
          })
        }
      </ul>
    );
  } 
  return null;
}

ListErrors.propTypes = {
  errors: PropTypes.object
}

ListErrors.defaultProps = {
  errors: null
}

export default ListErrors;
