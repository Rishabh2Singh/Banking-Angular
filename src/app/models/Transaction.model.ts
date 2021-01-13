import { stringify } from "@angular/compiler/src/util";

export class Transaction{
    constructor(){
        fromAc:Number;
        type:String;
        toAc:Number;
        amt:Number;
        // dt:Date;
        remark:String;
    }
} 