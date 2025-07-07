import React from "react";

const PersonalInfo = (data) => {
  return (
    <>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">Personal Information</h5>
            <h6 className="text-sm text-gray-500 mb-2">{data.name}</h6>
            <p className="text-base text-gray-700 mb-4">
              Kushagra is a final year student of BTech, he is {data.age} years old.
              He loves frontend programming.
            </p>
            <a
              href={`mailto:${data.email}`}
              className="text-blue-600 hover:underline block"
            >
              {data.email}
            </a>
            <a
              href={`tel:${data.mob}`}
              className="text-blue-600 hover:underline block"
            >
              {data.mob}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
