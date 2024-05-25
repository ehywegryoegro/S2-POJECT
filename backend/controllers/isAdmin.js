const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        console.log(req.user.role)
        return next();
    } else {
        return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
};

module.exports = isAdmin;
