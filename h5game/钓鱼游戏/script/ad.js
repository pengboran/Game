if(!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)){

var AD_LINK = "http://h5.static.myappgame.com/common/ad/index.html";
var AD_IMG = "http://h5.appgame.com/wp-content/uploads/2016/06/h5outlink.jpg";

$.ajax({
  type: 'GET',
  url: location.href+'&action=ad',
  dataType: 'jsonp',
  jsonp: "callback",
  jsonCallback: 'jsonCallback',
  beforeSend: function() {
    // 鍙互鏄剧ずloading
  },
  success: function(data) {
    if(data.data[0].type==2){
      showAdvertise(2,data.data[0].url,data.data[0].image);
      }
    else if(data.data[0].type==1){
      showAdvertise(1);
      }
    else{
      document.getElementById("iframepage").style.display = 'block';
      }
  },
  error: function(error) {
    showAdvertise(2,AD_LINK,AD_IMG);
  }
});

var AD_TIME = 6;
var showAdvertise = function(type,url,img) {
  
  var loaddiv = document.createElement('div');
  loaddiv.style.cssText = 'position:fixed; z-index:999999; width:100%; height:100%; background-color:#000;';
  document.getElementById('mask').appendChild(loaddiv);

  var loaddvic = document.createElement('div');
  if(type==2){
    loaddvic.style.cssText = 'background-image:url('+img+'); position: absolute; z-index: -1; left: 50%; top: 0; width: 6.4rem; height: 100%; margin-left: -3.2rem; background-position: center center; background-repeat: no-repeat; background-size: cover;';
    }
  else{
    loaddvic.style.cssText = 'position: absolute; z-index: -1; left: 0; top: 0; width: 100%; height: 100%;';
    }
  loaddiv.appendChild(loaddvic);

  if(type==2){
    var wholea = document.createElement('a');
    wholea.setAttribute('href', url);
    wholea.setAttribute('target', '_blank');
    wholea.style.cssText = 'position:absolute; width:100%; height:100%; z-index:2;';
    loaddvic.appendChild(wholea);
  }
  
  if(type==1){
    var iframe = document.createElement('div');
    iframe.id = 'lmoutlink';
    iframe.innerHTML = document.getElementById('baiduiframe').innerHTML;
    //document.getElementById('baiduiframe').innerHTML = '';
    iframe.style.cssText = 'position: absolute; left: 50%; top: 50%; width: 100%; max-width:600px; max-height:500px; transform:translate3d(-50%,-50%,0); -webkit-transform:translate3d(-50%,-50%,0);';
    loaddvic.appendChild(iframe);
    
//    i.addEventListener('click',
//      function() {
//        window.open(AD_LINK,'_blank');
//      },
//      false);
    }

  var time = document.createElement('time');
  time.innerHTML = AD_TIME + ' 绉掑悗杩涘叆娓告垙';
  if(type==2){
    time.style.cssText = 'position: absolute; top: 0.2rem; right: 0.2rem; color: #fff; padding: 0.05rem 0.15rem; font-size: 0.24rem; filter: progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#7F000000", endColorstr="#7F000000"); background-color: rgba(0, 0, 0, 0.5); border-radius: 0.05rem;';
    }
  else{
    time.style.cssText = 'position: absolute; left: 0; top: 50%; margin-top: -3.44rem; width: 100%; font-size: 0.24rem; color: #bbb; text-align: center;';
    }
  loaddvic.appendChild(time);
  
//  var fasta = document.createElement('a');
//  fasta.innerHTML = '蹇€熻繘鍏�';
//  if(type==2){
//    fasta.style.cssText = 'position: absolute; bottom: 0.8rem; left: 50%; width: 1.62rem; height: 0.46rem; line-height: 0.46rem; margin-left: -0.8rem; border: 1px solid #fff; text-align: center; color: #fff; font-size: 0.24rem; box-sizing: border-box; -webkit-box-sizing: border-box;';
//    }
//  else{
//    fasta.style.cssText = 'position: absolute; left: 50%; top: 50%; margin: 3.2rem 0 0 -2.1rem; width: 4.2rem; height: 1rem; line-height: 1rem; border: 1px solid #fff; font-size: 0.3rem; color: #fff; text-align: center;';
//    }
//  loaddvic.appendChild(fasta);

//  wholea.addEventListener('click',
//  function() {
//    fasta.style.zIndex = 3;
//  },
//  false);

//  fasta.addEventListener('click',
//  function() {
//    loaddiv.style.display = 'none';
//    document.getElementById("iframepage").style.display = 'block';
//  },
//  false);

  var handler = null;
  var stoped = false;
  var update = function() {
    if(stoped){
      return;
      }
    AD_TIME -= 1;
    time.innerHTML = AD_TIME + ' 绉掑悗杩涘叆娓告垙';
    if (AD_TIME <= 0) {
      stoped = true;
      document.location.href = document.getElementById('gameLink').value;
      clearInterval(handler);
    }
  };
  $(document).ready(function() {
    handler = setInterval(update, 1000);
  })
};

} else {
  
  
$.ajax({
  type: 'GET',
  url: location.href+'&action=ad',
  dataType: 'jsonp',
  jsonp: "callback",
  jsonCallback: 'jsonCallback',
  beforeSend: function() {
    // 鍙互鏄剧ずloading
  },
  success: function(data) {
    console.log(data.data[0].type);
    if(data.data[0].type==2){
      showAdvertise(data.data[0].url,data.data[0].image);
      }
    else{
      document.getElementById("iframepage").style.display = 'block';
      }
  },
  error: function(error) {
    document.getElementById("iframepage").style.display = 'block';
  }
});
  
var AD_TIME = 8;
var showAdvertise = function(url,img) {
  
  var bodydiv = document.getElementById('body');

  var loadtxt = document.createElement('div');
  loadtxt.className = 'loading-text';
  bodydiv.appendChild(loadtxt);
  
  var loadtxtp = document.createElement('p');
  loadtxtp.innerHTML = '锛�<b>8</b>锛夋鍦ㄥ噯澶囪繘鍏ユ父鎴忊€︹€� <a title="蹇€熻繘鍏�">蹇€熻繘鍏�</a>';
  loadtxt.appendChild(loadtxtp);
  
  var adbox = document.createElement('a');
  adbox.setAttribute('href',url);
  bodydiv.appendChild(adbox);
  
  var adboximg = document.createElement('img');
  adboximg.src = img;
  adbox.appendChild(adboximg);

  var handler = null;
  var stoped = false;
  var update = function() {
    if(stoped){
      return;
      }
    AD_TIME -= 1;
    loadtxtp.innerHTML = '锛�<b>'+AD_TIME+'</b>锛夋鍦ㄥ噯澶囪繘鍏ユ父鎴忊€︹€� <a title="蹇€熻繘鍏�">蹇€熻繘鍏�</a>';
    if (AD_TIME <= 0) {
      stoped = true;
      bodydiv.style.display = 'none';
      document.getElementById("iframepage").style.display = 'block';
      clearInterval(handler);
    }
  };
  $(document).ready(function() {
    handler = setInterval(update, 1000);
  })
};  
}