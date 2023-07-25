import PlayButton from "./components/playButton";
import Video from "./components/video";
import porpList from "./data/thumbnail_PropsList";

function App() {
 
  return (
    <div className="App">
      <div>Videos</div> 
     
      {
        porpList.map(e=><Video
          key={e.id}
          title={e.title}
          views={e.views}
          time={e.time}
          channel={e.channel}
          isVerified={e.isVerified}
          onpress={e.onpress}
        ></Video>)
      }
      <PlayButton message={"Play click hua"} onPlay={()=>alert('Hn Play ho rha hai')} onPause={()=> alert('hn Pause ho gya')}>Play</PlayButton>
      {/* <PlayButton message={"Pause click hua"} onPlay={()=>console.log('Hn Play bhi Chal rha hai')}>Pause</PlayButton> */}
      
    </div>
  );
}

export default App;
