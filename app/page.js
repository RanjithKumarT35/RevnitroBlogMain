"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`/api/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const searchPost = (e) => {
    if (e.type == "keydown" && e.key !== "Enter") {
      return;
    }
    setSearch(true);
    fetch(`/api/posts?q=${inputRef.current.value}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .finally(() => setSearch(false));
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />

      <div id="wrapper">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="page-wrapper">
                  <div className="blog-top clearfix">
                    <h4 className="pull-left">
                      Recent Blogs{" "}
                      <a href="#">
                        <i className="fa fa-rss"></i>
                      </a>
                    </h4>
                  </div>

                  <div className="blog-list clearfix">
                    {posts.map((post) => (
                      <Link key={post._id} href={"/post/" + post._id}>
                        <div className="blog-box row">
                          <div className="col-md-4">
                            <div className="post-media">
                              <a href="tech-single.html" title="">
                                <img
                                  src={post.image}
                                  alt=""
                                  className="img-fluid"
                                  id="ImageidborderRadisu"
                                />
                                <div className="hovereffect"></div>
                              </a>
                            </div>
                          </div>

                          <div className="blog-meta big-meta col-md-8">
                            <h4 className="marginleftforall">{post.title}</h4>
                            <p className="homePageDivstylecolor">
                              {post.short_description}
                            </p>

                            <small>
                              <a href="tech-single.html" title="">
                                {post.created_at_formatted}
                              </a>
                            </small>
                          </div>
                        </div>
                        <hr className="invis" />
                      </Link>
                    ))}
                  </div>
                </div>

                <hr className="invis" />
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget">
                    <h2 className="widget-title">Trending Videos</h2>
                    <div className="trend-videos">
                      <div className="blog-box">
                        <div className="post-media">
                          <a href="tech-single.html" title="">
                            <img src="" alt="" className="img-fluid" />
                            <div className="hovereffect">
                              <span className="videohover"></span>
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

                      <hr className="invis" />

                      <div className="blog-box">
                        <div className="post-media">
                          <a href="" title="">
                            <img src="" alt="" className="img-fluid" />
                            <div className="hovereffect">
                              <span className="videohover"></span>
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

                      <hr className="invis" />

                      <div className="blog-box">
                        <div className="post-media">
                          <a href="tech-single.html" title="">
                            <img src="" alt="" className="img-fluid" />
                            <div className="hovereffect">
                              <span className="videohover"></span>
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

                  <div className="widget">
                    <h2 className="widget-title">Follow Us</h2>

                    <div className="row text-center">
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <a href="#" className="social-button youtube-button">
                          <i class="fa fa-youtube-play" aria-hidden="true"></i>
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

                  <div className="widget">
                    <div className="banner-spot clearfix">
                      <div className="banner-img">
                        <img
                          src="Dodge Challenge.ico"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
