export class Beneficiary{
    acno:number;
    name:string;
    type:string;
    nickname:string;

    constructor(acno:number=0,name:string="",type:string="",nickname:string=""){
        this.acno=acno;
        this.name=name;
        this.type=type;
        this.nickname=nickname;
    }
}