import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalStorageService from "../Services/LocalStorageService";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {PostContext} from "../context/post/postContext";
import {PostService} from "../Services/PostService";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import axios from "axios";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Home = () => {
    const {getPosts, posts} = useContext(PostContext);
    const classes = useStyles();
    const [text, textChangeHandler] = useState('');

    useEffect(() => {
        getPosts()
    }, []);

    const addPostHandler = () => {
        const date = new Date();
        const userId = LocalStorageService.getIdUser();
        const post = {date, text, userId};
        PostService.AddPost(post).then(res => {
            if (res.status === 201) {
                getPosts();
                textChangeHandler('')
            }
        })
    };

    const deletePostHandler = (id) => {
        PostService.removePost(id).then(res => {
            if (res.status === 200) {
                getPosts();
            }
        })
    };



    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <TextField
                            type="text"
                            multiline
                            value={text}
                            onChange={({target: {value}}) => textChangeHandler(value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={addPostHandler}
                        >Post</Button>
                    </Paper>
                    <Paper elevation={9} style={{marginTop: 20}}>
                        {posts ? (posts.map(post => (
                            <ul key={post.id}>
                                <li>
                                    <div style={{display: 'flex'}}>
                                        <span>{post.date}</span>
                                    </div>
                                    <p>{post.text}</p>
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="delete" onClick={() => deletePostHandler(post.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </li>
                            </ul>
                        ))): <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aliquid assumenda blanditiis cumque cupiditate deleniti ducimus eligendi esse, minima nobis, officia porro quisquam repellat sequi tempora ullam voluptate voluptates.</p>}

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={9}>Inform List</Paper>
                </Grid>
            </Grid>
        </div>
    );
};
