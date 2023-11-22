import React from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { FormControl, Button, FormLabel, Flex, Text } from "@chakra-ui/react";

const Form = () => {
  const { handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      password: "",
      password1: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo Obligatorio"),
      apellido: Yup.string().required("Campo Obligatorio"),
      email: Yup.string()
        .email("Ingrese un Email valido")
        .required("Campo Obligatorio"),
      telefono: Yup.number("Ingresar un Numero de Telefono")
        .required("Campo Obligatorio")
        .min(9, "minimo 9 digitos"),
      password: Yup.string()
        .min(2, "Debe tener minimo 8 caracteres")
        .required("Campo Obligatorio"),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "La contrasena no coincide")
        .required("Campo Obligatorio"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Flex justify="center" bg="#9EB8D9" h="100vh">
      <Formik>
        <form onSubmit={handleSubmit}>
          <FormControl
            bg="#EEF5FF"
            textAlign="center"
            p="50px"
            mt="25px"
            borderRadius="10px"
            boxShadow="dark-lg"
          >
            <Text fontSize="3xl">Registro</Text>
            <FormLabel textAlign="start" mt="5px" htmlFor="name">
              Nombre:{" "}
              <Flex justify="center">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={handleChange}
                />
              </Flex>
            </FormLabel>
            {touched.nombre && errors.nombre ? (
              <FormLabel fontSize="xs">{errors.nombre}</FormLabel>
            ) : null}

            <FormLabel textAlign="start" mt="5px" htmlFor="lastname">
              Apellido:{" "}
              <Flex justify="center">
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  onChange={handleChange}
                />
              </Flex>
            </FormLabel>

            {touched.apellido && errors.apellido ? (
              <FormLabel fontSize="xs">{errors.apellido}</FormLabel>
            ) : null}

            <FormLabel textAlign="start" mt="5px" htmlFor="phone">
              Telefono:{" "}
              <Flex justify="center">
                <input
                  type="number"
                  name="telefono"
                  id="telefono"
                  onChange={handleChange}
                />
              </Flex>
            </FormLabel>

            {touched.telefono && errors.telefono ? (
              <FormLabel fontSize="xs">{errors.telefono}</FormLabel>
            ) : null}
            <FormLabel textAlign="start" mt="5px" htmlFor="email">
              Correo:{" "}
              <Flex justify="center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  onChange={handleChange}
                />
              </Flex>
            </FormLabel>
            {touched.email && errors.email ? (
              <FormLabel fontSize="xs">{errors.email}</FormLabel>
            ) : null}
            <FormLabel textAlign="start" mt="5px" htmlFor="password">
              Contraseña:{" "}
              <Flex justify="center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </Flex>
            </FormLabel>
            {touched.password && errors.password ? (
              <FormLabel fontSize="xs">{errors.password}</FormLabel>
            ) : null}
            <FormLabel textAlign="start" mt="5px" htmlFor="password2">
              Repetir contraseña:{" "}
              <Flex justify="center">
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  onChange={handleChange}
                />
              </Flex>
            </FormLabel>
            {touched.password2 && errors.password2 ? (
              <FormLabel fontSize="xs">{errors.password2}</FormLabel>
            ) : null}
            <Button type="submit">Enviar</Button>
          </FormControl>
        </form>
      </Formik>
    </Flex>
  );
};

export default Form;
