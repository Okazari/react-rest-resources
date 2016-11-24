import React from 'react';
const ResourceDisplay = ({ resource }) => {
  if(!resource) return null
  return (
    <div>
      <pre>
        {resource.title}
      </pre>
    </div>
  );
}

export default ResourceDisplay;
