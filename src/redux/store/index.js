import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

let counterInitialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
})

let authInitialState = {
    email: "",
    password: "",
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload
        },
        setPassword(state, action) {
            state.password = action.payload
        },
        signIn(state) {
            state.isAuthenticated = true;
        },
        signOut(state) {
            state.isAuthenticated = false;
        },
    }
});

// const counterReducer = (state = initialState, action) => {
//     if(action.type === "INCREMENT") {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     } else if (action.type === "DECREMENT") {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     } else if (action.type === "INCREMENTBY") {
//         return {
//             ...state,
//             counter: state.counter + action.count
//         }
//     } else if (action.type === "TOGGLE_COUNTER") {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }else {
//         return state
//     }
// }

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

const counterSubscriber = () => {
    const updatedState = store.getState();
    console.log("Updated State: " + JSON.stringify(updatedState));
}

store.subscribe(counterSubscriber);

// store.dispatch({ type: "INCREMENT" });

// store.dispatch({ type: "INCREMENT" });

// store.dispatch({ type: "NAVIN" });

// store.dispatch({ type: "DECREMENT" });

// store.dispatch({ type: "DECREMENT" });

export const authActions = authSlice.actions;

export const counterActions = counterSlice.actions;

export default store;
