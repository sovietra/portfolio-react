const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/about.png" alt="About" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Here I tell a little about myself</h3>
        <p>
          My name is Shanya Korver and I'm 18 years old. I currently work in a 
          supermarket restocking things for more than 2 years.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  )
}

export default About