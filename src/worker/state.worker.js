
export function worker(){
   var connections  = [];
   var state = {};
   self.onconnect = connectEvent => {
      const port = connectEvent.ports[0];
      
      port.start();
      connections.push(port);
      port.postMessage(state);
      
      port.onmessage = messageEvent => {
         let newState = messageEvent?.data;
         state = { [newState?.name] : newState?.data, connections : connections.length };
         connections.forEach((connection) => {
            connection.postMessage(state);
         });
      }
   };
}