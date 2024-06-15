// 11. Give me combined education data along with id and name
// Output:  [{name: 'Hman', id: 1, qualification: [‘BCom’, 'Diploma' ]}]

const arr1 = [
    {age: 8,name: 'Hman', id: 1},
    {age: 9,name: 'Iman', id: 2},
    {age: 9.5,name: 'Kman', id: 3},
    {age: 10,name: 'Jman', id: 4},
]

const arr2 = [
    {id: 1, edu: 'Bcom'},
    {id: 1, edu: 'Diploma'},
    {id: 2, edu: 'Bsc'},
    {id: 2, edu: 'BA'},
    {id: 3, edu: 'Msc'},
    {id: 4, edu: 'Btech'},
]

const res = arr1.map((obj) => {
    delete obj.age;
    const id = obj.id;

    const qualification = arr2.reduce((acc,curr) => {
        if (curr.id === id) acc.push(curr.edu);
        return acc;
    }, [])

    obj.qualification = qualification;
    return obj;
});


console.log(res);


// const formatArr = arr1.map((obj) => {
//     delete obj.age;
//     return obj;
// })