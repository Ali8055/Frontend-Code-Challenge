"use client";
import React, { useState } from "react";

const ImageField = (props) => {
  const [image, setImage] = useState(null);

  return (
    <div>
      <div className="p-2 flex justify-items-end">
        <label htmlFor="image" className="w-3/12 font-bold">
          {props.label}
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*" // Specify that only image files are allowed
          onChange={(event) => {
            const selectedImage = event.currentTarget.files[0];
            setImage(selectedImage);
            setFieldValue("image", selectedImage); // Set the Formik field value
          }}
        />
      </div>
      {image && (
        <div className="p-2 flex justify-items-end">
          <img
            src={URL.createObjectURL(image)} // Display the selected image
            alt="Selected Product Image"
            style={{ maxWidth: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageField;
