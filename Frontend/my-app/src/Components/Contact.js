function Contact()
{
  return(
    <div className="contact-container" id="contact">
      <div className="contact-1">
        <h1>CONTACT</h1>
    </div>
    <div className="contact-map">
      <div className="contact-map-1">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1231330266687!2d80.21183437412121!3d13.027829913644927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b48db904c5%3A0x8a3fa6adfa50075!2sRestaurants!5e0!3m2!1sen!2sin!4v1717839807941!5m2!1sen!2sin"
        width="550" 
        height="350"
         style={{border:"0"}} 
         allowfullscreen="" 
         loading="lazy"
       referrerpolicy="no-referrer-when-downgrade"
       title="nop" >
      </iframe>
      </div>
      <div className="contact-map-2">
        <h1>GET IN TOUGH</h1>
        <div className="whole">
        <div>
        <input placeholder="Username"></input><br></br>
        </div>
        <div className="password">
        <input placeholder="Password"></input><br></br>
        </div>
        <div className="number">
        <input placeholder="Number"></input>
        </div>
        <button style={{backgroundColor:"yellow", color:"black"}}>CONTACT NOW</button>
        </div>
          
      </div>
    </div>
    </div>
  )
}
export default (Contact)