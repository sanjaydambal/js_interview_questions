let testArray = [1, 2, 3];
testArray = [4, 5, 6];
console.log(testArray);



const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  };
  fetchData();

  const fetchData1 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/100001");

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data) {
            throw new Error("Data not found");
        } else {
            console.log(data);
        }

    } catch (err) {
        console.log(err.message);
    }
};

fetchData1();
