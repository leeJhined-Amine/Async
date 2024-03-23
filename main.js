//TASK 1
async function iterateWithAsyncAwait(kareem) {
    for (const ramadan of kareem) {
      console.log(ramadan);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
let damn = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(damn);

//TASK 2
async function awaitCall() {
    const promise = new Promise(resolve => {
      const data = { message: "Data fetched from API" };
      setTimeout(() => resolve(data), 1000);
    });
    const response = await promise;
    console.log(response);
}  

//TASK 3
async function awaitCall() {
    try {
      const promise = new Promise(resolve => {
        const data = { message: "Data fetched from API" };
        resolve(data);
      });
      const response = await promise;
      console.log("API call successful:"+ response);
    } 
    catch (error) {
      console.error("ra7t internet :o :"+ error.message);
    }
}

//TASK 4
async function concurrentRequests() {
  const promise1 = fetch('https://api.example.com/data1');
  const promise2 = fetch('https://api.example.com/data2');
  try {
    const [response1, response2] = await Promise.all([promise1, promise2]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    const combinedData = { ...data1, ...data2 };
    console.log("Combined results:"+ combinedData);
  } 
  catch (error) {
    console.error("Error during requests:"+ error.message);
  }
}

//TASK 5
async function parallelCalls(urls) {
    try {
      const promises = urls.map(url => fetch(url));
      const responses = await Promise.all(promises);  
      const data = await Promise.all(responses.map(async response => await response.json()));
      console.log("Data from requests:"+ data);
    } 
    catch (error) {
      console.error("Error during parallel requests:"+ error.message);
    }
}