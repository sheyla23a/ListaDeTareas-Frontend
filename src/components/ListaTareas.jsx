import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareasProps,borrarTarea }) => {
  return (
    <ListGroup>
      {tareasProps.map((elementoTarea,posicionTarea) => (
        <ItemTarea key={posicionTarea}  tarea={elementoTarea} borrarTarea={borrarTarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
