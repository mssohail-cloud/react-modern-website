const Contact = () => {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1" htmlFor="name">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
