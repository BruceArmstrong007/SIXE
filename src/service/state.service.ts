import { worker } from "../worker/state.worker";

export type State = {
    name: string;
    data: any;
} 
export class SixeStateService{
    sharedWorker: SharedWorker;
    state : any;
    sixe : any;
    id : string;
    constructor(stateName = ''){
        this.id = 'sixe'+stateName;
        let workerURL = localStorage.getItem(this.id);
        if(!workerURL){
            let scriptBlob = new Blob([worker.toString().replace(/^function .+\{?|\}$/g, '')], { type: "text/javascript" });
            workerURL = URL.createObjectURL(scriptBlob);
            localStorage.setItem(this.id,workerURL);
        } 
        this.sharedWorker = new SharedWorker(workerURL);
        this.sixe = this.sharedWorker.port;
    }


    setState<State>(data: State){
        this.sharedWorker.port.postMessage(data);
    }
    
    close(){
        this.sixe.close();
        localStorage.removeItem(this.id);
    }

}
