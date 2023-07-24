import React from 'react'
import './video.css'

// function Video(props){
//   let tutorialName = props.title;
//   console.log("{title}");
//   return (
//   <div>
//    <img src='https://images.surferseo.art/ab2827f1-a2ea-469f-874f-de59c41af595.jpeg' width={800} height={400} alt='img1'></img>
//    <div className='bg' style={{backgroundColor:props.bgColor}}>{tutorialName}</div>
//    </div>
//   );
// }

function Video({title,channel="Coder Dost",views,time}) {
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="https://images.surferseo.art/ab2827f1-a2ea-469f-874f-de59c41af595.jpeg"  width={800} height={400}  alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;