<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"/>  
  <div xid="div5" style="position:absolute; width:100%; height:100%; z-index:-1"> 
    <img alt="" xid="image2" style="width:100%;" height="100%" src="./img/background_draw_prize.png"/> 
  </div>  
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver"
    xid="popOver" dismissible="false"> 
    <div class="x-popOver-overlay" xid="div6"/>  
    <div class="x-popOver-content" xid="div7" style="background-color:transparent;"> 
      <div xid="div2" style="border-radius:20px;background-color:white;margin:10px;"> 
        <img src="./img/prize_top.gif" alt="" xid="image1" height="100%" style="width:100%;"/>  
        <div xid="div4" style="height:50px;text-align:center;"> 
          <span xid="info" style="text-align:center;font-size:xx-large;font-family:楷体;"><![CDATA[恭喜获奖]]></span> 
        </div>  
        <div xid="div1" style="height:50px;text-align:center;"> 
          <span xid="prize" style="text-align:center;font-size:x-large;font-family:楷体;"><![CDATA[奖品是]]></span>
        </div>
        <div xid="divAgain" style="text-align:center;">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link"
            label="再摇一次" xid="btnAgain" onClick="btnAgainClick"> 
            <i xid="i1"/>  
            <span xid="span1">再摇一次</span>
          </a>
        </div>
        <img src="./img/prize_bottom.gif" alt="" xid="image3" height="100%"
          style="width:100%;"/> 
      </div> 
    </div> 
  </div>  
  <img src="./img/rock.png" alt="" xid="imgRock" style="height:80px;width:80px;position:absolute;bottom:10px;right:10px;"
    bind-click="imgRockClick"/>  
  <audio xid="huojiangMedia">
    <source src="./mp3/huojiang.mp3"/>
  </audio>  
  <audio xid="kachaMedia">
    <source src="./mp3/kacha.mp3"/>
  </audio> 
</div>
