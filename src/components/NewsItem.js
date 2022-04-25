import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: 1 }}>
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={!imageUrl ? "https://static-ai.asianetnews.com/images/01ex190enhvgjx6w58489pyn48/7-png_1200x630xt.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem