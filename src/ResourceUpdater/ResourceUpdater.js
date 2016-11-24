import React from 'react';
const ResourceUpdater = ({ resource, postResource }) => {
  if(!resource) return null
  const submit = (event) => {
    event.preventDefault()
    postResource({
      ...resource,
      title: event.target.title.value
    })
  }
  return (
    <form onSubmit={submit}>
      <input name="title" defaultValue={resource.title} />
      <button>Go</button>
    </form>
  );
}

export default ResourceUpdater;
