import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {
  constructor() {
    super()
    console.log("I am constructor from NewsJs")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=63665a5156474eb2ae11e0e80da9d68c&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles, totalResults: parseData.totalResults,
      loading: false
    });
  }

  handlePreviousClick = async () => {
    console.log("prv clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=63665a5156474eb2ae11e0e80da9d68c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false

    })
  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      console.log("next clicked");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=63665a5156474eb2ae11e0e80da9d68c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false

      })
    }
  }
  render() {
    return (
      <div className="container my-6">
        <h1 className='text-center my-3'>NewMonkey Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 25) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>)
          })};
        </div>
        <div className="cantainer d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News