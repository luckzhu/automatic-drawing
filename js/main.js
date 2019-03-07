let duration = 10

let styleContent = `
.canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 340px;
    background-color: rgb(241, 241, 241);
    position: relative;
    overflow: hidden;
}

.head {
    width: 260px;
    height: 460px;
    background: linear-gradient(to right, rgba(201, 171, 80, 1) 0%, rgba(254, 230, 134, 1) 30%, rgba(254, 230, 134, 1) 70%, rgba(201, 171, 80, 1) 100%);
    border-radius: 130px/130px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.tenia {
    width: 260px;
    height: 30px;
    background-color: rgb(38, 38, 38);
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.75);
}

.tenia::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: black;
    position: absolute;
    top: 15px;
}

.glasses {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgb(140, 140, 140);
    border: 1px solid black;
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 1px 6px 18px -1px rgba(0, 0, 0, 0.75);
}

.glasses::after {
    content: '';
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: rgb(255, 231, 131);
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.eyewhite {
    width: 110px;
    height: 85px;
    border-radius: 80px/60px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 40%, rgba(218, 218, 218, 1) 70%);
    position: absolute;
    top: 106px;
    left: 50%;
    transform: translateX(-50%);
}

.eyewhite>.eyeball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(96, 65, 22);
    position: absolute;
    top: 22.5px;
    left: 50%;
    transform: translateX(-50%);
}

.eyewhite>.eyeball::after {
    content: '';
    width: 18px;
    height: 18px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 0px 28px 9px rgba(125, 94, 48, 1);
}

.eyehighlight {
    z-index: 1;
    width: 6px;
    height: 7px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 9px;
    right: 50%;
}

.mouth {
    width: 90px;
    height: 30px;
    border: 1px solid;
    border-color: black transparent transparent transparent;
    border-radius: 40px/15px;
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translateX(-50%);
}
`

writeCode('', styleContent, () => {
    console.log('完了')
})

function writeCode(precontent, content, fn) {
    let domCode = document.querySelector('#code')
    let myStyle = document.querySelector('#myStyle')
    let n = 0
    let id = setTimeout(function run() {
        n = n + 1
        domCode.innerHTML = precontent + content.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        myStyle.innerHTML = content.substring(0, n)
        if (n <= content.length) {
            setTimeout(run, duration)
        } else {
            window.clearInterval(id)
            fn()
        }

    }, duration);
}