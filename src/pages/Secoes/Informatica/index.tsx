import { Container } from "../../../layouts/Container";
import { ISecaoLab } from "../../..//@types/SecaoLab";
import { secaoLabsService } from "../../..//services/secaoLabs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SecaoInformatica = () => {
    const { secaoLabId } = useParams<{ secaoLabId: string }>();
    const [secaoData, setSecaoData] = useState<ISecaoLab>({} as ISecaoLab);

    useEffect(() => {
        const getSecao = async () => {
            const result = await secaoLabsService.getBySecaoOrgao(secaoLabId || '');

            if (typeof result != 'string') {
                setSecaoData(result);
            }
        }

        getSecao();
    }, [secaoLabId]);

    return (
        <Container>
            <h1>{secaoData.secoes_descricao}</h1>
        </Container>
    );
}

export { SecaoInformatica };