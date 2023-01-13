import React, { useState, useEffect } from "react";
import Menuleft from "../../components/leftside/Menuleft";
import News from "../../components/news/News";
import Searchbar from "../../components/searchbar/Searchbar";
// import { PostService } from "../../service/PostService";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState([]);
  const [index, setIndex] = useState(0);
  // const postService = new PostService();

  // postService.getAll();
  const onPrev = () => {
    setIndex(index - 8);
  };
  const onNext = () => {
    setIndex(index + 8);
  };

  useEffect(() => {
    //   postService.getAll().then((data) => setPost(data));
    // }, []);
    axios
      .get(`https://it.vnpost.vn/api/v1/News?menuId=3&skip=${index}&take=8`)
      .then((resp) => {
        setPost(resp.data);
      });
  }, [index]);
  return (
    <main>
      <Searchbar />
      <section className="content">
        <div className="container">
          <ul
            aria-label="Đường dẫn liên kết (breadcrumb)"
            className="breadcrumb breadcrumb-horizontal"
          >
            <li className="first breadcrumb-truncate">
              <a href="/">VNPOST-IT</a>
              <span className="divider">/</span>
            </li>
            <li className="current-parent breadcrumb-truncate">
              <a href="/posts">TIN TỨC</a>
            </li>
          </ul>
          <div className="row">
            <Menuleft />
            <div className="col-sm-9">
              <div className="portlet-body">
                <div className="container">
                  {post &&
                    post.map((item, index) => <News item={item} key={index} />)}
                  <br />
                </div>
              </div>
            </div>
          </div>
          <button
            className="news-btn-prev"
            style={{
              padding: "5px 10px",
              border: "none",
              background: "#fdb813",
              color: "white",
              margin: "0 10px 10px 20px",
              borderRadius: "10px",
              float: "center",
            }}
            onClick={() => onPrev()}
            disabled={index === 0 ? true : false}
          >
            Prev
          </button>
          <button
            className="news-btn-next"
            style={{
              padding: "5px 10px",
              background: "#fdb813",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
            onClick={() => onNext()}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Post;