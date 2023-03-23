class Mobile {
    battery;
    message;
    messageTo;
    messageSent;
    onOffMobile;
    constructor(battery, onOffMobile, messageTo, messageSent, ) {
        this.battery = battery;
        this.onOffMobile = onOffMobile;
        this.messageTo = messageTo;
        this.messageSent = messageSent;

    }
    getOnOfMobile() {
        return this.onOffMobile;
    }
   onOff() {
        if(this.onOffMobile === true) {
            this.onOffMobile = false;
        }
        else {
            this.onOffMobile = true;
        }
    }
    chargeBattery() {
        alert("Đang sạc pin");
        this.battery = 100;
        alert("Pin đã " + this.battery + "%");
    }
    texting(message) {
        this.message = message; //soạn tin nhắn
    }

    getMessageTo() {
        return this.messageTo;
    }

    getMessageSent() {
        return this.messageSent;
    }
}


let messageTo = ["xin chào"];
let messageSent = ["hello"];
let mobilePhone = new Mobile(20, true, messageTo, messageSent);
// console.log(mobilePhone.battery);
// mobilePhone.chargeBattery();
// console.log(mobilePhone.battery);

function checkMobile() {
    if(mobilePhone.getOnOfMobile() === true) {
        alert("Điện thoại đang bật");
    }
    else {
        alert("Điện thoại đang tắt");
    }
}

function onOffMobile() {
    mobilePhone.onOff();
}

function charge() {
    mobilePhone.chargeBattery();
}

mobilePhone.getMessageTo();
mobilePhone.getMessageSent();

