// controller for "/welcome" URL
export const getPlanets = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: null
        })
    } catch (error) {
        next(error)
    }
};