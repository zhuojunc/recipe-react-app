import React from "react";
import Accordion from "./Accordion";
import AddButton from "./AddButton";

export default class Breakfast extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          recipes: []
        };
    }

    componentDidMount() {
        document.title = "Recipe App | Lunch";

        fetch("https://zhuojunc-recipe-api.herokuapp.com/api/category", {
            method: "POST",
            body: JSON.stringify({
              "category": "lunch"
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
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
                      <Accordion recipe={recipe} />
                    )
                })}
                <AddButton category="lunch" />
            </>
        );
    }
}