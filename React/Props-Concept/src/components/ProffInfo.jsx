import React from "react";

const ProffInfo = ({ compData }) => {
  return (
    <>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">Professional Information</h5>
            <h6 className="text-sm text-gray-500 mb-2">
              {compData.designation}
            </h6>
            <p className="text-base text-gray-700 mb-3">
              {compData.company_name} | {compData.department}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {compData.skills.map((skill , index) => {
                    const badgeColors = [
                        "bg-yellow-400 text-black",
                        "bg-blue-500 text-white",
                        "bg-green-500 text-white",
                        "bg-red-500 text-white",
                    ];
                    return (
                        <span
                        key={index}
                        className={`text-sm px-3 py-1 rounded-full ${badgeColors[index % badgeColors.length]}`}>
                            {skill}
                        </span>
                    );
                })}
            </div>
            <a
                href={compData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
                {compData.github}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProffInfo;
