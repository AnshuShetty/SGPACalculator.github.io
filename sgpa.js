function validatesem(){
    const value = document.getElementById('box').value;
    if(value === '4'){
        console.log('1');
        window.open("4THSEM.html");
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

    const mat_cr = 3;
    const daa_cr = 4;
    const mes_cr = 4;
    const os_cr = 3;
    const bio_cr = 2;
    const kan_cr = 1;
    const uhv_cr = 1;
    const web_cr = 2;
    const py_cr = 2;
    total_cr = ((mat_cr*10)+(daa_cr*10)+(mes_cr*10)+(os_cr*10)+(bio_cr*10)+(kan_cr*10)+(uhv_cr*10)+(web_cr*10)+(py_cr*10));

    const matcr = cr(mat);
    const daacr = cr(daa);
    const mescr = cr(mes);
    const oscr = cr(os);
    const biocr = cr(bio);
    const kancr = cr(kan);
    const uhvcr = cr(uhv);
    const webcr = cr(weblab);
    const pycr = cr(python);
    console.log(matcr,pycr, daacr);
    total = ((matcr*3)+(daacr*4)+(mescr*4)+(oscr*3)+(biocr*2)+(kancr*1)+(uhvcr*1)+(webcr*2)+(pycr*2));
    var sgpa = total/total_cr*10;
    alert("SGPA: "+sgpa);
} 
function cr(a){
    if(a>=90 && a<=100){
        return 10;
    }
    else if(a>=80 && a<=89){
        return 9;
    }
    else if(a>=70 && a<=79){
        return 8;
    }
    else if(a>=60 && a<=69){
        return 7;
    }
    else if(a>=50 && a<=59){
        return 6;
    }
    else if(a>=40 && a<=49){
        return 5;
    }
    else{
        return 0;
    }
}
document.querySelector(".box").reset();
