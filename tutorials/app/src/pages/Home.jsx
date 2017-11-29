import React, { Component } from 'react';
import Menu from "../Menu";

import axios from "axios";

const API_KEY = "AIzaSyCcBuWsyPcUD-uRtruu0mwVCo1hW7hL4qU";
const BLOG_ID = "815911514800142909";
const URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`;

const client = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json"
    },
    params: {
    	key: API_KEY
    }
});

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentWillMount() {
    client.get('/posts', {
      params: {
        fetchImages: true,
        maxResults: 5
      }
    }).then((res) => {
      console.log(res.data.items);
      this.setState({posts: res.data.items, loading: false});
    });
  }

  render() {
    const {posts, loading} = this.state;
    return (
      <div>
        <Menu />
        <div>
          {loading && <p>Уншиж байна</p>}
          {posts && posts.map(({title, images}, index) => (
            <div key={index}>
              <img src={images[0].url} width="200px" />
              <h4>{title}</h4>
            </div>
          ))}

        </div>
      </div>
    );
  }
}
