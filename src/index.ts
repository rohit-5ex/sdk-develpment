import { postData } from './postData';
import { getData } from './getData';
const Greeter = (name: string) => `Hello ${name}`;
const fetchData = getData;
fetchData();
const submitData = postData;
submitData('This is a title', 'This is a body', 101);
export { Greeter, submitData, fetchData };
