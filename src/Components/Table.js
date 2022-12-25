import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "./Loader";

const Table = () => {
  const [formInfo, setFormInfo] = useState([]);

  useEffect(() => {
    fetch("https://redpositive-service-server.vercel.app/info")
      .then((res) => res.json())
      .then((data) => setFormInfo(data));
  }, []);

  const handleMakeUpdate = (id) => {
    fetch(`https://redpositive-service-server.vercel.app/info/${id}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        if (result.modifiedCount > 0) {
          toast.success("Make Updated Successful.");
          alert("Make Updated Successful.");
          <Loader></Loader>;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = (id) => {
    console.log("deleting data", id);
    fetch(`https://redpositive-service-server.vercel.app/info/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
          console.log("Success:", result);
          if (result.deletedCount > 0) {
              alert('Deleted Successfully');
          }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
                  <td>
                    {info?.plot !== "updated" && (
                      <button
                        onClick={() => handleMakeUpdate(info._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        Make Update
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(info._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
