import axios from "axios";

const BASE_URL = "http://localhost:4000"

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'/livros/obter/livros');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/livros/obter/livros/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/livros/cadastro`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}/livros/editar/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/livros/deletar/${id}`);
    }
    
}