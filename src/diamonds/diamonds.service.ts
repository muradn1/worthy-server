import { Injectable } from '@nestjs/common';
import { Diamond } from './models/diamond.model';

@Injectable()
export class DiamondsService {
    private readonly diamonds: Diamond[] = [];

    create(diamond:Diamond){
        this.diamonds.push(diamond);
    }

    findAll(): Diamond[]{
        return this.diamonds;
    }

}
