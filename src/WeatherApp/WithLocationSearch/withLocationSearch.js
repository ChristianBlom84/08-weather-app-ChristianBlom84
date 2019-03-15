import React from 'react'

const withLocationSearch = WrappedComponent => {
  const searchLocation = (location) => {
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err);
      })
  };
  return props => <WrappedComponent searchLocation={searchLocation} {...props} />
}

export default withLocationSearch