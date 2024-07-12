
import { SecaoInformatica } from '../pages/Secoes/Informatica';
import { Route, Routes } from 'react-router-dom';

const Root = () => {
    return (
        <Routes>
            <Route path='/secoes-usuarios/:secaoLabId' element={<SecaoInformatica />} />
        </Routes>
    );
}

export { Root };