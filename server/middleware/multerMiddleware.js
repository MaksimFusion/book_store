const multer = require("multer");
const uuid = require("uuid");

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "../static/user");
    },
    filename(req, file, cb) {
        let fileName = "user_avatar_" + uuid.v4() + "_" + file.filename;
        cb(null, fileName);
    },
});

const types = ["image/png", "image/jpeg", "image/jpg"];

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = multer({ storage, fileFilter });