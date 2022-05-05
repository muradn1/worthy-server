import { Injectable } from '@nestjs/common';
import { DiamondInput } from './models/diamond.input';
import { Diamond } from './models/diamond.model';
import { v4 as uuid } from 'uuid';


@Injectable()
export class DiamondsService {
    private readonly diamonds: Diamond[] = [];

    create(diamond:DiamondInput, price?:number){
        const id = uuid();
        const ownerId = uuid();
        
        const diamondToCreate:Diamond = {...diamond,...{
            id,
            price,
            ownerId
        }}
        this.diamonds.push(diamondToCreate);

        return diamondToCreate;
    }

    findAll(): Diamond[]{
        return this.diamonds;
    }

}
