import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import NyliaButton from "../nyliaButton/NyliaButton.js";

import "react-toastify/dist/ReactToastify.min.css";

import "./ContactForm.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { from_name, from_email, message } = data;

    console.log("Name: ", from_name);
    console.log("Email: ", from_email);
    console.log("Message: ", message);

    try {
      const templateParams = {
        from_name,
        from_email,
        message,
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="from_name"
                      {...register("from_name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="email"
                      name="from_email"
                      {...register("from_email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <NyliaButton
                  label={"Send"}
                  handleClick={handleSubmit(onSubmit)}
                ></NyliaButton>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
