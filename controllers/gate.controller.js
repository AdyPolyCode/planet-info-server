// controller for "/" URL
export const getGate = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: null
        })
    } catch (error) {
        next(error)
    }
};