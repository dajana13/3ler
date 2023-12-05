import React from "react";
import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import HamburgerMenuClose from "../images/close-yellow.svg";
import UploadIcon from "../images/upload-icon.svg";
import "../css/modal-membership.css";

export default function ModalMembership(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    dateOfBirth: "",
    uploadId: "",
  });
  const [selectedFile, setSelectedFile] = useState();
  const [fileMessage, setFileMessage] = useState(
    "Max. upload size is 10MB (JPEG, PNG and PDF)"
  );

  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current.open && !props.showModal) {
      dialogRef.current.close();
    } else if (!dialogRef.current.open && props.showModal) {
      dialogRef.current.showModal();
    }
  }, [props.showModal]);

  function handleChange(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handlePhoneChange(value, county, e, formattedValue) {
    e.preventDefault();

    setFormData((prevState) => {
      return {
        ...prevState,
        ["phoneNumber"]: formattedValue,
      };
    });
  }

  function handleChangeFile(event) {
    handleChange(event);

    const file = event.target.files[0];
    if (file.size > 1e7) setFileMessage("File size is larger than 10MB");
    else {
      setSelectedFile(file);
      setFileMessage(file.name);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(() => {
      props.setSnackbar(true);
    }, 500);

    props.setShowModal(false);
  }

  return (
    <dialog className="modal-membership" ref={dialogRef}>
      <img
        className="btn-close"
        onClick={() => props.setShowModal(false)}
        src={HamburgerMenuClose}
        alt="Close"
      />
      <h1 className="modal-membership-text">Fill out to become a member!</h1>
      <form className="form-onSubmit-membership column" onSubmit={handleSubmit}>
        <div className="label-input-modal column">
          <label htmlFor="fullName" className="body2">
            Full Name *
          </label>
          <input
            id="fullName"
            className="input-modal"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="fullName"
            value={formData.fullName}
            autoComplete="name"
            required
          />
        </div>
        <div className="label-input-modal column">
          <label htmlFor="email" className="body2">
            Email *
          </label>
          <input
            id="email"
            className="input-modal"
            type="email"
            placeholder=""
            onChange={handleChange}
            name="email"
            value={formData.email}
            autoComplete="email"
            required
          />
        </div>
        <div className="label-input-modal column">
          <label htmlFor="address" className="body2">
            Address *
          </label>
          <input
            id="address"
            className="input-modal"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="address"
            value={formData.address}
            autoComplete="off"
            required
          />
        </div>
        <div className="label-input-modal column">
          <label htmlFor="phoneNumber" className="body2">
            Phone number *
          </label>
          <input
            id="phoneNumber"
            className="input-modal input-hidden"
            type="tel"
            placeholder=""
            name="phoneNumber"
            value={formData.phoneNumber}
            autoComplete="off"
            required
          />
          <PhoneInput
            className="input-modal"
            inputProps={{
              name: "phoneNumber",
              required: true,
            }}
            country={"de"}
            regions={"europe"}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="label-input-modal column">
          <label htmlFor="dateOfBirth" className="body2">
            Date of birth *
          </label>
          <div className="input-modal row custom-date">
            <p className="body2">{formData.dateOfBirth}</p>
            <input
              id="dateOfBirth"
              className="input-modal"
              type="date"
              placeholder=""
              onChange={handleChange}
              name="dateOfBirth"
              value={formData.dateOfBirth}
              autoComplete="off"
              min="1945-01-01"
              max={new Date().toJSON().slice(0, 10)}
              required
            />
          </div>
        </div>
        <div className="label-input-modal column">
          <label htmlFor="uploadId" className="body2">
            Upload ID *
          </label>
          <div className="input-modal column custom-drop-file">
            <input
              id="uploadId"
              className="uploadId"
              type="file"
              placeholder=""
              onChange={handleChangeFile}
              name="uploadId"
              value={formData.uploadId}
              autoComplete="off"
              required
            />
            <img src={UploadIcon} alt="Upload icon" />
            <p className="upload-file-text">{fileMessage}</p>
          </div>
        </div>
        <button className="btn-submit btn-join-now" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </dialog>
  );
}
