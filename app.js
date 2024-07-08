// write code here
function truncate(str, length) {
    if (str.length > length){
        alert(str.slice(0,length)+ "...");
    } else {
        alert(str);
    }
}

truncate("What I'd like to tall on this topic is:", 20); // What I'd like to te...
truncate("Hi everyone!", 20); // Hi everyone!