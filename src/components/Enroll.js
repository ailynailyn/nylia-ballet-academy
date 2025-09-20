import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import NyliaButton from "./nyliaButton/NyliaButton.js";

import TuitionPackages from "../assets/enrollPage/TuitionPackages.pdf";
import AcademyEtiquette from "../assets/enrollPage/AcademyEtiquette.pdf";
import AcademyUniform from "../assets/enrollPage/Academy Uniform.pdf";
import Handbook from "../assets/enrollPage/NyliaBalletAcademyHandbook2024.pdf";
import Footer from "../components/Footer";
import Accordion from "react-bootstrap/Accordion";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

import "./Enroll.css";
import "./NyliaStyles/Nylia.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TRIAL_TEMPLATE_ID = process.env.REACT_APP_TRIAL_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

function Enroll() {
  // USED FOR YOUTH CURRICULUM TRIAL FORM
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // USED FOR ADULT BALLET TRIAL FORM
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm();

  // USED FOR PRE-BALLET TRIAL FORM
  const {
    register: registerPreBalletTrial,
    handleSubmit: handleSubmitPreBalletTrial,
    reset: resetPreBalletTrial,
    formState: { errors: errorsPreBalletTrial },
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

  // For PRE-BALLET CURRICULUM trial template message
  const onSendPreBalletCurriculumTrial = async (data) => {
    const {
      pre_ballet_trial_name,
      pre_ballet_trial_age,
      pre_ballet_trial_phone,
      pre_ballet_trial_email,
      pre_ballet_trial_pref_communication,
    } = data;

    console.log(data);

    try {
      const templateParams = {
        pre_ballet_trial_name,
        pre_ballet_trial_age,
        pre_ballet_trial_phone,
        pre_ballet_trial_email,
        pre_ballet_trial_pref_communication,
      };
      console.log(templateParams);
      await emailjs.send(
        SERVICE_ID,
        TRIAL_TEMPLATE_ID,
        templateParams,
        USER_ID
      );
      resetPreBalletTrial();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  // For YOUTH CURRICULUM trial template message
  const onSendYouthCurriculumTrial = async (data) => {
    const {
      youth_ballet_trial_name,
      youth_ballet_trial_age,
      youth_ballet_trial_phone,
      youth_ballet_trial_email,
      pref_communication,
      studied_ballet,
      studied_pointe,
    } = data;

    console.log(data);

    try {
      const templateParams = {
        youth_ballet_trial_name,
        youth_ballet_trial_age,
        youth_ballet_trial_phone,
        youth_ballet_trial_email,
        pref_communication,
        studied_ballet,
        studied_pointe,
      };
      console.log(templateParams);
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

  // For ADULT BALLET trial
  const onSendAdultBalletTrial = async (data) => {
    const {
      adult_ballet_trial_name,
      adult_ballet_trial_phone,
      adult_ballet_trial_email,
      adult_ballet_trial_pref_communication,
      adult_ballet_trial_studied_ballet,
      adult_ballet_checked_trial_request,
    } = data;

    try {
      const templateParams = {
        adult_ballet_trial_name,
        adult_ballet_trial_phone,
        adult_ballet_trial_email,
        adult_ballet_trial_pref_communication,
        adult_ballet_trial_studied_ballet,
        adult_ballet_checked_trial_request,
      };
      await emailjs.send(
        SERVICE_ID,
        TRIAL_TEMPLATE_ID,
        templateParams,
        USER_ID
      );
      reset2();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="main-container">
      <div className="main-img-bkg" id="enroll-section">
        <div className="main-title">
          <h1>ENROLLMENT</h1>
        </div>
        <div className="main-box">
          <p>
            <b>CURRENTLY ACCEPTING NEW STUDENTS!</b>
            <br />
            <br />
            Interested in trying a class? We are thrilled to offer your first
            class at Nylia Ballet Academy for FREE! Message us today to schedule
            your free trial class and secure your spot at Nylia Ballet Academy!
          </p>
          <a
            id="enrollment-page-button"
            href="/classes"
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Nylia Ballet Academy Classes"
          >
            <NyliaButton
              // handleClick={() => setClassInfo("preBallet1")}
              label={"Our Classes"}
            ></NyliaButton>
          </a>
        </div>
      </div>
      <div className="main-bkg freetrial-section" id="academy-freetrial">
        <div className="main-box">
          <h1 id="highlightTitle">TRY YOUR FIRST CLASS - FREE!</h1>
          <br />
          <p>
            Ready to explore a class and find the perfect fit for you? Signing
            up for a free trial is easy—just follow these simple steps:
            <br></br>
            <br></br>
            <ul>
              1. <b>Choose your training path</b> - Select the class or program
              you're interested in.
              <br></br>
              2. <b>Fill out the form below</b> – Provide your details and any
              preferences to help us understand your experience and goals.
              <br></br>
              3. <b>Submit your information </b>– Once you've filled out the
              form, click "Submit."<br></br>
              4. <b>We'll contact you </b>– Once we receive your details, we’ll
              recommend the class that aligns best with your experience and
              skills. Then, we’ll work with you to schedule your free trial.
              <br />
              <br />
            </ul>
            It’s that simple! Take the first step toward discovering the ideal
            class for you. We’re excited to help you get started!
          </p>
          <div className="shadow-box">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b id="highlightTitle">PRE-BALLET CLASSES</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Our Pre-Ballet Program is more than just an introduction to
                    dance—it's a journey that fosters imagination, builds
                    confidence, and develops coordination in a fun and
                    supportive environment. Tailored for children aged 4–6,
                    these classes provide the perfect foundation for a lifelong
                    love of movement and artistry. <br />
                    <br />
                    Your little dancer will gain:
                    <ul>
                      <li>Improved motor skills and balance</li>
                      <li>A boost in self-esteem and social skills</li>
                      <li>A joyful introduction to music and rhythm</li>
                    </ul>
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 text-center">
                        <form
                          method="post"
                          action="youth"
                          id="pre-ballet-trial-form"
                          onSubmit={handleSubmitPreBalletTrial(
                            onSendPreBalletCurriculumTrial
                          )}
                          noValidate
                          name="pre-ballet-trial-form"
                        >
                          <div className="row formRow">
                            <div className="row formRow">
                              <div className="col">
                                <p>
                                  Give your child the gift of dance and watch
                                  them blossom! Complete the form below, and our
                                  team will schedule your little dancer's first
                                  trial class to start their ballet journey!
                                </p>
                              </div>
                            </div>
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="text"
                                name="pre_ballet_trial_name"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_name",
                                  {
                                    required: {
                                      value: true,
                                      message: "Please enter the dancer's name",
                                    },
                                    maxLength: {
                                      value: 30,
                                      message:
                                        "Please use 30 characters or less",
                                    },
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Dancer's Name"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_name && (
                                <span className="errorMessage">
                                  {
                                    errorsPreBalletTrial.pre_ballet_trial_name
                                      .message
                                  }
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="text"
                                name="pre_ballet_trial_age"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_age",
                                  {
                                    required: {
                                      value: true,
                                      message: "Please enter the dancer's age",
                                    },
                                    maxLength: {
                                      value: 30,
                                      message:
                                        "Please use 30 characters or less",
                                    },
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Dancer's Age"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_age && (
                                <span className="errorMessage">
                                  {
                                    errorsPreBalletTrial.pre_ballet_trial_age
                                      .message
                                  }
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="phone"
                                name="pre_ballet_trial_phone"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_phone",
                                  {
                                    required: true,
                                    pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Phone Number"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_phone && (
                                <span className="errorMessage">
                                  Please enter a valid phone number
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="email"
                                name="pre_ballet_trial_email"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_email",
                                  {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Email address"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_email && (
                                <span className="errorMessage">
                                  Please enter a valid email address
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Select your preferred form of communication:
                              </p>

                              <select
                                class="form-control"
                                id="pre_ballet_trial_pref_communication"
                                name="pre_ballet_trial_pref_communication"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_pref_communication"
                                )}
                              >
                                <option>Email</option>
                                <option>Call</option>
                                <option>Text</option>
                              </select>
                            </div>
                          </div>
                          <NyliaButton
                            handleClick={handleSubmitPreBalletTrial(
                              onSendPreBalletCurriculumTrial
                            )}
                            label={"Submit"}
                          ></NyliaButton>
                        </form>
                      </div>
                      <ToastContainer />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b id="highlightTitle">YOUTH CLASSICAL BALLET CLASSES</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Ready to take the first step into the world of classical
                    ballet? Schedule your free trial class with us and
                    experience our youth ballet training curriculum designed for
                    dancers ages 8 and up. At Nylia Ballet Academy, we place
                    students in classes based on skill and experience—not just
                    age—to ensure the best learning environment for every
                    dancer.
                    <br />
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 text-center">
                        <form
                          method="post"
                          action="youth"
                          id="youth-ballet-trial-form"
                          onSubmit={handleSubmit(onSendYouthCurriculumTrial)}
                          noValidate
                          name="youth-ballet-trial-form"
                        >
                          <div className="row formRow">
                            <div className="row formRow">
                              <div className="col">
                                <p>
                                  To help us find the perfect class for your
                                  free trial, please let us know:
                                </p>
                              </div>
                            </div>
                            <div className="col">
                              <input
                                form="youth-ballet-trial-form"
                                type="text"
                                name="youth_ballet_trial_name"
                                {...register("youth_ballet_trial_name", {
                                  required: {
                                    value: true,
                                    message: "Please enter the dancer's name",
                                  },
                                  maxLength: {
                                    value: 30,
                                    message: "Please use 30 characters or less",
                                  },
                                })}
                                className="form-control formInput"
                                placeholder="Dancer's Name"
                              ></input>
                              {errors.youth_ballet_trial_name && (
                                <span className="errorMessage">
                                  {errors.youth_ballet_trial_name.message}
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                form="youth-ballet-trial-form"
                                type="text"
                                name="youth_ballet_trial_age"
                                {...register("youth_ballet_trial_age", {
                                  required: {
                                    value: true,
                                    message: "Please enter the dancer's age",
                                  },
                                  maxLength: {
                                    value: 30,
                                    message: "Please use 30 characters or less",
                                  },
                                })}
                                className="form-control formInput"
                                placeholder="Dancer's Age"
                              ></input>
                              {errors.youth_ballet_trial_age && (
                                <span className="errorMessage">
                                  {errors.youth_ballet_trial_age.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <input
                                form="youth-ballet-trial-form"
                                type="phone"
                                name="youth_ballet_trial_phone"
                                {...register("youth_ballet_trial_phone", {
                                  required: true,
                                  pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                })}
                                className="form-control formInput"
                                placeholder="Phone Number"
                              ></input>
                              {errors.youth_ballet_trial_phone && (
                                <span className="errorMessage">
                                  Please enter a valid phone number
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                form="youth-ballet-trial-form"
                                type="email"
                                name="youth_ballet_trial_email"
                                {...register("youth_ballet_trial_email", {
                                  required: true,
                                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                })}
                                className="form-control formInput"
                                placeholder="Email address"
                              ></input>
                              {errors.youth_ballet_trial_email && (
                                <span className="errorMessage">
                                  Please enter a valid email address
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Select your preferred form of communication:
                              </p>

                              <select
                                class="form-control"
                                id="prefCommunication1"
                                name="pref_communication"
                                {...register("pref_communication")}
                              >
                                <option>Email</option>
                                <option>Call</option>
                                <option>Text</option>
                              </select>
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Has the dancer studied ballet before? If so,
                                where and how long?
                              </p>
                              <input
                                form="youth-ballet-trial-form"
                                type="text"
                                name="studied_ballet"
                                {...register("studied_ballet", {
                                  required: {
                                    value: true,
                                    message:
                                      "Please enter the dancer's ballet experience",
                                  },
                                  maxLength: {
                                    value: 150,
                                    message:
                                      "Please use 150 characters or less",
                                  },
                                })}
                                className="form-control formInput"
                                placeholder=""
                              ></input>
                              {errors.studied_ballet && (
                                <span className="errorMessage">
                                  {errors.studied_ballet.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>Are they on pointe? If so, for how long?</p>
                              <input
                                form="youth-ballet-trial-form"
                                type="text"
                                name="studied_pointe"
                                {...register("studied_pointe", {
                                  required: {
                                    value: true,
                                    message:
                                      "Please enter the dancer's pointe experience",
                                  },
                                  maxLength: {
                                    value: 150,
                                    message:
                                      "Please use 150 characters or less",
                                  },
                                })}
                                className="form-control formInput"
                                placeholder=""
                              ></input>
                              {errors.studied_pointe && (
                                <span className="errorMessage">
                                  {errors.studied_pointe.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <NyliaButton
                            handleClick={handleSubmit(
                              onSendYouthCurriculumTrial
                            )}
                            label={"Submit"}
                          ></NyliaButton>
                        </form>
                      </div>
                      <ToastContainer />
                    </div>
                    {/* </div> */}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b id="highlightTitle">ADULT BALLET CLASSES</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Whether you're a complete beginner or an experienced dancer
                    looking to refine your technique, our ballet classes are
                    designed for adults of all levels—from beginner to advanced.
                    We also offer specialized pointe and men's classes to help
                    you grow as a dancer.
                    <br />
                    <br />
                    Fill out the form below, and we'll contact you to recommend
                    the perfect class based on your experience and goals. Let's
                    make your ballet dreams a reality—no matter your age or
                    skill level!
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 text-center">
                        <form
                          method="post"
                          action="adult"
                          id="adult-ballet-trial-form"
                          onSubmit={handleSubmit2(onSendAdultBalletTrial)}
                          noValidate
                          name="adult-ballet-trial-form"
                        >
                          <div className="row formRow">
                            <div className="row formRow">
                              <div className="col">
                                <p>
                                  To help us find the perfect class for your
                                  free trial, please let us know:
                                </p>
                              </div>
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                name="adult_ballet_trial_name"
                                form="adult-ballet-trial-form"
                                {...register2("adult_ballet_trial_name", {
                                  required: {
                                    value: true,
                                    message: "Please enter the dancer's name",
                                  },
                                  maxLength: {
                                    value: 30,
                                    message: "Please use 30 characters or less",
                                  },
                                })}
                                className="form-control formInput"
                                placeholder="Dancer's Name"
                              ></input>
                              {errors2.adult_ballet_trial_name && (
                                <span className="errorMessage">
                                  {errors2.adult_ballet_trial_name.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="row formRow">
                            <div className="col">
                              <input
                                type="phone"
                                name="adult_ballet_trial_phone"
                                {...register2("adult_ballet_trial_phone", {
                                  required: true,
                                  pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                })}
                                className="form-control formInput"
                                placeholder="Phone Number"
                              ></input>
                              {errors2.adult_ballet_trial_phone && (
                                <span className="errorMessage">
                                  Please enter a valid phone number
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                type="email"
                                name="adult_ballet_trial_email"
                                {...register2("adult_ballet_trial_email", {
                                  required: true,
                                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                })}
                                className="form-control formInput"
                                placeholder="Email address"
                              ></input>
                              {errors2.adult_ballet_trial_email && (
                                <span className="errorMessage">
                                  Please enter a valid email address
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Select your preferred form of communication:
                              </p>

                              <select
                                class="form-control"
                                id="prefCommunication2"
                                name="adult_ballet_trial_pref_communication"
                                {...register2(
                                  "adult_ballet_trial_pref_communication"
                                )}
                              >
                                <option>Email</option>
                                <option>Call</option>
                                <option>Text</option>
                              </select>
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Have you ever studied ballet before? If so,
                                where and how long?
                              </p>
                              <input
                                type="text"
                                name="adult_ballet_trial_studied_ballet"
                                {...register2(
                                  "adult_ballet_trial_studied_ballet",
                                  {
                                    required: {
                                      value: true,
                                      message:
                                        "Please enter the dancer's ballet experience",
                                    },
                                    maxLength: {
                                      value: 150,
                                      message:
                                        "Please use 150 characters or less",
                                    },
                                  }
                                )}
                                className="form-control formInput"
                                placeholder=""
                              ></input>
                              {errors2.adult_ballet_trial_studied_ballet && (
                                <span className="errorMessage">
                                  {
                                    errors2.adult_ballet_trial_studied_ballet
                                      .message
                                  }
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Please select the class you'd like to try for
                                your free trial:
                              </p>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="adult_ballet_checked_trial_request"
                                  {...register2(
                                    "adult_ballet_checked_trial_request",
                                    {
                                      required: "Please select a class",
                                    }
                                  )}
                                  value="beg_adult_trial_request"
                                  id="beg_adult_trial_request"
                                />
                                <label
                                  class="form-check-label"
                                  for="beg_adult_trial_request"
                                >
                                  Beginner Adult Ballet
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="adult_ballet_checked_trial_request"
                                  {...register2(
                                    "adult_ballet_checked_trial_request"
                                  )}
                                  value="int_adult_trial_request"
                                  id="int_adult_trial_request"
                                />
                                <label
                                  class="form-check-label"
                                  for="int_adult_trial_request"
                                >
                                  Intermediate Adult Ballet
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="adult_ballet_checked_trial_request"
                                  {...register2(
                                    "adult_ballet_checked_trial_request"
                                  )}
                                  value="adv_adult_trial_request"
                                  id="adv_adult_trial_request"
                                />
                                <label
                                  class="form-check-label"
                                  for="adv_adult_trial_request"
                                >
                                  Advanced Adult Ballet
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="adult_ballet_checked_trial_request"
                                  {...register2(
                                    "adult_ballet_checked_trial_request"
                                  )}
                                  value="mens_adult_trial_request"
                                  id="mens_adult_trial_request"
                                />
                                <label
                                  class="form-check-label"
                                  for="mens_adult_trial_request"
                                >
                                  Men's Ballet
                                </label>
                              </div>
                              {errors2.adult_ballet_checked_trial_request && (
                                <span className="errorMessage">
                                  {
                                    errors2.adult_ballet_checked_trial_request
                                      .message
                                  }
                                </span>
                              )}
                            </div>
                          </div>

                          <NyliaButton
                            handleClick={handleSubmit2(onSendAdultBalletTrial)}
                            label={"Submit"}
                            id="adultbutton"
                          ></NyliaButton>
                        </form>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <b id="highlightTitle">FLEXIBILITY/CONDITIONING CLASSES</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Our Pre-Ballet Program is more than just an introduction to
                    dance—it's a journey that fosters imagination, builds
                    confidence, and develops coordination in a fun and
                    supportive environment. Tailored for children aged 4–6,
                    these classes provide the perfect foundation for a lifelong
                    love of movement and artistry. <br />
                    <br />
                    Your little dancer will gain:
                    <ul>
                      <li>Improved motor skills and balance</li>
                      <li>A boost in self-esteem and social skills</li>
                      <li>A joyful introduction to music and rhythm</li>
                    </ul>
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 text-center">
                        <form
                          method="post"
                          action="youth"
                          id="pre-ballet-trial-form"
                          onSubmit={handleSubmitPreBalletTrial(
                            onSendPreBalletCurriculumTrial
                          )}
                          noValidate
                          name="pre-ballet-trial-form"
                        >
                          <div className="row formRow">
                            <div className="row formRow">
                              <div className="col">
                                <p>
                                  Give your child the gift of dance and watch
                                  them blossom! Complete the form below, and our
                                  team will schedule your little dancer's first
                                  trial class to start their ballet journey!
                                </p>
                              </div>
                            </div>
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="text"
                                name="pre_ballet_trial_name"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_name",
                                  {
                                    required: {
                                      value: true,
                                      message: "Please enter the dancer's name",
                                    },
                                    maxLength: {
                                      value: 30,
                                      message:
                                        "Please use 30 characters or less",
                                    },
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Dancer's Name"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_name && (
                                <span className="errorMessage">
                                  {
                                    errorsPreBalletTrial.pre_ballet_trial_name
                                      .message
                                  }
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="text"
                                name="pre_ballet_trial_age"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_age",
                                  {
                                    required: {
                                      value: true,
                                      message: "Please enter the dancer's age",
                                    },
                                    maxLength: {
                                      value: 30,
                                      message:
                                        "Please use 30 characters or less",
                                    },
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Dancer's Age"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_age && (
                                <span className="errorMessage">
                                  {
                                    errorsPreBalletTrial.pre_ballet_trial_age
                                      .message
                                  }
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="phone"
                                name="pre_ballet_trial_phone"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_phone",
                                  {
                                    required: true,
                                    pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Phone Number"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_phone && (
                                <span className="errorMessage">
                                  Please enter a valid phone number
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                form="pre-ballet-trial-form"
                                type="email"
                                name="pre_ballet_trial_email"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_email",
                                  {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  }
                                )}
                                className="form-control formInput"
                                placeholder="Email address"
                              ></input>
                              {errorsPreBalletTrial.pre_ballet_trial_email && (
                                <span className="errorMessage">
                                  Please enter a valid email address
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row formRow">
                            <div className="col">
                              <p>
                                Select your preferred form of communication:
                              </p>

                              <select
                                class="form-control"
                                id="pre_ballet_trial_pref_communication"
                                name="pre_ballet_trial_pref_communication"
                                {...registerPreBalletTrial(
                                  "pre_ballet_trial_pref_communication"
                                )}
                              >
                                <option>Email</option>
                                <option>Call</option>
                                <option>Text</option>
                              </select>
                            </div>
                          </div>
                          <NyliaButton
                            handleClick={handleSubmitPreBalletTrial(
                              onSendPreBalletCurriculumTrial
                            )}
                            label={"Submit"}
                          ></NyliaButton>
                        </form>
                      </div>
                      <ToastContainer />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item> */}
              {/* <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <b id="highlightTitle">PRIVATE LESSONS</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <b>Nylia Ballet Company: 2024 - 2025 Season</b>
                    <ul>
                      <li>August 3rd, 2024 - June 20, 2025</li>
                    </ul>
                    <b>Nylia Ballet Company Auditions</b>
                    <ul>
                      <li>
                        August 3rd, 2024 at 1:30 pm - Nylia Ballet Academy
                      </li>
                    </ul>
                    <b>Dracula</b>
                    <ul>
                      <li>August - October 2024</li>
                    </ul>
                    <b>Nylia Ballet Company Trainee Auditions</b>
                    <ul>
                      <li>
                        October 26th, 2024 at 11:30 am - Nylia Ballet Academy
                      </li>
                    </ul>
                    <b>Swan Lake</b>
                    <ul>
                      <li>October 2024 - February 2025</li>
                    </ul>
                    <b>Sleeping Beauty</b>
                    <ul>
                      <li>February - June 2025</li>
                    </ul>
                  </p>
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="main-img-bkg" id="uniform-section">
        <div className="main-box main-box-centered">
          <h1 id="highlightTitle">CLASS ATTIRE</h1>
          <br></br>
          <p>
            The Academy uniform is an integral part of the Nylia Ballet Academy
            experience. The uniform indicates that students are in a special
            learning environment and allows teachers to clearly see the
            student’s body. This allows instructors to provide feedback on
            proper alignment and correct positions.
          </p>
          <a
            id="uniform-page-button"
            href={AcademyUniform}
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Download Nylia Ballet Academy Uniform"
          >
            <NyliaButton label={"Academy Uniform"}></NyliaButton>
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="main-box main-box-centered">
          <h1 id="highlightTitle">RULES AND ETIQUETTE</h1>
          <p>
            <br />
            <p id="quote">
              "Discipline is the bridge between goals and accomplishments."
            </p>
            <br />
            All Nylia Ballet Academy dancers must adhere to the Academy
            etiquette guidelines.
          </p>
          <a
            id="etiquette-page-button"
            href={AcademyEtiquette}
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Download Nylia Ballet Academy Etiquette"
          >
            <NyliaButton label={"Academy Etiquette"}></NyliaButton>
          </a>
        </div>
      </div>
      <div className="main-bkg tuition-section" id="academy-tuition">
        <div className="main-box main-box-centered">
          <h1 id="highlightTitle">TUITION</h1>
          <br />
          <p>
            Tuition is due on the 1st of each month. A late fee of $10 is
            charged for late tuition payments.
            <br />
            <br />
            An annual registration fee of $45 is due at the time of registration
            and annually thereafter.
          </p>
          <a
            id="enrollment-page-button"
            href={TuitionPackages}
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Download Nylia Ballet Academy Tuition Information"
          >
            <NyliaButton label={"Tuition Information"}></NyliaButton>
          </a>
        </div>
      </div>{" "}
      <div className="main-img-bkg" id="handbook-section">
        <div className="main-box main-box-centered">
          <h1 id="highlightTitle">CLASS ATTIRE</h1>
          <br></br>
          <p>
            The Academy uniform is an integral part of the Nylia Ballet Academy
            experience. The uniform indicates that students are in a special
            learning environment and allows teachers to clearly see the
            student’s body. This allows instructors to provide feedback on
            proper alignment and correct positions.
          </p>
          <a
            id="uniform-page-button"
            href={AcademyUniform}
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Download Nylia Ballet Academy Uniform"
          >
            <NyliaButton label={"Academy Uniform"}></NyliaButton>
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="main-box main-box-centered">
          <h1 id="highlightTitle">RULES AND ETIQUETTE</h1>
          <p>
            <br />
            <p id="quote">
              "Discipline is the bridge between goals and accomplishments."
            </p>
            <br />
            All Nylia Ballet Academy dancers must adhere to the Academy
            etiquette guidelines.
          </p>
          <a
            id="etiquette-page-button"
            href={AcademyEtiquette}
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Download Nylia Ballet Academy Etiquette"
          >
            <NyliaButton label={"Academy Etiquette"}></NyliaButton>
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="main-box main-box-centered">
          <h1>STUDENT HANDBOOK</h1>
          <p>
            Thanks for choosing Nylia Ballet Academy! A printable version of the
            Student Handbook is available here.
          </p>
          <a
            id="handbook-page-button"
            href={Handbook}
            without
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Download Nylia Ballet Academy Student Handbook"
          >
            <NyliaButton label={"Student Handbook"}></NyliaButton>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Enroll;
