var rs, input;

function setup() {
    noCanvas();
    input = createInput();
    input.changed(rita);
}

function rita() {
    var str = input.value();
    rs = RiString(str);
    var words = rs.words();
    var pos = rs.pos();
    for (var i = 0; i<words.length; i++){
        var spn = createSpan(words[i] + " ");
        if(pos[i] === 'nn'){
            spn.style('color','purple');
        }
    }
    console.log(pos);
}