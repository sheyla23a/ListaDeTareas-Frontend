import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-4 border border-3 w-50">
        <h2 className="text-center">Bienvenido</h2>
        <h5 className="text-center mb-3">Ingresa tus tareas</h5>
        <FormularioTarea></FormularioTarea>
      </Container>
    </>
  );
}

export default App;
