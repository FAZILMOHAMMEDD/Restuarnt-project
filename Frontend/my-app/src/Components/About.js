import about from '../assests/images/about.jpg'
function About()
{
  return(
    <div className="about-container" id='about'>
      <div className="about-1">
       <h1>ABOUT US</h1>
      </div>
      <div className="about-image">
        <div className="about-images-1">
        <img src={about} alt='abo' ></img>
        </div>
        <div className="about-text">
     <h2>WHAT MAKES OUR FOOD SPECIAL?</h2>
     <p>Lorem ipsum dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor minus omnis expedita repellendus magnam vero neque aliquam libero necessitatibus, autem impedit, quod beatae sed praesentium sapiente voluptatum suscipit, accusamus molestias hic! Veritatis doloribus expedita accusantium incidunt corporis recusandae et, atque, nostrum, voluptates beatae tenetur illo sint veniam id quaerat magnam.consectetur, adipisicing elit. Voluptate est soluta cum temporibus dolor quia aperiam sed assumenda illo! Earum.</p>
     <p id='cup'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor minus omnis expedita repellendus magnam vero neque aliquam libero necessitatibus, autem impedit, quod beatae sed praesentium sapiente voluptatum suscipit, accusamus molestias hic! Veritatis doloribus expedita accusantium incidunt corporis recusandae et, atque, nostrum, voluptates beatae tenetur illo sint veniam id quaerat magnam.</p>
       <button>LEARN MORE</button>
        </div>

      </div>
    </div>
  )
}
export default (About)