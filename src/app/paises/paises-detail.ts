import { Pais } from "./paises/paises"

export class PaisDetail extends Pais{
    constructor(id: number, name: string, formation_year: string,  capital: string, description: string, flag: string, public detail: string){
        super(id, name, formation_year, capital, description, flag)
    }
    
}
