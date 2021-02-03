import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { AddData } from "../Redux/apiDucks";
import moment from "moment";

export const Principal = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    fechalta: "",
    fechmodif: "",
  });

  const dispatch = useDispatch();

  const { nombre, fechalta, fechmodif } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  const HandleAddNew = () => {
    let fecha = moment(new Date()).format("D [de] MMMM [de] YYYY");
    dispatch(AddData(nombre, fecha, fecha));
  };

  const HandleMostrar = () => {
    console.log("mostrar");
  };

  return (
    <>
      
      <h3> FORMULARIO ALTA/MODIFICACIONES </h3>

      <div className="col-4">
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            className="form-control"
            autoComplete="off"
            value={nombre}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="fechalta"
            className="form-control"
            disabled
            value={fechalta}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="fechmodif"
            className="form-control"
            disabled
            value={fechmodif}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div>
        <button
          type="submit"
          className="btn m-1 btn-block btn-outline-primary"
          onClick={HandleMostrar}
        >
          Mostrar Tabla
        </button>

        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
          Limpiar
        </button>

        <button
          type="submit"
          className="btn m-1 btn-block btn-outline-primary"
          onClick={HandleAddNew}
        >
          Agregar
        </button>
      </div>
    </>
  );
};
