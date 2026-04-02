class apiError extends Error {
    constructor(
        statusCode, 
        message = "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.errors = errors
        //this.stack = stack
        this.data = null
        this.success = false
        this.message = message

        if(stack){
            this.stack = statck
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
        
        
    }
}
export {apiError}

//