import {estimationCostFromTime} from "../dist";

let data = estimationCostFromTime({
    data : {
        hours : 2,
        day : 4
    },
    settings : {
        hours : {
            cost : 3000,
            costMax : 9000
        },
        day : {
            cost : 5000,
            costMax : 15000
        }
    }
})
console.log(data)