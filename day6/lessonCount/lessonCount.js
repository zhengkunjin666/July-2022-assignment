const Series = [
    {
        name: 'Web',
        courses: [
            {
                name: 'HTML',
                lessons: [
                    { name: 'HTML Lesson 1'},
                    { name: 'HTML Lesson 2'}
                ]
            },
            {
                name: 'CSS',
                lessons: [
                    { name: 'CSS Lesson 1'},
                    { name: 'CSS Lesson 2'}
                ]
            }
        ]
    },
    {
        name: 'PHP',
        courses: [
            {
                name: 'Linux',
                lessons: [
                    { name: 'Linux Lesson 1'}
                ]
            }
        ]
    }
];
// 计算每个系列下有多少门课
// return [{ name: 'Web', count: 4}, { name: 'PHP', count: 1}]

// 方法一：
function lessonCount(datas){
    return datas.map(elem => {return {name: elem.name,count: elem.courses.map(elem => elem.lessons.length).reduce((a,b) => a+b)}})
};
console.log(lessonCount(Series)); 
// 方法二：
// function lessonCount(datas){
//     return datas.map(elem => {
//         let counts=0;
//         for(let i=0;i<elem.courses.length;i++){
//             let count=elem.courses[i].lessons.length;
//             counts += count;
//         }
//         return {name: elem.name,count: counts};
//     });
// }
// console.log(lessonCount(Series));
// // 方法三：
// function lessonCount(datas){
//     return datas.map(elem => {
//         let counts=0;
//         elem.courses.forEach(elem => {
//             let count=elem.lessons.length;
//             counts +=count;
//         });
//         return {name: elem.name,count: counts};
//     });
// }
// console.log(lessonCount(Series));