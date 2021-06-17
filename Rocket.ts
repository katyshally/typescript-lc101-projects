import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor (name:string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.astronauts = [];
        this.cargoItems = [];
    }

    sumMass( items: Payload[] ): number {
        let totalItemMass = 0;
        for(let i=0; i<items.length;i++){
            totalItemMass += (items[i].massKg);
        }
        return totalItemMass;

    }

    currentMassKg(): number {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    }

    canAdd(item: Payload): boolean {
        if(this.totalCapacityKg > (this.currentMassKg()+ item.massKg)) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}