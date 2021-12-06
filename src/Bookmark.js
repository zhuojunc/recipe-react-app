import React from "react";
import BookmarkAccordion from "./BookmarkAccordion";

export default class Breakfast extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          recipes: []
        };
    }

    componentDidMount() {
        document.title = "Recipe App | Bookmark";
        fetch("https://zhuojunc-recipe-api.herokuapp.com/api/bookmark")
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                recipes: json
              });
            });
    }
    
    render() {
        return (
            <>
                {this.state.recipes.map((recipe) => {
                    return (
                      <BookmarkAccordion recipe={recipe} />
                    )
                })}
            </>
        );
    }
}