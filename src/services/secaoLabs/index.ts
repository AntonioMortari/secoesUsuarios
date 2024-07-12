
import { isAxiosError } from 'axios';
import { api } from '../config';
import { ISecaoLab } from '@/@types/SecaoLab';


const getBySecaoOrgao = async (secaoOrgaoId: string): Promise<ISecaoLab | string> => {
    const url = `/feagri/secaolabs/secoes_orgao/${secaoOrgaoId}`;
    const result = await api.get<ISecaoLab[]>(url);

    if(isAxiosError(result)){
        console.log('ERRO AO BUSCAR SEÇÂO-LABORATÒRIO: ', result);
        return 'Seção não encontrada'
    }

    return result.data[0];
}

export const secaoLabsService = {
    getBySecaoOrgao
}