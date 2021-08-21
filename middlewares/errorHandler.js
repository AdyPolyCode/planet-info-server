// error handler middleware
export const errorHandler = (err, req, res, next) => {
    const errorStatus = err.statusCode
    const errorMessage = err.message

    res.status(errorStatus || 500).json({
        message: errorMessage || 'Internal Server Error'
    })
};