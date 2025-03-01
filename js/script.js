document.getElementById('desk').addEventListener("click", function () {
    window.location.href = './blogs.html'
})

let today = new Date();
let date = today.toDateString().split(" ");
document.getElementById('week').innerText = date[0]
document.getElementById('date').innerText = date[1] + ' ' + date[2] + ' ' + date[3];







let assigned = parseInt(document.getElementById('assigned').innerText);
let totalDone = parseInt(document.getElementById('totalDone').innerText)
const doneText = document.getElementById('totalDone')
const assignedText = document.getElementById('assigned')

const completedBtn = document.getElementsByClassName('completed')
const allTask = document.getElementsByClassName('task')
for (let i = 0; i < completedBtn.length; i++) {
    const completed = completedBtn[i];
    completed.addEventListener("click", function (event) {
        alert('Board updated Successfully')
        if(assigned===1){
            alert('congrates!!! You have completed all the current task')

        }
        completed.classList.remove('bg-blue-700')
        completed.classList.remove('text-white')
        completed.classList.add('bg-slate-400')
        completed.classList.add('text-black')
        assigned--
        assignedText.innerText = assigned
        totalDone++
        doneText.innerText = totalDone
        const task = allTask[i].innerText
        let currentTime = new Date()
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let period = (hours < 12) ? 'AM' : 'PM';

        let formattedHour = (hours % 12) || 12;
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        let time = `${formattedHour}:${formattedMinutes}:${formattedSeconds} ${period}`;

        const massage = document.createElement('div')
        massage.classList.add('bg-slate-200', 'p-3', 'rounded-md', 'space-y-3', 'mt-3')
        massage.innerHTML = `<p>You have completed the task
       ${task} at ${time}</p>
      `
        document.getElementById('activity').appendChild(massage)

        document.getElementById('clear').addEventListener('click',function(){
           
            document.getElementById('activity').innerHTML=" "
        })
        completed.setAttribute('disabled', true)

    });
}

function color() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

document.getElementById('theme-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = color();
});