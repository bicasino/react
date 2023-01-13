import React, { useState, useEffect } from "react";
import HomeNews from "../../components/homeNews/HomeNews";
import Banner from "../../components/banner/Banner";
import Solution from "../../components/solution/Solution";
import Project from "../../components/project/Project";
import axios from "axios";
import FeedBack from "../../components/feedback/FeedBack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [banner, setBanner] = useState([]);
  const [solution, setSolution] = useState([]);
  const [project, setProject] = useState([]);
  const [homeNews, setHomeNews] = useState([]);

  useEffect(() => {
    axios.get(`https://it.vnpost.vn/api/v2/HomePageBanner`).then((resp) => {
      setBanner(resp.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://it.vnpost.vn/api/v2/SolutionCategory?menuId=8&numberTake=3`)
      .then((resp) => {
        setSolution(resp.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://it.vnpost.vn/api/v2/Project?menuId=9&numberTake=10`)
      .then((resp) => {
        setProject(resp.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://it.vnpost.vn/api/v1/News?menuId=3&skip=0&take=4`)
      .then((resp) => {
        setHomeNews(resp.data);
      });
  }, []);
  return (
    <main>
      <section className="container-fluid">
        <div className="hero-slides">
          {/* <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          > */}
          {/* <div className="carousel-inner"> */}
          <Banner item={banner} />

          {/* </div> */}
          {/* <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </section>
      <section className="solution">
        <div className="container">
          <div className="solution-head">
            <h1 className="solution-heading">Giải Pháp</h1>
          </div>
          <div className="solution-content">
            <Row>
              <Col className="d-flex">
                {solution &&
                  solution.map((item, index) => (
                    <Solution item={item} key={index} />
                  ))}
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="container">
          <div className="project-head">
            <h1 className="project-heading">Dự án</h1>
          </div>
          <div className="project-content">
            <div class="row">
              <Col>
                {project &&
                  project.map((item, index) => (
                    <Project item={item} key={index} />
                  ))}
              </Col>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="news-head">
            <h1 className="news-heading">Tin tức</h1>
          </div>
          <div className="news-content">
            <div className="row">
              <div className="col-sm-8 col-xs-12">
                <h3 className="second-title">
                  <span className="text">Tin Tức VNPOST</span>
                </h3>
                <div className="news-box">
                  {homeNews &&
                    homeNews.map((item, index) => (
                      <HomeNews item={item} key={index} />
                    ))}
                </div>
              </div>
              <FeedBack />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
