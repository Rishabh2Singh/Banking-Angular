export class Transfer{
    constructor(
        private fromAcc:number,
        private toAcc:number,
        private amount:number,
        private transDate:Date,
        private remark:string
    ){}
}