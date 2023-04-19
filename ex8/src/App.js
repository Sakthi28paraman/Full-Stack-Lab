import React,{useState} from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const data = [
  {
      idx:0,
      img: img1,
      name: "img1",
      folder: "./images"
  },
  {
      idx:1,
      img: img2,
      name: "img2", 
      folder: "./images"
  },
  {
      idx:2,
      img: img3,
      name: "img3", 
      folder: "./images"
  },
  {
      idx:3,
      img: img4,
      name: "img4", 
      folder: "./images"
  },
  {
    idx:4,
    img:img5,
    name:"img5",
    folder : "./images"
  }
]
const ImgSlider = () => {
  const [idx, setIdx] = useState(0)
  const [imgs,] = useState(data)
  const styles = {
      contdiv: {
          width: '95vw',
          height: '95vh',
          display: 'flex',
          overflow:'hidden',
          position:'relative',
          left:'5%',
      },
      arrow: {
          justifyContent: 'center',
          alignItems: 'center',
      },
      dot: {
          // position: 'relative',
          // top:'50%'
      },
      wholediv: {
          justifyContent: 'center',
          alignItems: 'center',
          overflow:'hidden',
          display: 'flex',
          flexDirection:'column'
      },
      dotBtn: {
          all:'unset',
          margin:'10px 0px 0px 0px'
      }
  }
  const prevImg = () => setIdx((idx-1)<0?imgs.length-1+idx:idx-1)
  const nxtImg = () => setIdx((idx + 1) % imgs.length)
  return (
      <div style={styles.wholediv}>
          <div style={styles.contdiv}>
              <button onClick={prevImg} styles={styles.arrow}>Previous
                  {/* <ArrowBackIosNewIcon/> */}
              </button>
                  <img src={`${imgs[idx]['img']}`} alt={`${imgs[idx]['name']}`} />  
              <button onClick={nxtImg} styles={styles.arrow}>Next
                  {/* <ArrowForwardIosIcon/> */}
              </button>
          </div>
          <div>
          {
              imgs.map( img => <button onClick={()=>setIdx(img.idx)} style={styles.dotBtn}></button>)
                // {/* <FiberManualRecordIcon styles={ styles.dot } /></button>) */}
          }
          </div>
      </div>
)
}

export default ImgSlider
