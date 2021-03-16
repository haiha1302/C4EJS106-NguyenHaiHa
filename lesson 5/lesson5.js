// let huanRose = {
//     name: "Lùm xùm",
//     address: "Yên Bái",
//     age: 18,
//     isMarried: true,
//     favorites: ["Ối dồi ôi", "Giảng đạo"],
//     wife: {
//         name: "Conan",
//         age: 20,
//     },
//     earnMoney: function(){
//         console.log("Chỉ có làm mới có ăn!!!");
//     }
// };

// // thêm thuộc tính cho một object
// huanRose["weight"] = 60;
// huanRose.height = 180;
// huanRose.children = [
//     {name: "Child 1", age: 10},
//     {name: "Child 2", age: 12}
// ];

// console.log(huanRose);
// // sửa giá trị thuộc tính
// huanRose["name"] = "ĐB";
// huanRose.age = 31;
// console.log(huanRose);

// // xóa 1 thuộc tính
// delete huanRose.favorites;
// delete huanRose.address;
// console.log(huanRose);

// // duyệt object: bao nhiêu thuộc tính (giống duyệt mảng)
// for(let key in huanRose)
// {
//     console.log("Key " + key + ": " + huanRose[key]);
// }

// tạo 1 object là người yêu của các bạn gồm các thuộc tính: name, age, address, weight, height
/*
    name,
    age,
    address,
    weight,
    height,
    favorites: [],
    crush: {name, age, address},
    appearnce: []
*/
// let obj = {
//     name: "Trg",
//     age: 21,
//     address: "LTK",
//     weight: 45,
//     height: 159,
//     favorites: [
//         "Ăn",
//         "Ngủ"
//     ],
//     crush: {
//         name: "Lee MinHo",
//         age: 31,
//         address: "Korean"
//     },
//     appearnce: "Kute"
// };
// console.log(obj);

// let data = [
//     {id: 1, name: "Loan", age: 20, address: "HN"},
//     {id: 2, name: "Linh", age: 20, address: "HN"},
//     {id: 3, name: "Liên", age: 21, address: "TH"},
//     {id: 4, name: "Hồng", age: 40, address: "BN"},
//     {id: 5, name: "Hương", age: 32, address: "QT"},
//     {id: 6, name: "Hằng", age: 15, address: "HN"}
// ];
// console.log(data);

// // tìm object có id = 3
// console.log("id = 3");
// for(let person of data)
// {
//     if(person.id == 3)
//     {
//         console.log(person);
//     }
// };

// // tìm tên 1 người đầu tiên có tuổi = 20
// console.log("Tuổi = 20");
// // let _name = "";
// for(let person_age of data)
// {
//     if(person_age.age == 20)
//     {
//         console.log(person_age);
//         // _name = person_age.name
//         break;
//     }
// }

// // tìm địa chỉ của những người có tuổi lớn hơn 30
// console.log("Địa chỉ những người lớn hơn 30");
// for(let person_address of data)
// {
//     if(person_address.age > 30)
//     {
//         console.log(person_address);
//     }
// }
// // tìm tuổi những người có tên bắt đầu bằng chữ L
// console.log("Tuổi những người bắt đầu bằng L");
// for(let person_age_1 of data)
// {
//     if(person_age_1.name[0] == "L")
//     {
//         console.log(`${person_age_1.name}: ${person_age_1.age}`);
//     }
// }
// // cách 2
// let arr = [];
// for(let obj of data)
// {
//     let check = obj.name;
//     let x = check.startsWith("L", 0);
//     if(x == true)
//     {
//         arr.push(obj.age);
//     }
// }
// console.log(arr);

// for(let obj of data)
// {
//     if(obj.name.startsWith("L", 0))
//     {
//         console.log(obj.name);
//     }
// }

// let films = [
//     {
//         id: 1,
//         name: 'Film 1',
//         year: 2020,
//         actors: [
//             'Actor 1',
//             'Actor 2',
//             'Actor 3'
//         ]
//     },

//     {
//         id: 2,
//         name: 'Film 2',
//         year: 2019,
//         actors: [
//             'Actor 2',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 3,
//         name: 'Film 3',
//         year: 2021,
//         actors: [
//             'Actor 1',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 4,
//         name: 'Film 4',
//         year: 2021,
//         actors: [
//             'Actor 2',
//             'Actor 1',
//             'Actor 5'
//         ]
//     }
// ];

// 1. Tìm tên của các phim sản xuất nắm 2020
// for(let movies of films)
// {
//     if(movies.year == 2020)
//     {
//         console.log(movies.name);
//     }
// }

// 2. Nhập vào tên 1 diễn viên bất kỳ, tìm các phim có diễn viên đó tham gia => tìm trong mảng có tồn tại phần tử hay không
// let inputName = prompt("Nhập tên một diễn viên: ");
// // Cách 3:
// for(let film of films)
// {
//     if(film.actors.includes(inputName))
//     {
//         console.log(film);
//     }
// }

// Cách 2:
// for(let film of films)
// {
//     for(let actor of film.actors)
//     {
//         if(actor == inputName)
//         {
//             console.log(film);
//             break;
//         }
//     }
// }

// Cách 1:
// for(let film of films)
// {
//     let check = false;
//     for(let actorName_1 of film.actors)
//     {
//         if(actorName_1 == inputName)
//         {
//             check = true;
//         }
//     }
//     if (check)
//     {
//         console.log(film);
//     }
// }

// 3. Sắp xếp danh sách phim theo thứ tự năm sản xuất tăng dần
let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// bubble sort
// for(let i = 0; i <= nums.length - 1; i++)
// {
//     for(let j = 0; j < nums.length; j++)
//     {
//         if(nums[i] < nums[j])
//         {
//             let tmp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = tmp;
//         }
//     }
// }
// console.log(nums);
nums.sort();
console.log(nums);
