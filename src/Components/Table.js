import React from "react";

const Table = () => {
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
            <tr>
              <th><label><input type="checkbox" className="checkbox" /></label></th>
              <td>1</td>
              <td>Bikash Chandra Dey</td>
              <td>+8801812203014</td>
              <td>bikashdey1220@gmail.com</td>
              <td>Coding</td>
              <th><button className="btn btn-ghost btn-xs">Update</button></th>
            </tr>
            <tr>
              <th><label><input type="checkbox" className="checkbox" /></label></th>
              <td>2</td>
              <td>Bikash Chandra Dey</td>
              <td>+8801812203014</td>
              <td>bikashdey1220@gmail.com</td>
              <td>Coding</td>
              <th><button className="btn btn-ghost btn-xs">Update</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
