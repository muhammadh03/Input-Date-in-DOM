var div = document.createElement('div');
div.style.textAlign = 'center';
div.style.marginTop = '150px'

let inputDate = document.createElement('input');
inputDate.setAttribute('type','date');
inputDate.id = 'dob';
inputDate.style.width = '30%';

let button = document.createElement('button');
button.setAttribute('type','button');
button.classList.add('btn', 'btn-primary');
button.innerHTML = 'Display Date';
button.style.margin = '10px';

let outPutDiv = document.createElement('div');

button.addEventListener('click', displayDate);
div.append(inputDate,button,outPutDiv);
document.body.append(div);


function displayDate(){
    let input = document.getElementById('dob').value;
    console.log(typeof(input));

    let birthDate = new Date(input);
    console.log(birthDate);

    let currentDate = new Date();
    console.log(currentDate);

    let milliSecondDiff = parseInt(currentDate.getTime())-parseInt(birthDate.getTime());
    console.log(`Millisecond: ${milliSecondDiff}`);

    let secondsDiff = Math.floor(milliSecondDiff/1000);
    console.log(`Seconds Diff: ${secondsDiff}`);

    let minutesDiff = Math.floor(secondsDiff/60);
    console.log(`Minutes Diff: ${minutesDiff}`);

    let hoursDiff = Math.floor(minutesDiff/60);
    console.log(`Hours Diff: ${hoursDiff}`);

    let daysDiff = Math.floor(hoursDiff/24);
    console.log(`Days Diff: ${daysDiff}`);

    let yearsDiff = currentDate.getFullYear()-birthDate.getFullYear();
    console.log(`Years Diff: ${yearsDiff}`);

    let monthsDiff = yearsDiff * 12 + ((currentDate.getMonth() + 1)-(birthDate.getMonth() + 1));
    console.log(`Months Diff: ${monthsDiff}`)

    outPutDiv.innerHTML = `
    Given Date is :- ${birthDate}<br>
    Year is :- ${yearsDiff}<br>
    Mont is :- ${monthsDiff}<br>
    Day is :- ${daysDiff}<br>
    Hour is :- ${hoursDiff}<br>
    Minutes is :- ${minutesDiff}<br>
    Seconds is :- ${secondsDiff}<br>
    MilliSeconds is :- ${milliSecondDiff}<br>`;
}