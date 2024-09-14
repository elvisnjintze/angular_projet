export class FaceSnap{
    title: string;
    description: string;
    createDate: Date;
    imageUrl: string;
    snaps: number;
    location?: string;

    constructor(title:string,description:string,imageUrl:string,createdate:Date,snaps:number){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createDate = createdate;
        this.snaps = snaps;
    }
    setlocation(location:string):void{
        this.location = location;
    }
    withlocation(location:string):FaceSnap{
        this.setlocation(location);
        return this
    }
}