import '../Assets/Css/style.css';
const Dashboard=()=>
{
     return(
        <>
        <div className='main hv-100 wv-100 flex flex-col'>
  <div className='appbar hv-5 wv-100 flex theme-bg-dark items-center justify-center'>
    <div className='wv-90 flex items-center justify-end'>
        appbar
    </div>
  </div>
  <div className='content-container hv-95 flex flex-row justify-center items-center'>
    <div className='leftbar wv-15 theme-bg hv-95'>Leftbar</div>
<div className='content wv-85 hv-95 flex justify-center items-center'>
    <div className='vw-80 hv-90 theme-bg-dark'>
    Mycontent
    </div>
</div>
  </div>
        </div>
      
        </>
     )
}
export default Dashboard