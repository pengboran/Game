<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:545px;left:219px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="people" idColumn="name"><column label="姓名" name="name" type="String" xid="xid1"></column>
  <column label="手机" name="mobile" type="String" xid="xid2"></column>
  <column label="组织" name="org" type="String" xid="xid3"></column>
  <column label="主页" name="web" type="String" xid="xid4"></column>
  <column label="地址" name="adr" type="String" xid="xid5"></column>
  <column label="邮箱" name="email" type="String" xid="xid6"></column>
  <column label="座机" name="tel" type="String" xid="xid7"></column>
  <column label="职位" name="title" type="String" xid="xid8"></column>
  <data xid="default1">[{}]</data>
  <rule xid="rule1">
   <col name="name" xid="ruleCol1">
    <required xid="required1">
     <expr xid="default2">$row.val(&quot;name&quot;)</expr>
     <message xid="default5">请输入姓名（必填项）</message></required> </col> 
   <col name="mobile" xid="ruleCol2">
    <required xid="required2">
     <expr xid="default3">$row.val(&quot;mobile&quot;)</expr>
     <message xid="default4">请输入手机号（必填项）</message></required> </col> </rule>
  <master xid="default6" data="people"></master></div></div> 
   
  <div xid="div4" class="show-page"><div xid="div1" style="text-align:center;" class="qrcode-wrp">
    <img src="" alt="二维码名片" xid="output" height="256px" style="width:256px;" class="cd-img"></img></div><div xid="div2" style="text-align:center;padding-top:20px;">
    <h4 xid="h42">长按二维码识别，一键存到手机通讯录。</h4>
    <h4 xid="h41">点右上角可以将二维码名片分享给朋友</h4>
    <a component="$UI/system/components/justep/button/button" class="btn btn-default no-radius" label="制作二维码名片" xid="replyBtn" style="margin-top:15px;display:block;margin:0 35px;" onClick="reply">
     <i xid="i2"></i>
     <span xid="span2" style="font-size:16px;">制作二维码名片</span></a> </div></div><div xid="div3" class="input-page"><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row3" style="margin-left:15px;margin-right:15px;">
    <div class="col col-xs-12" xid="col7">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
      <label class="x-label" xid="label1" bind-text='$model.people.label("name")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input3" bind-ref='$model.people.ref("name")'></input></div> </div> 
    <div class="col col-xs-12" xid="col13">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
      <label class="x-label" xid="label2" bind-text='$model.people.label("mobile")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input4" bind-ref='$model.people.ref("mobile")'></input></div> </div> 
    <div class="col col-xs-12" xid="col14">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
      <label class="x-label" xid="label3" bind-text='$model.people.label("org")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input5" bind-ref='$model.people.ref("org")'></input></div> </div> 
    <div class="col col-xs-12" xid="col15">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
      <label class="x-label" xid="label4" bind-text='$model.people.label("web")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input6" bind-ref='$model.people.ref("web")'></input></div> </div> 
    <div class="col col-xs-12" xid="col16">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
      <label class="x-label" xid="label5" bind-text='$model.people.label("adr")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input7" bind-ref='$model.people.ref("adr")'></input></div> </div> 
    <div class="col col-xs-12" xid="col17">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
      <label class="x-label" xid="label6" bind-text='$model.people.label("email")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input8" bind-ref='$model.people.ref("email")'></input></div> </div> 
    <div class="col col-xs-12" xid="col18">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
      <label class="x-label" xid="label7" bind-text='$model.people.label("tel")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input9" bind-ref='$model.people.ref("tel")'></input></div> </div> 
    <div class="col col-xs-12" xid="col19">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8">
      <label class="x-label" xid="label8" bind-text='$model.people.label("title")' style="width:50px;"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input10" bind-ref='$model.people.ref("title")'></input></div> </div> </div><div component="$UI/system/components/bootstrap/row/row" class="row" xid="row5" style="margin-right:15px;margin-left:15px;margin-top:30px;">
    <div class="col col-xs-12" xid="col21">
     <a component="$UI/system/components/justep/button/button" class="btn btn-default no-radius" label="生成二维码名片" xid="creatBtn" style="width:100%;" onClick="creatQrcode">
      <i xid="i1"></i>
      <span xid="span1" style="font-size:16px">生成二维码名片</span></a> </div> </div></div></div>