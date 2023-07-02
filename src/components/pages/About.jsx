import Vision from "./Vision";

const About = () => {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About Us</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem ratione aliquid qui, tempore quasi dicta
                similique reprehenderit dolores inventore placeat quas nulla quo
                perspiciatis repudiandae eius eum aperiam, nobis earum. Nobis
                sapiente culpa laborum veritatis praesentium ratione quam
                aperiam ea amet dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Vission */}
      <Vision />
    </div>
  );
};

export default About;
