import express from "express";

export class Server{
    config:any;
    app: any| undefined;
    constructor(config:any){
        this.config = config;
    }

    start(){
        this.app  = express();
        this.app.use(express.json())
        this.app.listen(this.config.port,(err:any)=>{
            if (err) {
                return console.error(err);
              }
              return console.log(`server is listening on ${this.config.port}`);
        })
    }


}