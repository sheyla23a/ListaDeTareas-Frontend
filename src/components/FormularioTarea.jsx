import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { eliminarTarea, crearTarea, obtenerTareas } from "../helpers/queries";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tarea.trim().length >= 3 && tarea.trim().length <= 50){
      const nuevaTarea = {
        "nombre" : tarea
      };
      try {
        const respuesta = await crearTarea(nuevaTarea);
        if (respuesta.status === 201) {
          cargarTareas();
          setTarea("");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Ingresa una tarea válida");
    }
  };

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const borrarTarea = async (tareaProps) => {
    try {
      const respuesta = await eliminarTarea(tareaProps._id);
      if (respuesta.status === 200) {
        const tareasFiltradas = tareas.filter((tarea) => tarea._id !== tareaProps._id);
        setTareas(tareasFiltradas);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  const cargarTareas = async () => {
    try {
      const respuesta = await obtenerTareas();
      setTareas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={50}
            onChange={handleChange}
            value={tarea}
          />
          <Button variant="dark" className="ms-2" type="submit" size="sm">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareasProps={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
