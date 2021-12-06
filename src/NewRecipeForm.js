import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useLocation, useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categories = [
    {
      value: 'breakfast',
      label: 'breakfast',
    },
    {
      value: 'lunch',
      label: 'lunch',
    },
    {
      value: 'dinner',
      label: 'dinner',
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function EditRecipeForm(props) {

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [errorTitleMsg, setErrorTitleMsg] = useState('');
  const [errorBodyMsg, setErrorBodyMsg] = useState('');
  const [errorCategoryMsg, setErrorCategoryMsg] = useState('');
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    document.title = "Recipe App | New";  

    if (location.pathname === "/new/breakfast") {
        setCategory("breakfast");
    }
    else if (location.pathname === "/new/lunch") {
        setCategory("lunch");
    }
    else if (location.pathname === "/new/dinner") {
        setCategory("dinner");
    }
  }, [])
  
  useEffect(() => {
    if (!title) {
        setErrorTitleMsg("Title cannot be empty");
    }
    else {
        setErrorTitleMsg("");
    }
    
    if (!body) {
        setErrorBodyMsg("Body cannot be empty");
    }
    else {
        setErrorBodyMsg("");
    } 
    
    if (!category) {
        setErrorCategoryMsg("Category must be selected");
    }
    else {
        setErrorCategoryMsg("");
    }    
  }, [title, body, category])

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {    
    setBody(event.target.value);
  };

  const handleCategoryChange = (event) => {
      setCategory(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://zhuojunc-recipe-api.herokuapp.com/api/recipes", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        category: category,
        bookmark: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        setTitle("");
        setBody("");

        toast.success(`Recipe for "${json.title}" was successfully created`);
        history.push("/");        
        });
    };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
            required
            error={!!errorTitleMsg}
            id="title"
            label="Title"
            value={title}
            // defaultValue={title}
            helperText={errorTitleMsg}
            onChange={handleTitleChange}
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
          required
          error={!!errorCategoryMsg}
          id="category"
          select
          label="Category"
          value={category}
        //   defaultValue={recipe && recipe.category}
          onChange={handleCategoryChange}
          helperText="Please select recipe category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          required
          error={!!errorBodyMsg}
          id="body"
          label="Body"
          multiline
          rows={10}
          value={body}
        //   defaultValue={body}
          helperText={errorBodyMsg}
          onChange={handleBodyChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <Button variant="outlined">
            <Input type="submit" disabled={(!!errorBodyMsg) || (!!errorTitleMsg) || (!!errorCategoryMsg)}>
                Save
            </Input>
        </Button>
      </div>
    </form>
  );
}