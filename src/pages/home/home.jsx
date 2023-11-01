import React from 'react'
import './home.scss'
import  QrReader  from 'react-qr-scanner';
import linkImage from "../../image/pngwing.com.png";
import secrutyImage from "../../image/secruty.png";
import staticImage from "../../image/staticts.png"
export const HomePage = () => {

let [data,setData] = React.useState([])
const [open,setOpen] = React.useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = e.target.url.value;
   if (url) {
     fetch("http://35.228.133.96:4000/api/generate", {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ url }),

     }).then((res) => res.json())
       .then((data) => {
         console.log(data);
         setData((p) => {
           return [...p, data]
         })
       })
   }else{
    setOpen(true)
   }

  }
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    alert('Matn nusxalandi!');
  };


  let  deleteItem = (url)=>{
   let newArr = data.filter((el)=> el.url !== url);
   setData(newArr)
  }


  const [result, setResult] = React.useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      window.location.href = data;
    }

    
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <>
      <section className='Home-hero-section'>
        <div className='Hero_Box'>
          <div className="container">
            <div className='shorten_box'>
              <form onSubmit={handleSubmit} data-v-052ac045="" noValidate="novalidate">
                <div data-v-052ac045="" className="input-group input-group-lg shadow-lg">
                  <input
                    data-v-052ac045="" type="url" spellCheck={false} autoComplete='off'
                    autoCorrect="off" id="long-url-input" autoCapitalize="none" required="required"
                    placeholder="Enter a link to shorten it" name='url' className="form-control input-lg input-xlg" />
                    

                  <div
                    data-v-052ac045="" className="input-group-append">
                    <button style={{ backgroundColor: "#284243", color: "#fff" }} data-v-052ac045="" aria-label="Create Short Link"
                      type="submit" className="btn btn-primary btn-lg">
                      <span data-v-052ac045="" className="d-none d-md-inline-block">
                        Shorten URL
                      </span>
                      {/* <i style={{display:"inline-block"}} data-v-052ac045="" aria-hidden={true} className="fa fa-chevron-right">
                      </i> */}
                    </button>
                  </div>
                </div>
              </form>
              {
                open ?  <span style={{color:"red"}}>Siz url ni kiritishingiz zarur !</span>
                :
                ""
              }
              <p className='shorten-text'>
                ShortURL is a free tool to shorten URLs and generate short links
                URL shortener allows to create a shortened link making it easy to share
              </p>

             {
              data?.map((el)=>{
                return  <div className='shortern-row'>
                  <div key={el.url} className='shorten-url-box'>
                    <p className='shortern-url-text'>{el.url}</p>
                    <img  onClick={()=>handleScan(el.url)}  src={el.qrcode} alt="" />
                    <QrReader 

                      delay={500}
                      onError={handleError}
                      onScan={handleScan}
                      style={{ width: "80px",height:"80px" }}
                    />

                    <button className='copy-btn' onClick={() => handleCopy(el.url)}>Copy</button>
               
                  </div>
                  <button className='delete-btn' onClick={()=> deleteItem(el.url)}> X</button>
                </div>
              })
             }
            </div>



            <div className='shorten-content'>
              <div className='shorten-inner-content'>
                <img src={linkImage} alt="link-icon" />
                <h3>Shortened</h3>
                <p className='shorten-inner-content_text'>T.LY URL Shortener makes long links look cleaner and easier to share! Add your own Custom Domains to personalize your brand! Over 20 million monthly visitors trust T.LY. Easily create trackable QR Codes.

                </p>
              </div>
              <div className='shorten-inner-content'>
                <img src={secrutyImage} alt="link-icon" />
                <h3>Secure
                </h3>

                <p className='shorten-inner-content_text'>T.LY URL Shortener makes long links look cleaner and easier to share! Add your own Custom Domains to personalize your brand! Over 20 million monthly visitors trust T.LY. Easily create trackable QR Codes.

                </p>
              </div>
              <div className='shorten-inner-content'>
                <img src={staticImage} alt="link-icon" />
                <h3>Statistics</h3>

                <p className='shorten-inner-content_text'>T.LY URL Shortener makes long links look cleaner and easier to share! Add your own Custom Domains to personalize your brand! Over 20 million monthly visitors trust T.LY. Easily create trackable QR Codes.

                </p>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}
