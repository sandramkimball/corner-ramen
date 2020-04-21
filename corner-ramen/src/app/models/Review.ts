export class Review{
    // the constructor is a ts shortcut to declare class properties
    constructor(
        public id:number, 
        public username:string,
        public comment?:string, 
        public image_url?:string) {}
}