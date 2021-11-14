import React from 'react'

export default function Card(props) {
  const {
    title,
    content,
    image
  } = props;

  return (
    <div className="card mx-8">
      <div className="flex">
        <img src={image} alt="" style={{ maxWidth: '300px' }} />
        <div className="">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
