function defaultResponseModel(message) {
    let error = {
        message: "Mock Not Found",
        debugMessage: message
    }

    return JSON.stringify(error)
}
