import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
// import {But} from "./5_1.jsx"
// import {App} from "./6_1.jsx"
// import {App} from "./7_1(usestate_hook).jsx"
// import {App} from "./8_1.jsx"
// import {App} from "./9_1(useEffect).jsx"
// import {App} from "./10_1(useLayoutEffect).jsx"
// import {App} from "./11_1(useRef).jsx"
// import {App} from "./12_1.jsx"
// import {App} from "./13_2(useQuery).jsx"
// import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from "./Redux/2/app/store"
import { App } from './App.jsx'
import { fetchUser } from "./Redux/2/features/users/userSlice.js";

// store.dispatch(fetchUser());
// const queryClient = new QueryClient();

// module-4
// React.createElement("name of the element" , {properties} , "children of the tag")
// for example
//  const ABS = React.crreateElement('div' ,{} , ["hello" , {different element}])

// const RootInsideRoot = React.createElement('div', { className: "class-2" }, "hello-2");
// const root = (
//     <div className="class-1">
//         hello
//         {RootInsideRoot}
//     </div>
// );f

// module-5
// const root = (
//     <But/>
// )

// function onRender(id,phase,actualDuration , baseDuration , startTime, commitTime){
//     console.log(commitTime);
// }

// module-6,7,8, useState , useEffect , 
const root = (
    // <Profiler id="App" onRender={onRender}>
        // <App >
        //     <App.method1></App.method1>
        // </App>
    // </Profiler>
    // <QueryClientProvider client={queryClient}>
    // <Provider store={store} >
        <App />
    // </Provider>
    // </QueryClientProvider>
);


const body = ReactDOM.createRoot(document.getElementById('body'));
body.render(root);
