const inputs = document.querySelectorAll ('input');
// console.log(inputs)

function handleUpdate() {
    // console.log(this.value);
    //console.log( this.dataset);
    const suffix = this.dataset.sizing || '';
    console.log(this.name);
    document.documentElement.style.setProperty("--" + this.name, this.value + suffix);
}

inputs.forEach(function(input){
    input.addEventListener('change', handleUpdate)
})

inputs.forEach(function(input){
    input.addEventListener('mousemove', handleUpdate)
})