
/*
이벤트 전파
-버블링 > 부모한테 이벤트가 전파
-캡쳐링 > 자식한테 이벤트가 전파
*/
/*
target : 이벤트가 발생한 요소를 가르킴 , 실제 이벤트가 발생하는 요소
currentTarget : 이벤트 핸들러가 바인딩된 요소 ,addEventListener가 적용되는 요소

즉, target은부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환한다.
하지만 currentTarget은 이벤트가 부착된 부모의 위치를 반환한다.
*/

function setListenerTocard() {
    const cardAreaArr = document.querySelectorAll(".card-area");

    for (const cardArea of cardAreaArr) {
        cardArea.addEventListener("click", function (evt) {

            const temp = evt.currentTarget;

            temp.classList.toggle("flip");

            setTimeout(() => {
                temp.classList.toggle("flip");
            }, 3000);
        })
    }
}

const main = document.querySelector("main");
const num = 7

function generateCardList() {
    const cardCnt = document.querySelector("#cardCnt").value;

    if (cardCnt > 50) {
        alert("50 아래 숫자만 가능")
        return;

    }
    main.innerHTML = "";

    const cardContentArr = [];
    for (let i = 0; i < cardCnt; ++i) {
        cardContentArr.push(i);
    }
    const arr = cardContentArr.concat(cardContentArr);

    const reult = shuffleArr(arr);

    for (const temp of reult) {
        main.innerHTML +=
            `<div class="card-area">
                <div class="card">
                    <div class="card-back">${temp}</div>
                    <div class="card-front">?</div>
                </div>
            </div>`;
    }
}

function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function handleClick() {
    generateCardList();
    setListenerTocard();
}












