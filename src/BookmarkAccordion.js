import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkIcon from './BookmarkIcon';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import dateFormat from 'dateformat';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const recipe = props.recipe;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={recipe.id}
        >
          <Typography className={classes.heading}>
            {recipe.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {recipe.body}
          </Typography>
        </AccordionDetails>
        <Grid container justifyContent="space-between">
            <Grid item>
              <Box sx={{ ml: 2, mt: 1 }}>
                <Typography>
                    {dateFormat(recipe.bookmark_date, "longDate")}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
                <Box sx={{ mb: 2}}>
                    <BookmarkIcon id={recipe.id} bookmark={recipe.bookmark} />
                </Box>
            </Grid>
        </Grid>        
      </Accordion>
    </div>
  );
}