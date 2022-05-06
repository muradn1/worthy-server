import { Injectable } from '@nestjs/common';
import { DiamondInput } from './models/diamond.input';
import { Diamond } from './models/diamond.model';
import { v4 as uuid } from 'uuid';
import { DiamondCut } from './models/diamond-cut.enum';
import { DiamondColor } from './models/diamond-color.enum';
import { DiamondClarity } from './models/diamond-clarity.enum';


@Injectable()
export class DiamondsService {
    private diamonds: Diamond[] = [
        {
            id: "ebec9bdf-6ec3-4f70-9d95-d984b01643c7",
            ownerId: "789e518d-03c1-40db-bd57-48900112a8eb",
            caratWeight: 10.3,
            cut: DiamondCut.ROUND,
            color: DiamondColor.WHITE,
            clarity: DiamondClarity.FL,
            price: 2045,
            photo: "first-image.jpg"
        },
        {
            id: "03f26005-fccc-425c-b47a-7175810401ce",
            ownerId: "a2e995fe-84ca-43fd-8181-81b2ba930970",
            caratWeight: 10.3,
            cut: DiamondCut.ROUND,
            color: DiamondColor.RED,
            clarity: DiamondClarity.FL,
            price: 2817.5,
            photo: "fifth-image.jpg"
        },
        {
            id: "b2e53569-bb9c-425d-b68f-f3053e7ec33d",
            ownerId: "39ddf423-7256-427a-8ae4-4d9026b6452c",
            caratWeight: 7.6,
            cut: DiamondCut.ROUND,
            color: DiamondColor.RED,
            clarity: DiamondClarity.FL,
            price: 2210,
            photo: "forth-diamond.jpg"
        },
        {
            id: "4f16c8f8-43ba-4a6c-aa2e-e9914b2495ef",
            ownerId: "12c83ae3-b0e6-4bf0-b6c2-27268a2f61bb",
            caratWeight: 7.6,
            cut: DiamondCut.ROUND,
            color: DiamondColor.RED,
            clarity: DiamondClarity.VVS,
            price: 2096,
            photo: "second-image.jpg"
        },
        {
            id: "6ec41f42-a315-4200-aaa6-8094f49cb50c",
            ownerId: "3f232d97-71b1-4a19-a877-dafdcbddb8bc",
            caratWeight: 6.5,
            cut: DiamondCut.OVAL,
            color: DiamondColor.BLUE,
            clarity: DiamondClarity.I1,
            price: 865.0000000000001,
            photo: "sixth-image.jpg"
        },
        {
            id: "47f4488d-3ef4-4bd7-9c16-e0bce5d3fc37",
            ownerId: "77408da1-c6cc-46a2-b6b6-e4d225590147",
            caratWeight: 6.5,
            cut: DiamondCut.EMERALD,
            color: DiamondColor.BLUE,
            clarity: DiamondClarity.I1,
            price: 1015.0000000000001,
            photo: "third-diamond.jpg"
        },

    ];

    create(diamond: DiamondInput, price?: number) {
        const id = uuid();
        const ownerId = uuid();

        const diamondToCreate: Diamond = {
            ...diamond, ...{
                id,
                price,
                ownerId
            }
        }
        this.diamonds.push(diamondToCreate);

        return diamondToCreate;
    }

    findAll(): Diamond[] {
        return this.diamonds;
    }

    findOne(id: string): Diamond {
        return Object.freeze(this.diamonds.find(diamond => diamond.id === id));
    }

}
