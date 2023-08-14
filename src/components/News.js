import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types'




export class News extends Component {
  articles=[]
  // static defaultProps = {
  //  country : 'in',
  // //  pageSize: 5,
  //  category:'general'
  // }
  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
   }

   capitalizeFirstLetter =(string)=>{
    return string[0].toUpperCase()+string.slice(1).toLowerCase();
   }
  
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page:1
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-  NewsIndia`
  }
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad1f04685a04383a28491dbb3769c7a&page=1pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }


  handelPrevClick = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad1f04685a04383a28491dbb3769c7a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };



  handelNextClick = async () => {
    console.log("nextClick")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cad1f04685a04383a28491dbb3769c7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {  
    return (
      <div className="container my-3 m-auto ">
        <h1 className="text-center  text-3xl py-5"><b>NewsIndia - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</b></h1>
        <div className="flex flex-wrap px-8 gap-10 drop-shadow-2xl justify-center ">
          {this.state.articles.map((element) => {
            return (
              <div className="inline-block justify-center" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
       
        <div className="flex justify-center gap-4 py-5">
          <div>
            <button
              onClick={this.handelPrevClick}
              disabled={this.state.page<=1}
              type="button"
              className="  border-2 rounded-xl	bg-black	px-4 py-2 text-white"
            >
              &larr;Preview
            </button>
          </div>
          <div>
            <button
              onClick={this.handelNextClick}
              type="button"
              className="  border-2 rounded-xl	bg-black	px-4 py-2 text-white"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default News;
