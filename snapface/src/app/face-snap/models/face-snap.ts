export class FaceSnap{
    title: string;
    description: string;
    createDate: Date;
    imageUrl: string;
    snaps: number;

    constructor(title:string,description:string,imageUrl:string,createdate:Date,snaps:number){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createDate = createdate;
        this.snaps = snaps;
    }
}