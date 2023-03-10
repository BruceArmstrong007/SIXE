import { worker } from "../worker/state.worker";

export type State = {
    name: string;
    data: any;
} 
export class SixeStateService{
    sharedWorker: SharedWorker;
    state : any;
    sixe : any;
    constructor(){
        const scriptBlob = new Blob([worker.toString().replace(/^function .+\{?|\}$/g, '')], { type: "text/javascript" });
        const workerUrl = URL.createObjectURL(scriptBlob);
        this.sharedWorker = new SharedWorker(workerUrl);
        this.sixe = this.sharedWorker.port;
    }


    setState<State>(data: State){
        console.log(data);
        this.sharedWorker.port.postMessage(data);
    }
}
