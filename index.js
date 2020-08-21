//Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Priya Sharma',
        age: 22,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Vinay Chopra',
        age: 21,
        city: 'Ahemdabad',
        language: 'JS',
        framework: 'Angular JS',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Dhruv Patil',
        age: 19,
        city: 'Kolkata',
        language: 'Php',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
        name: 'Anish Das',
        age: 24,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Kajal Pandey',
        age: 22,
        city: 'Pune',
        language: 'JS',
        framework: 'React JS',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    }
]

//CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++],done: false} : {done: true}
        }
    }
}
//Button listener for next listener
const next = document.getElementById('next');
const candidates = cvIterator(data);
nextCV();
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src=${currentCandidate.image}>`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Language known: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}