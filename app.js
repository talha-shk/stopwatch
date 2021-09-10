let hr = 0, min = 0, sec = 0, milisec = 0;

let state = false;

let minvar = document.getElementById("min");
let mintxtvar = document.getElementById("mintxt");
let hrvar = document.getElementById("hr");
let hrtxtvar = document.getElementById("hrtxt");

let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
hide();

function start() {
    state = true;
    stopwatch();
    milisecfnc();

}

function stop() {
    state = false;
}

function reset() {
    state = false; hr = 0; min = 0; sec = 0; milisec = 0;

    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    startbtn.style.display = "inline";
    stopbtn.style.display = "inline";
    hide();
}

function milisecfnc() {
    if (state == true) {
        var milstr = milisec;
        milisec = milisec + 1;
        if (milisec <= 10) {

            milstr = "0" + milstr;
        }
        setTimeout("milisecfnc()", 10);
        if (milisec == 100) {
            milisec = 0;
        }


        document.getElementById("milisec").innerHTML = milstr;
    }
}

function stopwatch() {

    if (state == true) {

        var hrstr = hr;
        var minstr = min;
        var secstr = sec;

        sec = sec + 1;

        if (hr <= 10) {
            hrstr = "0" + hrstr;
        }

        if (min <= 10) {
            minstr = "0" + minstr;
        }
        if (sec <= 10) {
            secstr = "0" + secstr;
        }

        if (sec == 60) {
            min = min + 1; milisec = 0; sec = 0;

            minvar.style.display = "inline";
            mintxtvar.style.display = "inline";
        }

        if (min == 60) {
            hr = hr + 1; milisec = 0; sec = 0; min = 0;
            hrvar.style.display = "inline";
            hrtxtvar.style.display = "inline";

        }

        setTimeout("stopwatch()", 1000);

        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("hr").innerHTML = hrstr;

    }

}