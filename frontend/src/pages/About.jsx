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
        <section>
          <Container className="about-container">
            <Row>
              <Col>
                <div className="about__text">
                  <h1 className="text-center">About Green Horizons</h1>
                  <p>
                    Welcome to Green Horizons, your go-to platform for exciting
                    and eco-friendly tours around South Sudan. Our mission is to
                    provide unforgettable experiences while promoting
                    sustainable travel and environmental consciousness.
                  </p>
                  <p>
                    At Green Horizons, we believe in unlocking the untapped
                    tourism potential of South Sudan through the "Green
                    Horizons: South Sudan's Tourism & Wildlife Sanctuary"
                    project. Our goal is not only to address the challenges of
                    inadequate tourism infrastructure but also to combat the
                    underrepresentation of conservation efforts online.
                  </p>
                  <p>
                    Our one-stop online platform is designed to enhance tourist
                    engagement, raise awareness about conservation, foster
                    collaboration with local communities, and stimulate economic
                    growth through responsible tourism.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default About;
