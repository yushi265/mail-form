(()=>{

const pics_src = ["rock.jpg","scissors.jpg","paper.jpg"];
const hands =['グー','チョキ','パー'];
const $doc = document;
const $dealer = $doc.getElementById('dealer');
const $navi = $doc.getElementById('navi');
const $setBtn = $doc.getElementById('set-btn').querySelector('button');

let round = 0;//ラウンド数
let score = 0;//勝利数

//初期表示
const init = () =>{

    $doc.getElementById('dealer-hand').style.display = 'none';
    $doc.getElementById('player').style.display = 'none';
    $navi.textContent = 'じゃんけんゲーム！！';
    $setBtn.style.display = 'inline-block';
    $setBtn.textContent = 'はじめる';
};


//判定関数
const judge = (playerChoise) =>{

    //ディーラーの手を決める
    const dealerChoise = Math.floor(Math.random()*3);

    //ディーラーがグーの時
    if(dealerChoise === 0){
        $doc.getElementById('dealer-hand').src = pics_src[0];
        if(playerChoise === '0'){
            $navi.textContent = hands[playerChoise]+'！あいこ！';
        }else if(playerChoise === '1'){
            $navi.textContent = hands[playerChoise]+'！あなたの負け！';
        }else{
            $navi.textContent = hands[playerChoise]+'！あなたの勝ち！';
            score++;
        }
    //ディーラーがチョキの時
    }else if(dealerChoise === 1){
        $doc.getElementById('dealer-hand').src = pics_src[1];
        if(playerChoise === '0'){
            $navi.textContent = hands[playerChoise]+'！あなたの勝ち！';
            score++;
        }else if(playerChoise === '1'){
            $navi.textContent = hands[playerChoise]+'！あいこ！';
        }else{
            $navi.textContent = hands[playerChoise]+'！あなたの負け！';
        }
    //ディーラーがパーの時
    }else if(dealerChoise === 2){
        $doc.getElementById('dealer-hand').src = pics_src[2];
        if(playerChoise === '0'){
            $navi.textContent = hands[playerChoise]+'！あなたの負け！';
        }else if(playerChoise === '1'){
            $navi.textContent = hands[playerChoise]+'！あなたの勝ち！';
            score++;
        }else{
            $navi.textContent = hands[playerChoise]+'！あいこ！';
        }
    }

    round++;
    console.log('round',round);
    
};

//ゲーム開始関数
const startGame = () =>{
    
    //イントロ表示
    $setBtn.addEventListener('click',()=>{
        console.log('click');
        $doc.getElementById('dealer-hand').style.display = 'inline-block';
        $doc.getElementById('player').style.display = 'inline-block';
        $setBtn.style.display = 'none';
        $navi.textContent = '最初はグー！じゃーんけん！  どれをだす？';
    
    });

    //プレイヤーが手を選ぶと判定へ
    let btnIndex = 0;
    while(btnIndex < 3){
        $doc.getElementById('player').querySelectorAll('img')[btnIndex].addEventListener('click',(e)=>{
            
            const $this = e.target;
            console.log($this);
            const playerChoise = $this.dataset.img;

            judge(playerChoise);
        });
        btnIndex++;
    };
};
    
//実行
init();
startGame();

})();