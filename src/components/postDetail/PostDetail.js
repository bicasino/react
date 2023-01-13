import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Searchbar from "../searchbar/Searchbar";
import Menuleft from "../../components/leftside/Menuleft";

const PostDetail = () => {
  const [data, setData] = useState(null);

  //   const {id, name, detail, author, dateCreated} = item;

  const params = useParams();

  let { postId } = params;

  useEffect(() => {
    axios.get(`https://it.vnpost.vn/api/v2/News/${postId}`).then((resp) => {
      setData(resp.data);
    });
  }, []);

  // console.log(data);

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
              <Link to="/">VNPOST-IT</Link>
              <span className="divider">/</span>
            </li>
            <li className="current-parent breadcrumb-truncate">
              <Link to="/posts">TIN TỨC</Link>
            </li>
          </ul>
          <div className="row">
            <Menuleft />
            <div className="col-sm-9">
              <div className="portlet-body">
                <div className="container">
                  {data ? <h1>{data.name}</h1> : "Loading..."}
                  {data ? <p>{data.dateCreated}</p> : ""}
                  {data ? parse(data.detail) : ""}
                  <div>{data ? <p>{data.author}</p> : ""}</div>
                  {/* {data.author && <h1>{data?.author}</h1>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostDetail;
