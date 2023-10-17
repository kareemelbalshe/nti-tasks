class helper{
    static resGenerator = (res, statusCode, apiStatus, data, message) =>{
        res.status(statusCode).send({ apiStatus, data, message })
    }
}
module.exports = helper