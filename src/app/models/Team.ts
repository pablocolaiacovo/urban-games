import { Marker } from "./Marker";

export class Team {
  id: number;
  name: string;
  images: Array<string>[];
  marker: Marker;
  instagram: string;
  shortDescription: string;
  description: string;
  address: string; 
}
