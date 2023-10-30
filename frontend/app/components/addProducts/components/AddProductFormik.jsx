"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { addProductSchema } from "@/app/utils/formikValidationSchema/formikValidationSchema";
import InputField from "../../common/inputFields/InputField";
import CurrencyInputField from "../../common/inputFields/CurrencyInputField";
import { addProduct } from "@/app/redux/features/productsSlice";

import { useDispatch, useSelector } from "react-redux";
import ImageField from "../../common/inputFields/ImageField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductFormik = () => {
  const dispatch = useDispatch();
  let ListOfCurrencies = [
    {
      currencyKey: "PKR",
    },
    {
      currencyKey: "INR",
    },
    {
      currencyKey: "DOLLOR",
    },
  ];
  const initialValues = {
    name: "",
    productDescription: "",
    price: "",
  };
  return (
    <div className="px-16 py-4">
      <ToastContainer />
      <Formik
        validationSchema={addProductSchema}
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("values", values);
          dispatch(addProduct(values));

          toast.success("Product added successfully!", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <InputField
              name="name"
              type="text"
              placeholder="Full Sleeves T-Shirt"
              label="Product Name"
              className="p-2   flex justify-items-end"
              value={values.name}
              errors={errors}
              touched={touched}
              onChange={handleChange}
            />
            {/* <InputField
              type="text"
              name="productDescription"
              placeholder="Zalmi T-Shirt with printed Logo"
              label="Product Description"
              className="p-2 flex justify-items-end"
              value=""
              errors={errors}
              touched={touched}
              onChange={handleChange}
            /> */}
            {/* <InputField
              type="number"
              name="productPrice"
              value=""
              placeholder="999"
              label="Product Price"
              className="p-2 flex justify-items-end"
              errors={errors}
              touched={touched}
              onChange={handleChange}
            /> */}
            <CurrencyInputField
              label="Product Price"
              name="price"
              value={values.price}
              placeholder="999"
              options={ListOfCurrencies}
              className="p-2   flex justify-items-end "
              errors={errors}
              touched={touched}
              onChange={handleChange}
            />

            {/* /////////////// */}
            <ImageField label="Product Image" />
            {/* ///////////////// */}

            {/* <InputField
              type="string"
              value=""
              placeholder="my image"
              className="p-2 flex justify-items-end"
            /> */}
            <button
              type="submit"
              className="border-2 rounded-lg w-1/6  my-12 p-2 font-bold text-white bg-blue-700 hover:bg-blue-900"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductFormik;
