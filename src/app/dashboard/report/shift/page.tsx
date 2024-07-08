"use client";
import React from "react";
import Select from "react-select";

const option = [
  { value: "Shift Satu", label: "Shift Satu (07.00 s/d 15.00)" },
  { value: "Shift Dua", label: "Shift Dua (15.00 s/d 23.00)" },
  { value: "Shift Tiga", label: "Shift Tiga (23.00 s/d 07.00)" },
];

const Shift = () => {
  const handleGenerateReport = () => {
    const apiUrl = "/api/v1/generate/report-shift1";
    window.location.href = apiUrl;
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <div className="avatar-sm mx-auto mb-4">
                <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">
                  <i className="bx bx-happy-beaming" />
                </span>
              </div>
              <h5 className="font-size-15 mb-1">
                <a href="javascript: void(0);" className="text-dark">
                  Generate Here
                </a>
              </h5>
              <div className="mb-3">
                <Select
                  className="form-select"
                  options={option}
                  id="project-status-input"
                />
                <div className="invalid-feedback">
                  Please select Workbench Status
                </div>
              </div>
              <br />
              <div>
                <button
                  type="button"
                  className="btn btn-success waves-effect waves-light"
                  onClick={handleGenerateReport}>
                  <i className="bx bx-file-blank font-size-16 align-middle me-2" />{" "}
                  Generate here !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shift;
