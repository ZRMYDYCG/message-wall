import request  from "@/utils/request"

enum API {
    INSERT_WALL = '/api/insertWall',
    INSERT_FEEDBACK = '/api/insertFeedback',
    INSERT_COMMENT = '/api/insertComment',
    DELETE_WALL = '/api/deleteWall',
    DELETE_FEEDBACK = '/api/deleteFeedback',
    DELETE_COMMENT = '/api/deleteComment',
    GET_WALLS = '/api/getWalls',
    GET_COMMENTS = '/api/getComments'
}

export const insertWall = (data: any) => {
    return request.post(API.INSERT_WALL, data);
};

export const insertFeedback = (data: any) => {
    return request.post(API.INSERT_FEEDBACK, data);
};

export const insertComment = (data: any) => {
    return request.post(API.INSERT_COMMENT, data);
};

export const deleteWall = (data: any) => {
    return request.post(API.DELETE_WALL, data);
};

export const deleteFeedback = (data: any) => {
    return request.post(API.DELETE_FEEDBACK, data);
};

export const deleteComment = (data: any) => {
    return request.post(API.DELETE_COMMENT, data);
};

export const getWalls = (data: any) => {
    return request.post(API.GET_WALLS, data);
};

export const getComments = (data: any) => {
    return request.post(API.GET_COMMENTS, data);
};
