import React, { useEffect, useState } from "react";

const Table = () => {
  const [formInfo, setFormInfo] = useState([]);

  useEffect(() => {
    fetch("https://redpositive-service-server.vercel.app/info")
      .then((res) => res.json())
      .then((data) => setFormInfo(data));
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold text-center mt-10 mb-2">Table</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-5/6 mx-auto mb-20">
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Hobbies</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {formInfo &&
              formInfo.map((info, i) => (
                <tr key={info?._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                    <td>{i + 1}</td>
                  <td>{info?.name}</td>
                  <td>{info?.number}</td>
                  <td>{info?.email}</td>
                  <td>{info?.hobbies}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
