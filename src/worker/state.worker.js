
export function worker(){
   var connections  = [];
   var state = {};
   self.onconnect = connectEvent => {
      const port = connectEvent.ports[0];
      connections.push(port);
      port.postMessage(state);
      
      port.onmessage = messageEvent => {
         let newState = messageEvent?.data;
         state = { [newState?.name] : newState?.data };
         connections.forEach((connection) => {
            connection.postMessage(state);
         });
      }
   };
}