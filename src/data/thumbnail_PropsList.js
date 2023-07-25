import PlayButton from '../components/playButton.js'

let porpList = [{
    id: 1,
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Coder Dost',
    isVerified: true,
    onpress:<PlayButton message={"Play click hua"} onPlay={()=>alert('Hn Play ho rha hai')} onPause={()=> alert('hn Pause ho gya')}>Play1</PlayButton>
  },{
    id:2,
    title: 'Node JS tutorial',
    views: '220K',
    time: '4 year ago',
    channel: 'Coder Dost',
    isVerified: true,
    onpress: <PlayButton message={"Play click hua"} onPlay={()=>alert('Hn Play ho rha hai')} onPause={()=> alert('hn Pause ho gya')}>Play2</PlayButton>
  },{
    id:3,
    title: 'MongoDb JS tutorial',
    views: '320k',
    time: '2 year ago',
    channel: 'Coder Dost',
    isVerified: false,
    onpress:<PlayButton message={"Play click hua"} onPlay={()=>alert('Hn Play ho rha hai')} onPause={()=> alert('hn Pause ho gya')}>Play3</PlayButton>
  }];
export default porpList;