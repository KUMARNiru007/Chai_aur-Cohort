
class ApiError extends Error {
      /**
       * @param {number} statusCode
       * @param {string} message
       * @param {any[]} errors
       * @param {string} stack
       */
    constructor (
        statusCode, // 200 404
        message = "Something went wrong",
        error =[],
        stack="",
    )  {
        super(message);
        this.statusCode = statusCode;
        this.message= message;
        this.success = false;
        this.error = error;

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError} ;