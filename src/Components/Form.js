import React from "react";

const Form = () => {

  const submitInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const hobbies = form.hobbies.value;
    const formInfo = {
      name,
      number,
      email,
      hobbies,
    };

    fetch('https://redpositive-service-server.vercel.app/info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    
    console.log(formInfo);
    e.target.reset();
  };

  return (
    <div className="w-full">
      <div className="w-32 mt-20 mx-auto">
      <label
        htmlFor="form-modal"
        className="btn w-32 bg-blue-600 text-white p-4 font-bold mt-4 text-center mx-auto"
      >
        Add
      </label>
      </div>
      <input type="checkbox" id="form-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="form-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={submitInfo} action="" className="w-full mx-auto">
            <h1 className="text-5xl font-bold text-center mb-2">Form</h1>
            <div className="bg-green-300 w-full p-3 mx-auto">
              <label className="font-semibold text-2xl">Name:</label>
              <br />
              <input
                type="text"
                className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
                name="name"
                placeholder="Write your name"
                required
              />
              <br />
              <label className="font-semibold text-2xl">Phone Number</label>
              <br />
              <input
                type="text"
                className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
                name="number"
                placeholder="Write your number"
                required
              />
              <br />
              <label className="font-semibold text-2xl">Email</label>
              <br />
              <input
                type="email"
                className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
                name="email"
                placeholder="Write your email"
                required
              />
              <br />
              <label className="font-semibold text-2xl">Hobbies</label>
              <br />
              <input
                type="text"
                className="border-solid border-2 border-slate-600 w-full p-2 mb-2 rounded-lg"
                name="hobbies"
                placeholder="Write your hobbies"
                required
              />
              <br />
              <br />
              {/* <input type="submit" className="w-full bg-blue-600 text-white p-4 font-bold" value="Submit">Save</input> */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-4 font-bold btn"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
