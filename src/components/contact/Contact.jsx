import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleSubmit = (_event) => {
    _event.preventDefault();
  };
  const handleFormChange = (e, field) => {
    setFormData(() => {
      return {
        ...formData,
        [field]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="contactSection">
        <Stack spacing={3}>
          <Stack className="title_text" spacing={1}>
            <Typography variant="h4">Get in Touch</Typography>
            <hr />
          </Stack>
          <Stack spacing={3}>
            <Stack direction="row" className="title_content">
              <div
                id="education"
                className="shadow-2xl rounded-2xl about_middle_items animate__animated animate__backInDown animate__slower 3s"
              >
                <form
                  className="contact-form"
                  onSubmit={(_event) => {
                    handleSubmit(_event);
                  }}
                >
                  <Stack spacing={3}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered"
                        value={formData.name}
                        onChange={(e) => {
                          handleFormChange(e, "name");
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered"
                        value={formData.email}
                        onChange={(e) => {
                          handleFormChange(e, "email");
                        }}
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea
                        type="text"
                        placeholder="Message"
                        className="input input-bordered"
                        value={formData.msg}
                        onChange={(e) => {
                          handleFormChange(e, "msg");
                        }}
                      />
                    </div>
                    <div class="form-control">
                      <button className="btn  gap-3">
                        Send
                        <LocalShippingIcon />
                      </button>
                    </div>
                  </Stack>
                </form>
              </div>
              <div
                id="experience"
                className="shadow-2xl invisible rounded-2xl about_middle_items animate__animated animate__backInDown animate__slower 3s"
              ></div>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default Contact;
