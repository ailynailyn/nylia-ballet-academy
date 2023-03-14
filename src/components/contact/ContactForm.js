import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import Swal from "sweetalert2";
// import "semantic-ui-css/semantic.min.css";

import "./ContactForm.css";

// TODO ALERT TODO
// REPLACE AND USE SECURE VERSION
const SERVICE_ID = "service_eqgxmk6";
const TEMPLATE_ID = "template_u02r3g8";
const USER_ID = "MFoKWw-wL0LTyJWTw";

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
    // console.log('Subject: ', subject);
    console.log("Message: ", message);

    try {
      const templateParams = {
        from_name,
        from_email,
        message,
      };
      await emailjs.send(
        // todo: add to a env file for security
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        // templateParams,
        // process.env.REACT_APP_USER_ID
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
  //       (result) => {
  //         console.log(result.text);
  //         Swal.fire({
  //           icon: "success",
  //           title: "Message Sent Successfully",
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Ooops, something went wrong",
  //           text: error.text,
  //         });
  //       }
  //     );
  //     e.target.reset();
  //   };

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
                  <div className="col-6">
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
                  <div className="col-6">
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
                {/* Row 2 of form */}
                {/* <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div> */}
                {/* Row 3 of form */}
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
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    // <div className="contact-form">
    //   <Form onSubmit={handleOnSubmit}>
    //     <Form.Field
    //       id="form-input-control-email"
    //       control={Input}
    //       label="Email"
    //       name="user_email"
    //       placeholder="Email…"
    //       required
    //       icon="mail"
    //       iconPosition="left"
    //     />
    //     <Form.Field
    //       id="form-input-control-last-name"
    //       control={TextArea}
    //       label="Name"
    //       name="from_name"
    //       placeholder="Name…"
    //       required
    //       icon="user circle"
    //       iconPosition="left"
    //     />
    //     <Form.Field
    //       id="form-textarea-control-opinion"
    //       control={TextArea}
    //       label="Message"
    //       name="message"
    //       placeholder="Message…"
    //       required
    //     />
    //     <Button type="submit" color="#2342j3">
    //       Submit
    //     </Button>
    //   </Form>
    // </div>
  );
}

export default ContactForm;
