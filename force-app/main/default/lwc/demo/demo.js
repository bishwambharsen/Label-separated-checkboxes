import { LightningElement } from "lwc";

export default class Demo extends LightningElement {
    countries = [{
            name: "USA",
            states: ["Alabama", "Nebraska", "Wisconsin"]
        },
        {
            name: "Canada",
            states: ["Ottawa", "Ontario"]
        }
    ];
}