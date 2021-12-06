import React from 'react';
import PropTypes from "prop-types";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import IconButton from '@material-ui/core/IconButton';
import dateFormat from 'dateformat';

export default class BookmarkButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bookmarked: props.bookmark,
        id: props.id,
        color: props.color || "yellow"
      };
    }
  
    render() {
      return (
        <>
          <Bookmark
            bookmarked={this.state.bookmarked}
            onClick={() => {
              const updatedBookmarked = this.state.bookmarked ? false : true;
              this.setState({ bookmarked: updatedBookmarked });
              if (updatedBookmarked) {
                // console.log(dateFormat("isoDate"));
                fetch(`https://zhuojunc-recipe-api.herokuapp.com/api/bookmark/${this.state.id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                      bookmark_date: dateFormat("isoDate")
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  })
                    .then((response) => response.json())                
              }
              else {
                fetch(`https://zhuojunc-recipe-api.herokuapp.com/api/unbookmark/${this.state.id}`, {
                    method: "PUT",
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  })
                    .then((response) => response.json()) 
              }
            }}
            renderUnbookmark={(onClick) => {
              return (
                <IconButton aria-label="unbookmark" onClick={onClick}>
                    <BookmarkBorderIcon style={{ color: this.state.color }} />
                </IconButton>
              );
            }}
            renderBookmark={(onClick) => {
              return (
                <IconButton aria-label="bookmark" onClick={onClick}>
                    <BookmarkIcon style={{ color: this.state.color }} />
                </IconButton>                
              );
            }}
          />
        </>
      );
    }
  }
  
  class Bookmark extends React.Component {
    render() {
      const { renderUnbookmark, renderBookmark, onClick, bookmarked } = this.props;
  
      return bookmarked ? renderBookmark(onClick) : renderUnbookmark(onClick);
    }
  }
  
  Bookmark.propTypes = {
    bookmarked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    renderUnbookmark: PropTypes.func.isRequired,
    renderBookmark: PropTypes.func.isRequired
  };

  BookmarkButton.propTypes = {
      bookmark: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
  };