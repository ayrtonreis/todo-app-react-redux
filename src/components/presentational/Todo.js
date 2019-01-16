import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  listItemText: {
      fontSize: '12px',
  },
    example: {
      width: 100,
    },
    prim: {
      fontSize: '12px',
      color: '#3b3f4c',
    },
    sec: {
        fontSize: '10px'
    },
    strikeThrough: {
      textDecoration: 'line-through'
    }
};

let Todo = ({
    onClick,
    completed,
    text,
    timestamp,
    classes: {listItemText: item, prim, sec, strikeThrough},
    // classes: myClasses,
    }) => {

    // const myClasses = classes;
    return (
    /*
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
    */

    <ListItem button
      onClick={onClick}
      style={{
          //textDecoration: completed ? 'line-through' : 'none',
          width: '50%',
          fontSize: '12px',
      }}
    >
        <ListItemText
            // classes={{primary: styles.listItemText}}
            // className={classes.listItemText}
            classes={{
                // root: listItemText,
                root: item,
                primary: prim + ' ' + (completed ? strikeThrough : ''),
                secondary: sec,
            }}
            primary={text}
            secondary={timestamp}
            style={{
                fontSize: '12px',
            }}
        />

    </ListItem>

    );
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

Todo = withStyles(styles)(Todo);

export default Todo