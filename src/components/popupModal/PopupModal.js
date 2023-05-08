import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import NyliaButton from "../nyliaButton/NyliaButton.js";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

import "./PopupModal.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TRIAL_TEMPLATE_ID = process.env.REACT_APP_TRIAL_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

function PopupModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const onSend = async (data) => {
    const { from_name, from_phone, from_email } = data;

    try {
      const templateParams = {
        from_name,
        from_phone,
        from_email,
      };
      await emailjs.send(
        SERVICE_ID,
        TRIAL_TEMPLATE_ID,
        templateParams,
        USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div id="modalClickButton">
        <NyliaButton
          handleClick={handleShow}
          label={"SCHEDULE A TRIAL CLASS"}
        ></NyliaButton>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SCHEDULE A TRIAL CLASS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="PopupModal">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="popupForm">
                    <form
                      id="popup-form"
                      onSubmit={handleSubmit(onSend)}
                      noValidate
                    >
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
                          {errors.from_name && (
                            <span className="errorMessage">
                              {errors.from_name.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <input
                            type="phone"
                            name="from_phone"
                            {...register("from_phone", {
                              required: true,
                              pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            })}
                            className="form-control formInput"
                            placeholder="Phone Number"
                          ></input>
                          {errors.from_phone && (
                            <span className="errorMessage">
                              Please enter a valid phone number
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
                          {errors.from_email && (
                            <span className="errorMessage">
                              Please enter a valid email address
                            </span>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer id="trial-class-modal-footer">
          <NyliaButton
            handleClick={handleSubmit(onSend)}
            label={"Send"}
          ></NyliaButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupModal;
