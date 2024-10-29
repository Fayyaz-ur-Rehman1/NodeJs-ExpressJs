const getAllProduct = (req, res) => {
    res.status(200).json({ massage: "I am get all Products" });
}

const getAllProductTesting = (req, res) => {
    res.status(200).json({ massage: "I am get all Testing Products" });
}

module.exports = { getAllProduct, getAllProductTesting }