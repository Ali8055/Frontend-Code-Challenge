import * as Yup from "yup";

export const addProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  //   productDescription: Yup.string()
  //     .min(5, "Too Short!")
  //     .max(200, "Too Long!")
  //     .required("Required"),
  price: Yup.number()
    .min(0, "Price Should be Non Negative !")
    .max(999999999999999, "Too Long!")
    .required("Required"),
});
