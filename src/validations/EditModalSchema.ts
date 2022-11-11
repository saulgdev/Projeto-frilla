import * as yup from "yup";

export const EditModalSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório!"),

  description: yup.string().required("Campo obrigatório!"),

  category: yup.string().required("Campo obrigatório!"),
  
  value: yup.string().required("Campo obrigatório!"),

});
