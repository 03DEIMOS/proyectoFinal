import http from "../http-common";

class JugadorDataService {
getAll(){
        return http.get("/jugadores");
    }

get(id){
    return http.get(`/jugadores/${id}`);
}

create(data){
    return http.post("/jugadores", data);
}

update(id, data){
    return http.put(`/jugadores/${id}`, data)
}

findByNombre(nombre){
    return http.get(`/jugadores?nombre=${nombre}`);
}

}

export default new JugadorDataService();