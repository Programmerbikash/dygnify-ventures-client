import React, { useEffect, useState } from "react";

const FormModal = () => {
  const [formInfo, setFormInfo] = useState([]);
  useEffect(() => {
    fetch("https://redpositive-service-server.vercel.app/info")
      .then((res) => res.json())
      .then((data) => setFormInfo(data));
  }, []);
  return (
    <>
      <div className="w-full">
        <h1 className="text-5xl font-bold text-center mt-10 mb-2">
          Form Information
        </h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-5/6 mx-auto mb-20">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Hobbies</th>
              </tr>
            </thead>
            <tbody>
              {formInfo &&
                formInfo.map((info) => (
                  <tr key={info?._id}>
                    <td>{info?.name}</td>
                    <td>{info?.number}</td>
                    <td>{info?.email}</td>
                    <td>{info?.hobbies}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormModal;
