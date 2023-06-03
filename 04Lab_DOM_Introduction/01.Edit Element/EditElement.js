function editElement(ref, match, replaceText) {
    //get the text  //document.getElementById('e1')
    let text = ref.textContent;

    // crete regex to match all elements by word pattern!
    let regex = new RegExp(match, 'g');

    //by limitation cannot use replaceAll() ! 
    let result = text.replace(regex, replaceText);

    // back to ref text (.getElementById('e1')) and attach new changed Text! last row is changed DOM
    ref.textContent = result;
    //console.log(text);
}