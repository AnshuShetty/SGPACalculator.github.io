function openCGPA(){
  window.open("CGPA.html", "_blank");
}

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}


function calculateSGPA(){
    const credits = [];
  const scores = [];

  // Get all input fields with class 'box'
  const inputFields = document.querySelectorAll('.box');

  // Loop through input fields and separate credits and scores
  inputFields.forEach((field) => {
    if (field.id.startsWith('cr')) {
      credits.push(parseFloat(field.value));
    } else if (field.id.startsWith('sr')) {
      scores.push(field.value);
    }
  });

  // Calculate total credits
  const totalCr = credits.reduce((a, b) => a + b, 0);

  // Calculate total score
  const totalScore = scores.reduce((a, b, index) => a + (cr(b) * credits[index]), 0);

  // Calculate SGPA
  const sgpa = totalScore / totalCr;

  // Display result
  // alert(`SGPA: ${sgpa.toFixed(2)}`);
  const answer = document.querySelector('#result');
  answer.style.display = 'block';
  answer.innerHTML = `SGPA: ${sgpa.toFixed(2)}`;
  answer.style.backgroundColor = 'yellow';
  answer.style.color = 'black';

}
function cr(a){
    if(a>=90 && a<=100){
        return 10;
    }
    else if(a>=80 && a<90){
        return 9;
    }
    else if(a>=70 && a<80){
        return 8;
    }
    else if(a>=60 && a<70){
        return 7;
    }
    else if(a>=50 && a<60){
        return 6;
    }
    else if(a>=45 && a<50){
        return 5;
    }
    else if(a>=40 && a<45){
        return 4;
    }
    else{
        return 0;
    }
}
let counter = 9; //start from 9 since there is already 8 input boxes
function addInputBox(){
    const rowContainer = document.querySelector(".new-row");
    const newRow = document.createElement("div");
    newRow.className = "row";

    const newCol1 = document.createElement("div");
    newCol1.className = "col";
    const newLabel1 = document.createElement("label");
    newLabel1.textContent = `21XXY${counter}`;
    const newCreditInput = document.createElement("input");
    newCreditInput.type = "number";
    newCreditInput.className = "box";
    newCreditInput.id = 'cr${counter}';
    newCreditInput.placeholder = "Credit";
    newCol1.appendChild(newLabel1);
    newCol1.appendChild(newCreditInput);
    
    const newCol2 = document.createElement("div");
    newCol2.className = "col";
    const newLabel2 = document.createElement("label");
    newLabel1.textContent = `21XXY${counter}`;
    const newScoreInput = document.createElement("input");
    newScoreInput.type = "number";
    newScoreInput.className = "box";
    newScoreInput.id = 'sr${counter}';
    newScoreInput.placeholder = "Score";
    newCol1.appendChild(newLabel2);
    newCol1.appendChild(newScoreInput);

    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);

    rowContainer.append(newRow);

    counter++;
}

function calculateVtuCgpa() {
  const sgpas = [];
  for (let i = 0; i < 8; i++) {
      const semester = document.querySelector(`#sem${i+1}`);
      const sgpa = parseFloat(semester.value); // use the value property instead of textContent
      if (!isNaN(sgpa)) { // check if the parsed value is a number
          sgpas.push(sgpa);
      }
  }

  const totalSemesters = sgpas.length;
  if (totalSemesters > 0) {
      const CGPA = sgpas.reduce((a, b) => a + b, 0) / totalSemesters;
      console.log(CGPA.toFixed(2)); // display CGPA with 2 decimal places
      const cgpadisplay = document.querySelector('.cgpadisp');
      cgpadisplay.style.display = 'block';
  cgpadisplay.textContent = `CGPA: ${CGPA.toFixed(2)}`;
  } else {
      console.log("No valid SGPA entered.");
  }
  
  renderChart(sgpas);
}


function renderChart(sgpas){
  const ctx = document.getElementById('semesterChart').getContext('2d');
  const semesterLabels = sgpas.map((_,index)=>`semester ${index+1}`);
  const chart = new Chart(ctx, {
    type: 'bar',
    data : {
      labels: semesterLabels,
      datasets :[{
        label: 'Semester Marks',
        data: sgpas,
        backgroundColor: 'rgba(255, 215, 0, 0.8)',
        borderColor: 'rgba(255, 215, 0, 1)',
        borderWidth: 1
      }]
    },
    options:{
      scales:{
        y: {
          beginAtZero: true,
          max: 10,
          min: 0,
          title: 'Sem Progress'
        }
    }
  }
  });
}

const closeBtn = document.getElementById('close-btn');
const contactBtn = document.getElementById('contact-btn');
    const contactFormPopup = document.getElementById('contact-form-popup');
    const sendBtn = document.getElementById('send-btn');

    contactBtn.addEventListener('click', () => {
      contactFormPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      contactFormPopup.style.display = 'none';
    });

    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const templateId = 'template_4ukd00j'; // Your template ID

      emailjs.send('service_dh7llco', templateId, {
        name,
        email,
        message,
      })
      .then(() => {
        console.log('Email sent successfully!');
        contactFormPopup.style.display = 'none';
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
    });