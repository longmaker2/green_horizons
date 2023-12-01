import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import Loading from "../../pages/Loading";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const [loadingData, setLoadingData] = useState(true);

  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoadingData(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loadingData ? (
        <Loading />
      ) : (
        <>
          {loading && <h4>Loading...</h4>}
          {error && <h4>{error}</h4>}

          {!loading &&
            !error &&
            featuredTours?.map((tour) => (
              <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            ))}
        </>
      )}
    </>
  );
};

export default FeaturedTourList;
