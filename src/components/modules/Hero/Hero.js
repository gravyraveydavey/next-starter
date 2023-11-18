const Hero = ({ children, className, image, ...props }) => (
    <section
      {...props}
      className={`v-mdu position-relative overflow-hidden ${className}`}
    >
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-12 col-md-8 pb-3 pt-35 py-md-24">
            <div
              className="bg-light-grey text-blue-dark p-3"
              data-aos="fade-up"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  export default Hero;
