const { sendMail } = require("../../middlewares/nodemailer");
const db = require("../../models");
const Blog = db.blog;

exports.createBlog = async (req, res) => {
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

   
    const result = await Blog.create(data);

  



    res.status(200).send({
      status: "Success",
      message: "Successfully blog create",
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

exports.getAllBlog = async (req, res) => {
  try {
    const result = await Blog.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Blog",
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


exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Blog.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No blog found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully create your blog",
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

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contact.update(req.body, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Contact found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Contact",
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
