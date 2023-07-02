import { Link } from "react-router-dom";
import Slider from "../inc/Slider";
import Vision from "./Vision";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";
import Footer from "../inc/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam reiciendis vel soluta nobis necessitatibus. Ipsam sed
                eveniet esse assumenda, error possimus dicta saepe unde nulla
                natus totam officia quasi sunt. Sint nam minima voluptatibus
                voluptates dolorem eligendi libero eos blanditiis quas itaque
                consequuntur earum temporibus ratione repellat quam, modi magni
                incidunt. Voluptatem eum delectus voluptatibus molestias nulla
                eos ipsum quo! Doloribus atque natus fugit pariatur corrupti
                voluptatem modi, est, ipsa similique debitis deserunt,
                dignissimos asperiores! Mollitia, quibusdam. Voluptatem, ratione
                nisi voluptas hic consequuntur optio blanditiis libero commodi,
                ea, eos ipsa!
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Vission section */}
      <Vision />

      {/* Our Services */}

      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={service1}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi fuga reiciendis, assumenda animi sed magnam
                    possimus aspernatur harum vel consequuntur itaque cumque
                    placeat nam aliquam quae minima voluptas illo officia!
                  </p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={service2}
                  className="w-100 border-bottom"
                  alt="services"
                />

                <div className="card-body">
                  <h6>Service 2</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse iusto, commodi iste vitae suscipit expedita
                    voluptatibus, aut facilis, nisi alias accusamus assumenda in
                    pariatur architecto repellendus! Voluptates possimus
                    perferendis laborum.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={service3}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>Service 3</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti quisquam excepturi accusamus quasi! Excepturi velit
                    similique et aliquam, eveniet sed quos. Quasi provident fuga
                    animi pariatur tenetur maiores qui dignissimos?
                  </p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
