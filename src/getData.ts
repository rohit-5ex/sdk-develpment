import fetch from 'node-fetch';
export async function getData() {
  await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((e: any) => {
      return e;
    });
}
// export default getData;
