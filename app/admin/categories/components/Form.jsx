import { Button } from "@nextui-org/react";
import React from "react";

const Form = () => {
  return (
    <div className="bg-white rounded-xl p-6 md:w-[400px]">
      <h1 className="font-semibold">Create Category</h1>
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="category-image"
            id="category-image"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="category-name"
            id="category-name"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-url" className="text-gray-500 text-sm">
            URL <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter URL"
            name="category-url"
            id="category-url"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default Form;
