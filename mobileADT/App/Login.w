<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model1" style="left:6px;top:393px;height:46px;width:143px;">
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="userData" idColumn="username" autoNew="true">
  <column label="username" name="username" type="String" xid="default1"></column>
  <column label="userpass" name="userpass" type="String" xid="default2"></column>
  <column label="Sname" name="Sname" type="String" xid="default3"></column>
  <column label="Sarea" name="Sarea" type="String" xid="default4"></column>
  <column label="Sbrand" name="Sbrand" type="String" xid="default5"></column>
  <column label="Spower" name="Spower" type="String" xid="default6"></column>
  <column label="Sdepartment" name="Sdepartment" type="String" xid="default7"></column>
  </div>
  </div>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog" style="top:351px;left:78px;"></span>
  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content1" style="background-image:url(img/loginbg4.jpg);"><div xid="div1" style="margin:10px 50px 0px 50px;" align="center"><img src="img/a_c.png" alt="" xid="image1" height="150" style="height:111px;width:124px;"></img>
  </div>
  <div class="form-vertical" component="$UI/system/components/bootstrap/form/form" xid="form1"><div xid="div12" class="form-group" style="margin-right:auto;margin-left:auto;width:95%;">
  
  <label xid="label4" class="sr-only"><![CDATA[用户名]]></label>
  <div xid="div14" class="input-group"><div xid="div15" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="username" placeHolder="请输入用户名" bind-ref="userData.ref('username')"></input></div></div><div xid="div13" class="form-group" style="margin-right:auto;margin-left:auto;width:95%;">  <label xid="label5" class="sr-only"><![CDATA[密码]]></label>
  <div xid="div16" class="input-group"><div xid="div17" class="input-group-addon"><span class="glyphicon glyphicon-edit"></span></div>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="password" placeHolder="请输入密码" bind-ref="userData.ref('userpass')"></input>
  </div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn x-green btn-lg btn-block" xid="button1" onClick="btnCheckUserLogin" label="Sign In">
   <i xid="i1"></i>
   <span xid="span1">SiGn.IN</span></a></div>
   </div>
  <div xid="div3" style="margin:50px 20px 50px 20px;height:50px;text-align:center;"><span xid="span2" style="height:41px;"> © By:<a href="http://s163.cc">Chat.S163.Cc</a></span>
  </div>
  </div>
  
   <div id="aler"/> 
  
  </div>
  </div>