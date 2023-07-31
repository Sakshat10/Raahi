import React from 'react'
import img2 from "./images/Article.jpg";
import img1 from "./images/Article1.jpg";

const Article = () => {
  return (
    <div className='article-back' name='About'>
    <div className='article'>
      <div>
        <h1 className='article-title'>You Probably Don't Know These About Ancient Monuments</h1>
      </div>
        {/* Article - 1 */}
        <div className='article-card-1'>
      <div className='article-image'>
        <img src={img1} alt="Colosseum" className='card-photo'/>
      </div>
      <div className='article-para'>
        <h1 className='art-title'>The Mosque of Rifai and Sultan Hassan</h1>
        <p className='article-para-1'>The Mosque of Rifai, located in Cairo, Egypt, is renowned for its massive size and impressive dome, rising 52 meters high. Meanwhile, the nearby Sultan Hassan Mosque stands as an exquisite example of Mamluk architecture, featuring intricate stonework and stunning interiors. Both mosques are historical gems attracting visitors worldwide.</p>
        {/* <button className='article-button-1'>Read More</button> */}
      </div>
        </div>
        {/* Article - 2 */}
        <div className='article-card-2'>
      <div className='article-para'>
        <h1 className='art-title'>Giza Governorate</h1>
        <p className='article-para-1'>Giza Governorate, located in Egypt, is a historical and cultural hub. Home to the iconic Giza Pyramid Complex, it captivates visitors with its ancient wonders. As Egypt's third-largest governorate, Giza offers a blend of modernity and tradition, boasting museums, parks, and vibrant markets. Its rich heritage, including the Sphinx, draws tourists from all over the world.</p>
        {/* <button className='article-button-2'>Read More</button> */}
      </div>
      <div className='article-image'>
        <img src={img2} alt="Giza" className='card-photo'/>
      </div>
        </div>
    </div>
    </div>
  )
}

export default Article
