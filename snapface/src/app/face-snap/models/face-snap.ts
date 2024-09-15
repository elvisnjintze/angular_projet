import { SnapType } from "./snap-type.type";

export class FaceSnap{
    title: string;
    description: string;
    createDate: Date;
    imageUrl: string;
    snaps: number;
    location?: string;
    id: string;

    constructor(title:string,description:string,imageUrl:string,createdate:Date,snaps:number){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createDate = createdate;
        this.snaps = snaps;
        this.id = this.id = crypto.randomUUID().substring(0, 8);
    }
    setlocation(location:string):void{
        this.location = location;
    }
    withlocation(location:string):FaceSnap{
        this.setlocation(location);
        return this
    }
    addSnap():void{
        this.snaps++
    }
    removeSnap():void{
        this.snaps--
    }
    snap(snapType:SnapType):void{
        if (snapType=='snap'){
            this.addSnap()
        }else if (snapType=='unsnap'){
            this.removeSnap()
        }
    }
}
