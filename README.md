# SIXE
## Lightweight State Management Library for Angular, React, Vue and others

[SIXE](/ico/sixe.ico)

SIXE is a state management tool built on top of typescript, that helps your client application manage its state regardless of the web framework/library you use,




## Features
- Works on top of any frontend typescript framework/library
- State is outside main thread - runs in seperate thread for Performace
- Maintains State aross tabs and windows - state managed in shared worker
- Can create multiple states - ✨Magic ✨
- Lightweight - Low unpack size
- No dependencies

## Tech
- [ Typescript ] - Built on top of Typescript
- [ Shared Worker ] - Shared worker is used to maintain state

Checkout SIXE's Git Repo - [[public repository](https://github.com/BruceArmstrong007/SIXE)] on GitHub.

## Usage
    /* to initialize the service */
    var stateService = new SixeStateService();
    
    /* to set/update state */
     this.stateService.setState({
      name: 'sixe',
      data : ['grapes', 'tomato']
    });
    
    /* to listen to events that changes the state */
    stateService.sixe.onmessage = (event:any) => {
        let state = event?.data;
        console.log(state)
    };
    
Note : 
- Angular users might need to run NgZone inside onmessage event function to get their state properly, 
- others can use their reactive variables to save/use the state you get from onmessage event function.

## Examples (Angular ,React, Vue)
https://stackblitz.com/@BruceArmstrong007/collections/sixe-typescript-state-management-tool
    
    

## Installation

to Install SIXE

```sh
npm i sixe 
or
npm i sixe@latest
```

## Support
- All major desktop browers - Chrome, Edge, Firefox, Opera, Safari
- Few mobile browsers - Firefox for Android, Safari on iOS

For more details visit [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)

## License

MIT
## Issues
 Raise issues here - [github/issues](https://github.com/BruceArmstrong007/SIXE/issues)

