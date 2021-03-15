const jokecontent = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click',jokeload);

jokeload();

// function jokeload(){
    // const header = {
    //     headers: {
    //         Accept: 'application/json',
    //     },
//     }
//     fetch('https://icanhazdadjoke.com/', header).then((res) => res.json()).then((data)=> {
//         jokecontent.innerHTML = data.joke;
//     })
// }

async function jokeload(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    let res = await fetch('https://icanhazdadjoke.com/',config);
    
    let data = await res.json();
    // console.log(data);
    jokecontent.innerHTML = data.joke;
}