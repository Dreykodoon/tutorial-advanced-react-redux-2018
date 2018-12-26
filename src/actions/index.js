import {SAVE_COMMENTS} from './types';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENTS,
        payload: comment
    };
}
