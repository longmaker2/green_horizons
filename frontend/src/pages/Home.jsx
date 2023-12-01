import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Loading from "./Loading";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import { ClockLoader } from "react-spinners";

const Home = () => {
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
          {/* ==================hero section start====================== */}
          <section>
            <Container>
              <Row>
                <Col lg="6">
                  <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center">
                      <Subtitle
                        subtitle={
                          "Explore the natural beauty of South Sudan before you go!"
                        }
                      />
                      <img src={worldImg} alt="World img" />
                    </div>
                    <h1>
                      Green Horizons: South Sudan's Tourism &{" "}
                      <span className="highlight">Wildlife Sanctuary</span>
                    </h1>
                    <p>
                      Green Horizons addresses the existing challenges of
                      inadequate tourism infrastructure in South Sudan, as well
                      as the underrepresentation of conservation efforts online.
                      By providing a one-stop online platform, the project aims
                      to enhance tourist engagement, raise awareness about
                      conservation, foster collaboration with local communities,
                      and stimulate economic growth through tourism.
                    </p>
                  </div>
                </Col>

                <Col lg="2">
                  <div className="hero__img-box mt-5">
                    <img src={heroImg} alt="Hero img" />
                  </div>
                </Col>
                <Col lg="2">
                  <div className="hero__img-box hero__video-box mt-5">
                    <video src={heroVideo} alt="Hero Video" controls />
                  </div>
                </Col>
                <Col lg="2">
                  <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="Hero img" />
                  </div>
                </Col>

                <SearchBar />
              </Row>
            </Container>
          </section>

          {/* ==================hero section end====================== */}

          <section>
            <Container>
              <Row>
                <Col lg="3">
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">
                    We offer our best services
                  </h2>
                </Col>
                <ServiceList />
              </Row>
            </Container>
          </section>

          {/*================== featured tours section start ====================*/}
          <section>
            <Container>
              <Row>
                <Col lg="12" className="mb-5">
                  <Subtitle subtitle={"Explore"} />
                  <h2 className="featured__tour-title">Our featured tours</h2>
                </Col>

                <FeaturedTourList />
              </Row>
            </Container>
          </section>
          {/*================== featured tours section end ====================*/}

          {/* ================= experience section start ====================== */}
          <section>
            <Container>
              <Row>
                <Col lg="6">
                  <div className="experience__content">
                    <Subtitle subtitle={"Experience"} />

                    <h2>
                      With our all experience, <br /> we will serve you
                    </h2>
                    <p>
                      The project aligns with broader conservation and
                      sustainable development goals <br />
                      in Africa by promoting biodiversity preservation,
                      education, and responsible tourism.
                    </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                      <span>12k+</span>
                      <h6>Successful trips</h6>
                    </div>
                    <div className="counter__box">
                      <span>2k+</span>
                      <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                      <span>15</span>
                      <h6>Years of experience</h6>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="experience__img">
                    <img src={experienceImg} alt="Experience img" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* ================= experience section end ======================== */}

          {/* ================== gallery section start ==================== */}
          <section>
            <Container>
              <Row>
                <Col lg="12">
                  <Subtitle subtitle={"Gallery"} />
                  <h2 className="gallery__title">
                    Visit our customers tour gallery
                  </h2>
                </Col>
                <Col lg="12">
                  <MasonryImagesGallery />
                </Col>
              </Row>
            </Container>
          </section>
          {/* ================== gallery section end ====================== */}

          {/* ================== testimonial section start ================= */}
          <section>
            <Container>
              <Row>
                <Col lg="12">
                  <Subtitle subtitle={"Fans Love"} />
                  <h2 className="testimonial__title">
                    What our fans say about us!
                  </h2>
                </Col>
                <Col lg="12">
                  <Testimonials />
                </Col>
              </Row>
            </Container>
          </section>
          {/* ================== testimony section end ================= */}
          <Newsletter />
        </>
      )}
    </>
  );
};

export default Home;
