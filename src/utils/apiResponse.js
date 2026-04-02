class ApiResponse {
    constructor(
        message = "Success",
        statuscode,
        data
    ) {
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.success = statuscode 
    }
}