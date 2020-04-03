'use strict';

{
  const btn = document.getElementById('btn');
  const comment = document.getElementById('comment');

  btn.addEventListener('click',() => {
    // const results = ['大吉','中吉','凶','末吉'];
    // const results = ['大吉','中吉','凶','末吉'];
    // btn.textContent = results[Math.floor(Math.random()*results.length)];
    const n = Math.random();
    if(n<0.05){
      btn.textContent = '大吉';//5%
      comment.textContent = 'やりました！今日のあなたは絶好調！何をしても成功間違いなし！宝くじでも買っちゃいな！';
    }else if(n < 0.15){
      btn.textContent = '吉';//10%
      comment.textContent = '意外と知られていない『吉』の順位。\n実は大吉に次いで第２位！\n良いこと尽くめの1日！';
    }else if(n <0.4){
      btn.textContent = '中吉'//25%
      comment.textContent = 'ちょっと調子いいかなと感じる第３位！\n小さなHappyを大切に';
    }else if(n <0.65){
      btn.textContent = '小吉'//25%
      comment.textContent = 'ど真ん中第４位！\n平凡な日常こそ大切であると悟る1日になることでしょう';
    }else if(n <0.85){
      btn.textContent = '末吉'//20%
      comment.textContent = '崖っぷちギリギリ吉にしがみつく第５位\nこいつだけは離さぬように！ファイト一発！';
    }else if(n <0.95){
      btn.textContent = '凶'//10%
      comment.textContent = '崖から落ちたあなたは第６位\nこいつが大きくなる前に行動改革！';
    }else{
      btn.textContent = '大凶'//5%
      comment.textContent = 'まあそんな日もあるさ。\n確率で言うと５％の設定。\n大吉と同じ確率設定です。\nポジティブシンキング！';
    }
  });
}
