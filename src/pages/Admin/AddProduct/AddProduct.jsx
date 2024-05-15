import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";


import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import productSchema from "../../../validations/product.validation";
import Products from "../../../classes/product.class";
import { endpoints } from "../../../services/constants";
import controller from "../../../services";


const AddProduct = () => {

  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      name: "",
      salePrice: "",
      costPrice: "",
      description: "",
      imgSrc: "",
      discountPercentage: "",
      categoryId: "",
      stock: ""
    },
    onSubmit:(values)=> {
     const newProduct = new Products(values.name,values.salePrice,values.costPrice,values.imgSrc,values.discountPercentage,values.description,values.categoryId,values.stock)
     console.log(newProduct);
     controller.post(endpoints.products, newProduct)
  
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      }).then(() => navigate("/admin/products"));
      
      values={
        name: "",
        salePrice: "",
        costPrice: "",
        description: "",
        categoryId: "",
        imgSrc: "",
        discountPercentage: "",
        stock: ""
      };
    },
    validationSchema: productSchema,
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit}
        style={{ width: "40%", margin: "180px auto" }}>
        <h1
          style={{ textAlign: "center", color: "blue", marginBottom: "15px" }}
        >
          Add Product
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder='Name'
          />
          {formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}
          <Input
            id="salePrice"
            name="salePrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.salePrice}
            placeholder="Sales Price"

          />
          {formik.errors.salePrice && (
            <span style={{ color: "red" }}>{formik.errors.salePrice}</span>
          )}
          <Input
            id="costPrice"
            name="costPrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.costPrice}
            placeholder="Cost Price"
          />
          {formik.errors.costPrice && (
            <span style={{ color: "red" }}>{formik.errors.costPrice}</span>
          )}
          <Input
            id="discountPercentage"
            name="discountPercentage"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.discountPercentage}
            placeholder="DisCount Percentage"
          />
          {formik.errors.discountPercentage && (
            <span style={{ color: "red" }}>{formik.errors.discountPercentage}</span>
          )}

          <Input
            id="imgSrc"
            name="imgSrc"
            type="url"
            onChange={formik.handleChange}
            value={formik.values.imgSrc}
            placeholder="Img"
          />
          {formik.errors.imgSrc && (
            <span style={{ color: "red" }}>{formik.errors.imgSrc}</span>
          )}
          <Input
            id="stock"
            name="stock"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.stock}
            placeholder="StockCount"
          />
          {formik.errors.stock && (
            <span style={{ color: "red" }}>{formik.errors.stock}</span>
          )}
          <Input
            id="categoryId"
            name="categoryId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.categoryId}
            placeholder="categoryId"
          />
          {formik.errors.categoryId && (
            <span style={{ color: "red" }}>{formik.errors.categoryId}</span>
          )}
          <TextArea
            placeholder="Description "
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default AddProduct