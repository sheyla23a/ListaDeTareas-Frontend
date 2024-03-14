import { Button, ListGroup } from "react-bootstrap";
const ItemTarea = ({tarea,borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between mb-3">
      {tarea?.nombre}<Button variant="danger" size="sm" className="BotonEliminar" onClick={()=>borrarTarea(tarea)} >X</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
