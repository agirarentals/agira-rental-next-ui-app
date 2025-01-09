import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { createNewCategory } from "../../../../lib/firestore/categories/write";

const Form = () => {
  const [data,setData]=useState(null);
  const [image,setImage]=useState(null);

  const handleData=(key,value)=>{
    setData((preData)=>{
      return{
        ...(preData??{}),
        [key]:value,
      }
    })
  }

  const handleCreate=async ()=>{
    try {
      await createNewCategory({data:data,image:image});
      toast.success("Successfully created");
    } catch (error) {
      toast.error(error?.message)
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 md:w-[400px]">
      <h1 className="font-semibold">Create Category</h1>
      <form onSubmit={e=>{e.preventDefault(); handleCreate()}} action="" className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Image <span className="text-red-500">*</span>
          </label>
          {image && <div className="flex justify-center items-center p-3"><img className="h-32" src={URL.createObjectURL(image)} alt="image" /></div>}
          <input
            onChange={e=>{
              if(e.target.files.length>0){
                setImage(e.target.files[0])
              }
            }}
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
            value={data?.name??""}
            onChange={e=>handleData('name',e.target.value)}
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
            value={data?.url??""}
            onChange={e=>handleData('url',e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Form;
