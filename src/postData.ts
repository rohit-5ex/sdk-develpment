import fetch from 'node-fetch';
export async function postData(title: any, body: any, userId: any) {
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) =>
      response
        .json()
        .then((data) => {
          //   console.log('Success:', data)
          return data;
        })
        .catch((error) => {
          //   console.error('Error:', error)
          return error;
        }),
    )
    .catch((err) => {
      //   console.error('err:', err)
      return err;
    });
}

// export default postData;
