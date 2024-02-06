"use client";
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const id = params.id;
  const [post, setPost] = useState(null);
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetch(`/api/post/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />
      {post && (
        <div id="wrapper">
          <section
            class="section single-wrapper"
            style={{ paddingTop: "0px", marginTop: "20px" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                  <div class="page-wrapper">
                    <h3>{post.title}</h3>
                    <div
                      class="blog-title-area text-center"
                      style={{ marginBottom: "10px" }}
                    >
                      <div class="blog-meta big-meta">
                        <h6
                          style={{
                            color: "GrayText",
                            fontSize: "13px",
                            textAlign: "left",
                            marginTop: "12px",
                            marginBottom: "30px",
                          }}
                        >
                          {post.created_at_formatted}
                        </h6>
                      </div>
                    </div>

                    <div class="single-post-media">
                      <img src={post.image} alt="" class="img-fluid" />
                    </div>

                    <div class="blog-content">
                      <div class="pp">
                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description}
                        </p>

                        <h4 style={{ marginTop: "30px", marginBottom: "20px" }}>
                          {post.title1}
                        </h4>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description1}
                        </p>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description2}
                        </p>
                      </div>

                      <img
                        src={post.image1}
                        alt=""
                        class="img-fluid img-fullwidth"
                      />

                      <div class="pp">
                        <h4 style={{ marginTop: "30px", marginBottom: "20px" }}>
                          {post.title2}
                        </h4>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description3}
                        </p>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description4}
                        </p>

                        <ul class="check">
                          <li style={{ color: "#1d1d1d" }}>
                            {post.description5}
                          </li>
                          <li style={{ color: "#1d1d1d" }}>
                            {post.description6}
                          </li>
                          <li style={{ color: "#1d1d1d" }}>
                            {post.description7}
                          </li>
                          <li style={{ color: "#1d1d1d" }}>
                            {post.description8}
                          </li>
                        </ul>

                        <h4 style={{ marginTop: "30px", marginBottom: "20px" }}>
                          {post.title3}
                        </h4>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description9}
                        </p>
                        <img
                          src={post.image2}
                          alt=""
                          class="img-fluid img-fullwidth"
                        />

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description10}
                        </p>

                        <h3>
                          <h4
                            style={{ marginTop: "30px", marginBottom: "20px" }}
                          >
                            {post.title4}
                          </h4>
                        </h3>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description11}
                        </p>

                        <img
                          src={post.image3}
                          alt=""
                          class="img-fluid img-fullwidth"
                        />
                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description12}
                        </p>

                        <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                          {post.description13}
                        </p>
                      </div>

                      <img
                        src={post.image4}
                        alt=""
                        class="img-fluid img-fullwidth"
                      />
                      <h3>
                        <h4 style={{ marginTop: "30px", marginBottom: "20px" }}>
                          {post.title5}
                        </h4>
                      </h3>
                      <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                        {post.description14}
                      </p>
                      <h4 style={{ marginTop: "30px", marginBottom: "20px" }}>
                        {post.title6}
                      </h4>
                      <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                        {post.description15}
                      </p>

                      <h4 style={{ marginTop: "30px", marginBottom: "20px" }}>
                        {post.title7}
                      </h4>

                      <p style={{ color: "#1d1d1d", fontWeight: "500" }}>
                        {post.description16}
                      </p>
                      <img
                        src={post.image5}
                        alt=""
                        class="img-fluid img-fullwidth"
                      />
                    </div>

                    <div class="blog-title-area"></div>

                    <div class="row">
                      <div class="col-lg-12"></div>
                    </div>

                    <hr class="invis1" />
                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                  <div class="sidebar">
                    <div class="widget">
                      <h2 class="widget-title">Trend Videos</h2>
                      <div class="trend-videos">
                        <div class="blog-box">
                          <div class="post-media">
                            <a href="tech-single.html" title="">
                              <img
                                src="upload/tech_video_01.jpg"
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span class="videohover"></span>
                              </div>
                            </a>
                          </div>

                          <div className="blog-meta">
                            <h4>
                              <a href="tech-single.html" title="">
                                TVS Apache RTR 310 Tamil Review
                              </a>
                            </h4>
                            <iframe
                              width="320"
                              height="170"
                              src="https://www.youtube.com/embed/5C5hWlL-13s?si=NxG4Xk75_OzKzxc-"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>

                        <hr class="invis" />

                        <div class="blog-box">
                          <div class="post-media">
                            <a href="tech-single.html" title="">
                              <img
                                src="upload/tech_video_02.jpg"
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span class="videohover"></span>
                              </div>
                            </a>
                          </div>

                          <div className="blog-meta">
                            <h4>
                              <a href="" title="">
                                TVS RTR 310 Tamil review: First impressions
                              </a>
                            </h4>
                            <iframe
                              width="320"
                              height="170"
                              src="https://www.youtube.com/embed/aKRqicAM9XU?si=w6qC_wYn0_zc8TfH"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>

                        <hr class="invis" />

                        <div class="blog-box">
                          <div class="post-media">
                            <a href="tech-single.html" title="">
                              <img
                                src="upload/tech_video_03.jpg"
                                alt=""
                                class="img-fluid"
                              />
                              <div class="hovereffect">
                                <span class="videohover"></span>
                              </div>
                            </a>
                          </div>

                          <div className="blog-meta">
                            <h4>
                              <a href="tech-single.html" title="">
                                Hero Karizma XMR Tamil Review
                              </a>
                            </h4>
                            <iframe
                              width="320"
                              height="170"
                              src="https://www.youtube.com/embed/6yiJ7_MwZIU?si=IMr4EPdjg7pQHgC6"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget">
                      <h2 class="widget-title">Follow Us</h2>

                      <div class="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" className="social-button youtube-button">
                            <i
                              class="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>
                            <p>265k</p>
                          </a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" className="social-button google-button">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <p>369k</p>
                          </a>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" className="social-button facebook-button">
                            <i className="fa fa-facebook"></i>
                            <p>270k</p>
                          </a>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" className="social-button twitter-button">
                            <i className="fa fa-twitter"></i>
                            <p>108k</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
