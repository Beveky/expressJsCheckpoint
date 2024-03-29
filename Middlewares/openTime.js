const path = require("path");

function openTime(req, res, next) {
  let currentDate = new Date();

  if (
    currentDate.getHours() > 8 &&
    currentDate.getHours() < 18 &&
    currentDate.getDay() > 0 &&
    currentDate.getDay() < 6
  ) {
    next();
  } else {
    res.sendFile(path.join(__dirname, "../", "views", "open.html"));
  }
}

module.exports = { openTime };
