// Questions 1
arr1 = [{age: 8, name: 'Hman', id: 1}, {age: 9, name: 'Iman', id: 2}, {age: 9.5, name: 'Kman', id: 3}, {age: 10, name: 'Jman', id: 4}]

arr2 = [{id: 1, edu: 'BCom'}, {id: 1, edu: 'Diploma'}, {id: 2, edu: 'BSc'}, {id: 2, edu: 'BA'}, {id: 3, edu: 'MSc'}, 
        {id: 4, edu: 'BTech'}]

// Give me combined education data along with id and name
// Output:  [{name: 'Hman', id: 1, qualification: [‘BCom’, 'Diploma' ]}]


const res = arr1.map((ele) => {
    
    // extract id
    const id = ele.id;
    
    // objects with same id in arr2 
    const filtered = arr2.filter(obj => {
        return obj.id === id;
    })
    
    // qualification array
    const qualification = filtered.reduce((acc,curr) => {
        acc.push(curr.edu);
        return acc;
    }, []);

    delete ele.age;

    ele.qualification = qualification;

    return ele;
        
})

console.log(res);

