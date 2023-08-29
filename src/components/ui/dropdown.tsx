import React from "react";

interface DropdownProps {
    onDurationChange: (selectedDuration: string) => void;
  }


  const DropdownComponent: React.FC<DropdownProps> =({ onDurationChange }) => {

    const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDuration = event.target.value;
        onDurationChange(selectedDuration);
      };


    return (
      <div className="relative w-44">
        <select
          id="duration"
          name="duration"
          // value={formData.duration}
          // onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border text-[#275a85] border-[#275a85] focus:outline-none focus:border-[#275a85] appearance-none transition-opacity duration-300"
          required
          defaultValue={"1"}
          onChange={handleDurationChange}
        >
          <option value="" disabled >
          Select Hours
          </option>
          <option value="1">1 Hour</option>
          <option value="2">2 Hours</option>
          <option value="3">3 Hours</option>
          <option value="4">4 Hours</option>
          <option value="5">5 Hours</option>
          <option value="6">6 Hours</option>
        </select>
        <div className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
}

export default DropdownComponent;