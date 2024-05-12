const { sendMail } = require("../../middlewares/nodemailer");
const db = require("../../models");
const BlogDetails = db.blogDetails;

exports.createBlogDetails = async (req, res) => {
  try {
    const {
    category,
      title,
      content

    } = req.body;

    const data = {
    category,
    title,
    content,
    image: req.file ? req.file.path || "" : "",
    };

   
    const result = await BlogDetails.create(data);

  



    res.status(200).send({
      status: "Success",
      message: "Successfully BlogDetails create",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.getAllBlogDetails = async (req, res) => {
  try {
    const result = await BlogDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all BlogDetails",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.deleteBlogDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await BlogDetails.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No BlogDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully create your BlogDetails",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.updateBlogDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await BlogDetails.update(req.body, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No BlogDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your BlogDetails",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
