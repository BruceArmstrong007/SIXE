export type State = {
    name: string;
    data: any;
} 

export class SixeStateService{
    sharedWorker: SharedWorker;
    state : State;
    constructor(){
    this.sharedWorker = new SharedWorker('./../workers/state.worker.js');
    this.sharedWorker.port.onmessage = ({data}) => {
        this.state = data;
    };
    }

    getState(){
        return this.state;
    }

    setState(data: State){
        this.sharedWorker.port.postMessage(data);
    }
}
