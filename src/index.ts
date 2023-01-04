import { postData } from './postData';
import { getData } from './getData';
const Greeter = (name: string) => `Hello ${name}`;
postData('This is a title', 'This is a body', 101);
getData();
// console.log(Greeter("Hemant"));
export {Greeter,postData,getData}
