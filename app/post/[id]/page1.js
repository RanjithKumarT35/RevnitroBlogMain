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
      {post && (
        <div id="wrapper">
          <section class="section single-wrapper">
            <div class="container">
              <div class="row">
                <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                  <div class="page-wrapper">
                    <div class="blog-title-area text-center">
                      <h3>{post.title}</h3>

                      <div class="blog-meta big-meta">
                        <small>
                          <a href="tech-single.html" title="">
                            {post.created_at_formatted}
                          </a>
                        </small>
                      </div>
                    </div>

                    <div class="single-post-media">
                      <img src={post.image} alt="" class="img-fluid" />
                    </div>

                    <div class="blog-content">
                      <div class="pp">
                        <p>{post.description}</p>

                        <h3>
                          <strong>{post.title1}</strong>
                        </h3>

                        <p>{post.description1}</p>

                        <p>{post.description2}</p>
                      </div>

                      <img
                        src={post.image1}
                        alt=""
                        class="img-fluid img-fullwidth"
                      />

                      <div class="pp">
                        <h3>
                          <strong>{post.title2}</strong>
                        </h3>

                        <p>{post.description3}</p>

                        <p>{post.description4}</p>

                        <ul class="check">
                          <li>{post.description5}</li>
                          <li></li>
                          <li>{post.description6}</li>
                          <li>{post.description7}</li>
                          <li>{post.description8}</li>
                        </ul>

                        <p>{post.description9}</p>

                        <p>
                          <img
                            src={post.image2}
                            class="float-left"
                            width="380"
                            alt=""
                          />
                          {post.description10}
                        </p>

                        <h3>
                          <strong>{post.title3}</strong>
                        </h3>

                        <p>{post.description11}</p>

                        <p>
                          <img
                            src={post.image3}
                            class="float-right"
                            width="380"
                            alt=""
                          />
                          {post.description12}
                        </p>

                        <p>{post.description13}</p>
                      </div>
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

                          <div class="blog-meta">
                            <h4>
                              <a href="tech-single.html" title="">
                                We prepared the best 10 laptop presentations for
                                you
                              </a>
                            </h4>
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

                          <div class="blog-meta">
                            <h4>
                              <a href="tech-single.html" title="">
                                We are guests of ABC Design Studio - Vlog
                              </a>
                            </h4>
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

                          <div class="blog-meta">
                            <h4>
                              <a href="tech-single.html" title="">
                                Both blood pressure monitor and intelligent
                                clock
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget">
                      <h2 class="widget-title">Follow Us</h2>

                      <div class="row text-center">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" class="social-button facebook-button">
                            <i class="fa fa-facebook"></i>
                            <p>27k</p>
                          </a>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" class="social-button twitter-button">
                            <i class="fa fa-twitter"></i>
                            <p>98k</p>
                          </a>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" class="social-button google-button">
                            <i class="fa fa-google-plus"></i>
                            <p>17k</p>
                          </a>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <a href="#" class="social-button youtube-button">
                            <i class="fa fa-youtube"></i>
                            <p>22k</p>
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
