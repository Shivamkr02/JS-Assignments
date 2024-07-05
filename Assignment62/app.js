function changecolor(ref){
    switch(ref.nextSibling.nodeValue.trim())
    {
        case 'Red' :
            document.body.bgColor='red';
            break;
        case 'Green' :
            document.body.bgColor = 'green';
            break;
        case 'Blue' :
            document.body.bgColor = 'blue';
            break;
    }
}