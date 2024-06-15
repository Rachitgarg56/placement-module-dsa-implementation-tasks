// Q2. 

let listData = [
    { id: 1, name: 'Discover Music' },
    { id: 2, pid: 1, name: 'Hot Singles' },
    { id: 3, pid: 1, name: 'Rising Artists' },
    { id: 4, pid: 1, name: 'Live Music' },
    { id: 6, pid: 1, name: 'Best of 2017 So Far' },
    { id: 7, name: 'Sales and Events' },
    { id: 8, pid: 7, name: '100 Albums' },
    { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
    { id: 10, pid: 7, name: 'CD Deals' },
    { id: 11, name: 'Categories' },
    { id: 12, pid: 11, name: 'Songs' },
    { id: 13, pid: 11, name: 'Best Selling Albums' },
    { id: 14, pid: 11, name: 'New Releases' },
    { id: 15, pid: 11, name: 'Best Selling Songs' },
    { id: 16, name: 'MP3 Albums'},
    { id: 17, pid: 16, name: 'Rock' },
    { id: 18, pid: 16, name: 'Gospel' },
    { id: 19, pid: 16, name: 'Latin Music' },
    { id: 20, pid: 16, name: 'Jazz' },
    { id: 21, name: 'More in Music' },
    { id: 22, pid: 21, name: 'Music' },
    { id: 22, pid: 21, name: 'Music Trade-In' },
    { id: 23, pid: 21, name: 'Redeem a Gift Card' },
    { id: 24, pid: 21, name: 'Band T-Shirts' },
]
    
// new array with those objects, whose not having 'pid' key
const noPidArr = listData.filter((obj) => {
    return obj.pid === undefined;
});

const res = noPidArr.map((obj) => {
    const id = obj.id;
    // const filtered = listData.filter((obj) => {
    //     return obj.pid === id;
    // })
    const childs = listData.reduce((acc,curr) => {
        if (curr.pid === id) {
            acc.push(curr);  
        }
        return acc;
    }, []);

    obj.childs = childs;

    return obj;

});

console.log(res);


// o/p format- { id: 1, name: 'Discover Music', childs:[
// { id: 2, pid: 1, name: 'Hot Singles' },
// { id: 3, pid: 1, name: 'Rising Artists' },
//  { id: 4, pid: 1, name: 'Live Music' },
//  { id: 6, pid: 1, name: 'Best of 2017 So Far' },
// ] }
    

