import React from 'react'
import './video.css'


function Video({title,channel="Coder Dost",views,time,isVerified = false,id,onpress}) {
  let comp;
  console.log({id});
  if(isVerified){
  comp = <div>Verified hun</div>;
  }
  else{
    comp =  <div>NHI Verified Nhi hun</div>;
  }
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="https://images.surferseo.art/ab2827f1-a2ea-469f-874f-de59c41af595.jpeg"  width={800} height={400}  alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      {comp}
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{onpress}</div>
      </div>
      </>
  );
}

export default Video;