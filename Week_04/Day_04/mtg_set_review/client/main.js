document.querySelector(".submit").addEventListener("submit", (e)=> {
    e.preventDefault();
    let new_name = document.querySelector(".submit-input").value;
    let new_set = {
        set_name: new_name
    }
    axios.post("http://www.localhost:8000/api/sets", new_set)
        .then( res => {
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        })
})