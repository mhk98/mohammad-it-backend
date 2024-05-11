const { sendMail } = require("../../middlewares/nodemailer");
const db = require("../../models");
const Contact = db.contact;

exports.createContact = async (req, res) => {
  try {
    const {
      mailAddress,
      mailerName,
      mailerSubject,
      mailerMessage,
      senderPhone,
    } = req.body;

    const data = {
      mailAddress,
      mailerName,
      mailerSubject,
      mailerMessage,
      senderPhone,
    };

    console.log("createContact", data);
    // Create contact in the database
    const result = await Contact.create(data);

    // Send email
    const sendingEmail = await sendMail(
      mailAddress,
      mailerName,
      mailerSubject,
      mailerMessage
    );

    console.log("sendingEmail", sendingEmail);

    res.status(200).send({
      status: "Success",
      message: "Successfully created Contact and sent email",
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

exports.getAllContact = async (req, res) => {
  try {
    const result = await Contact.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Contact",
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
exports.singleContact = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contact.findOne({
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
      message: "Successfully got your Contact",
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
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Contact.destroy({
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
      message: "Successfully delete your Contact",
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

exports.updateContact = async (req, res) => {
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
