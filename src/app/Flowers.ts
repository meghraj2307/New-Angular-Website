export class Flower{
    id! : number | null;
    name! : string | null;
    quantity! : number | null;
    price! : number | null;
    image! : string | null;

    constructor(id:number|null, name:string | null,quantity:number | null,price:number | null, img:string | null){
        this.id = id;
        this.name= name
        this.price=price
        this.quantity=quantity
        this.image = img
    }
}