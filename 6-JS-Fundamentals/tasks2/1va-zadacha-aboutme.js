document.body.style.fontFamily = 'Arial, sans-serif';
    document.getElementById('nickname').textContent = 'Ivac';
    document.getElementById('favorites').textContent = 'Going out';
    document.getElementById('hometown').textContent = 'Ruse';
    
    let list = document.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++) {
       list[i].className = 'listitem';
    }

    let picOfMe = document.createElement('img');
    picOfMe.src = "../../images/Ruse.jpg"; //nqmam nikakvi moi snimki na laptopa
    document.body.appendChild(picOfMe);