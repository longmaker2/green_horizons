import React, { useState, useEffect } from "react";
import "../styles/about.css";
import Loading from "./Loading";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section>
            <Container>
              <Row>
                <Col>
                  <div className="about-container">
                    <h1>About Us</h1>
                    <p>
                      Welcome to Green Horizons, your go-to platform for
                      exciting and eco-friendly tours around the world.
                    </p>
                    <p>
                      Our mission is to provide unforgettable experiences while
                      promoting sustainable travel and environmental
                      consciousness.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default About;
