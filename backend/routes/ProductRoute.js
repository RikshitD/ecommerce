const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
  .delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
  .get(getSingleProduct);

  router.route("/product/review").post(isAuthenticatedUser,createProductReview);
  router.route("/reviews").get(getSingleProductReviews).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteReview);
  
module.exports = router;