/* eslint-disable arrow-body-style */
const success = (payload) => {
    return {
        success: true,
        payload
    };
};

const error = (error) => {
    return {
        success: false,
        error: {
            ...error,
            message: error.message || '',
            code: error.code || ''
        }
    };
};

const ResponseHandler = {
    success,
    error
};

export default ResponseHandler;
