import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes";


const App = () => {

    return(
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}

export { App };