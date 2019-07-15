
import { SAVE_COMMENT, FETCT_COMMENTS} from 'actions/types';
import axios from 'axios';

export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments(){
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCT_COMMENTS,
        payload: response
    };
}