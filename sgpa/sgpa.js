function validatesem(){
    const value = document.getElementById('box').value;
    if(value === '4'){
        console.log('1');
        // window.open("4THSEM.html");
        window.location.href = "sgpa/4THSEM.html";
    }
    else if(value === '3'){
        console.log('0');
        window.location.href = "sgpa/3RDSEM.html";
    }
    else{
        alert("This is only for 3rd and 4th sem!");
    }
}
function sgpacalc(){
    const mat = document.querySelector('#mat').value;
    const daa = document.querySelector('#daa').value;
    const mes = document.querySelector('#mes').value;
    const os = document.querySelector('#os').value;
    const bio = document.querySelector('#bio').value;
    const uhv = document.querySelector('#uhv').value;
    const kan = document.querySelector('#kannada').value;
    const weblab = document.querySelector('#web').value;
    const python = document.querySelector('#python').value;
    const internship = document.querySelector('#intern').value;

    const mat_cr = 3;
    const daa_cr = 4;
    const mes_cr = 4;
    const os_cr = 3;
    const bio_cr = 2;
    const kan_cr = 1;
    const uhv_cr = 1;
    const web_cr = 1;
    const py_cr = 1;
    const inter_cr = 2;
    total_cr = ((mat_cr)+(daa_cr)+(mes_cr)+(os_cr)+(bio_cr)+(kan_cr)+(uhv_cr)+(web_cr)+(py_cr)+(inter_cr));

    const matcr = cr(mat);
    const daacr = cr(daa);
    const mescr = cr(mes);
    const oscr = cr(os);
    const biocr = cr(bio);
    const kancr = cr(kan);
    const uhvcr = cr(uhv);
    const webcr = cr(weblab);
    const pycr = cr(python);
    const Intercr = cr(internship);
    console.log(matcr,pycr, daacr);
    total = ((matcr*3)+(daacr*4)+(mescr*4)+(oscr*3)+(biocr*2)+(kancr*1)+(uhvcr*1)+(webcr*1)+(pycr*1)+(Intercr*2));
    var sgpa = total/total_cr;
    alert("SGPA: "+sgpa.toFixed(2));
    const answer = document.querySelector('#result');
    answer.innerHTML="SGPA: "+sgpa.toFixed(2);
    answer.style.backgroundColor = 'yellow';
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

function calcsgpa(){
    const math = document.querySelector('#math').value;
    const dsa = document.querySelector('#dsa').value;
    const ade = document.querySelector('#ade').value;
    const co = document.querySelector('#co').value;
    const oop = document.querySelector('#oop').value;
    const uhv = document.querySelector('#uhv').value;
    const cip = document.querySelector('#cip').value;
    const aec = document.querySelector('#aec').value;

    const math_cr = 3;
    const dsa_cr = 4;
    const ade_cr = 4;
    const co_cr = 3;
    const oop_cr = 1;
    const uhv_cr = 1;
    const cip_cr = 1;
    const aec_cr = 1;

    third_total_cr = ((math_cr*10)+(dsa_cr*10)+(ade_cr*10)+(co_cr*10)+(oop_cr*10)+(cip_cr*10)+(uhv_cr*10)+(aec_cr*10));

    const mathcr = cr(math);
    const dsacr = cr(dsa);
    const adecr = cr(ade);
    const cocr = cr(co);
    const oopcr = cr(oop);
    const cipcr = cr(cip);
    const uhvcr = cr(uhv);
    const aeccr = cr(aec);
    console.log(mathcr, dsacr);
    third_total = ((mathcr*3)+(dsacr*4)+(adecr*4)+(cocr*3)+(oopcr*1)+(cipcr*1)+(uhvcr*1)+(aeccr*1));
    var third_sgpa = third_total/third_total_cr*10;
    alert("SGPA: "+third_sgpa.toFixed(2));
    const ans = document.querySelector('#result');
    ans.innerHTML="SGPA: "+third_sgpa.toFixed(2);
    ans.style.backgroundColor = 'yellow';
} 