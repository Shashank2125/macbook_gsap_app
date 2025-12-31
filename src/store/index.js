import { create } from "zustand";
//to set and reset the values according to product choosen
//in product section
const useMacbookStore=create((set)=>({
    color:'#2e2c2e',
    setColor:(color)=>set({color}),

    scale:0.08,
    setScale:(scale)=>set({scale}),

    reset:()=>set({color:'#2e2c3e',scale:0.08}),
}))
export default useMacbookStore;