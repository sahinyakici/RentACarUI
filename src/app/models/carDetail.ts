import {Car} from "./car";
import {CarImage} from "./carImages";

export interface CarDetail extends Car {
  carImage: CarImage[];
  modelYear: string;
  description: string;
}
