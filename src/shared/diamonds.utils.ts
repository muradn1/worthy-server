import { Injectable } from "@nestjs/common";
import { DiamondColor } from "../diamonds/models/diamond-color.enum";

@Injectable()
export class DiamondsUtils {
    isUniqueColor(color: DiamondColor) {
        return color === DiamondColor.RED;
    }
}