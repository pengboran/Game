<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="height:auto;left:105px;top:0px;"/> 
  
   
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1" id="top_css">
   
   <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="Chats" style="background-color:#333333;">
   <div class="x-titlebar-left" xid="div9">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-only-icon" label="button" xid="button1" style="height:30px;" onClick="backout" icon="img:$UI/App/img/ay1.png|">
     <img src="$UI/App/img/ay1.png" style="width: 27px; height: 27px" xid="image5"></img>
     <span xid="span9"></span></a> </div> 
   <div class="x-titlebar-title" xid="div10" id="tops">Chat</div>
   <div class="x-titlebar-right reverse" xid="div11">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-only-icon" label="button" xid="button1" style="height:30px;width:38px;" onClick="adds" icon="img:$UI/App/img/a9y.png|">
     <img src="$UI/App/img/a9y.png" style="width: 27px; height: 27px" xid="image5"></img>
     <span xid="span9"></span></a> </div> </div></div>
   
 <div class="x-panel-content" xid="content1">
   
<div id = "loadDown" style="width: auto; ">
<table style="width: auto; " border="0" id = "msgTableView">
  <!-- msgc caht s -->
  
 
</table>
 <a name="anchor"></a>
</div>
    
 </div>
   <div class="x-panel-bottom" xid="bottom1">
  <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup4">
   <div class="input-group-btn" xid="div12">
   <a component="$UI/system/components/justep/button/button" onClick="addActive" class="btn btn-default" label="+" xid="button13">
    <i xid="i12"></i>
    <span xid="span19">+</span></a> </div><input type="text" class="form-control" component="$UI/system/components/justep/input/input" id ="addmsg" xid="input13"></input>
  <div class="input-group-btn" xid="div8">
   <a component="$UI/system/components/justep/button/button" href="#anchor" onClick ="SetMsg" class="btn btn-default" label="发送" xid="button12">
    <i xid="i11"></i>
    <span xid="span18">发送</span></a> </div></div></div></div></div>