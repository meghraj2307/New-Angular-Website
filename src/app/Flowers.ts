export class Flower{
    name! : string | null;
    quantity! : number | null;
    price! : number | null;

    constructor(name:string | null,quantity:number | null,price:number | null){
        this.name= name
        this.price=price
        this.quantity=quantity
    }
}