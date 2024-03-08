export default function cx(...classes : Array<string | boolean |undefined>){
     let newClasees = [];

     for(let c of classes){
        if(typeof c === "string"){
            newClasees.push(c.trim());
        }
     }
     return newClasees.join(" ");
}