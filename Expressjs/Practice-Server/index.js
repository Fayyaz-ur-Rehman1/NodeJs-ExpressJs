const express = require("express");
const reqFilter = require("./middleware/middleware");
const router = express.Router();
const app = express();
const all_data = require("./routes/route")
const port = 5500;

router.use(reqFilter);
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
app.use("/user", all_data);
app.listen(port, console.log(`Server is Started at Port No. ${port}`));