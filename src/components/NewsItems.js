import React, { Component } from "react";

export class NewsItems extends Component {
  constructor() {
    super();

    this.state = {
      articles: this.articles,
    };
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="">
        <div className="mt-6 max-w-xs	p-4 rounded-md bg-neutral-100  min-h-120 max-h-120 hover:drop-shadow-xl ">
          <div className="text-right mb-2.5">
            <span class="bg-red-800 text-white text-sm  mr-2 px-2.5 py-0.5 rounded ">
              {source}
            </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGT4RPgNbEmg39qy5H93fSrSd27DpJNlMxw&usqp=CAU"
                : imageUrl
            }
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className=" object-cover object-center w-full h-40 "
          />
          <div className="overflow-y-scroll max-h-36 mt-2.5 mb-2.5  ">
            <h3 className=" font-semibold text-gray-900  ">
              <b> {title}.</b>
            </h3>
            <p
              className="text-base font-semibold text-gray-900 mb-2.5  "
              style={{ fontSize: ".9rem" }}
            >
              {description}..
            </p>
            <p className="mb-2.5 ">
              <small>
                By{" "}
                <i>
                  <b>{!author ? "Unknown" : author}</b>
                </i>
                on {new Date(date).toString()}
              </small>
            </p>
          </div>
          <div className="text-center p-5">
            <a
              href={newsUrl}
              target="_blank"
              className="py-2 px-4 bg-black hover:bg-gray-700  text-white rounded-md "
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
