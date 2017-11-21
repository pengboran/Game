<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:193px;top:109px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="dTemp" idColumn="isSuccess" autoNew="true">
      <column name="isSuccess" type="Boolean" xid="xid4"/>
    </div>
    <div component="$UI/system/components/justep/data/baasData" autoLoad="false"
      xid="dQuestion" queryAction="queryQuestion" saveAction="saveQuestion" url="/justep/prize"
      tableName="question" idColumn="fID">
      <column label="fID" name="fID" type="String" xid="default3"></column>
  <column label="fBatch" name="fBatch" type="String" xid="default7"></column>
  <column label="fName" name="fName" type="String" xid="default8"></column>
  <column label="fType" name="fType" type="String" xid="default9"></column>
  <column isCalculate="true" name="fAnswer" type="String" xid="xid1"></column></div>  
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      xid="dOption" queryAction="queryOptions" saveAction="saveOptions" url="/justep/prize"
      tableName="options" idColumn="fID">
      <column label="fID" name="fID" type="String" xid="default10"/>  
      <column label="fQuestionID" name="fQuestionID" type="String" xid="default11"/>  
      <column label="fName" name="fName" type="String" xid="default12"/>  
      <master xid="default32" data="dQuestion" relation="fQuestionID"/>
    </div>  
    <div component="$UI/system/components/justep/data/baasData" autoLoad="false"
      xid="dUser" queryAction="queryUser" saveAction="saveUser" url="/justep/prize"
      tableName="user" idColumn="fID">
      <column label="fID" name="fID" type="String" xid="default13"/>  
      <column label="fBatch" name="fBatch" type="String" xid="default14"/>  
      <column label="fWeixinID" name="fWeixinID" type="String" xid="default15"/>  
      <column label="fName" name="fName" type="String" xid="default16"/>  
      <column label="fPhone" name="fPhone" type="String" xid="default17"/>  
      <column label="fCompany" name="fCompany" type="String" xid="default18"/>  
      <column label="fEmail" name="fEmail" type="String" xid="default19"/>  
      <column label="fPrize1" name="fPrize1" type="String" xid="default20"/>  
      <column label="fPrize2" name="fPrize2" type="String" xid="default21"/>  
      <column label="fPrize3" name="fPrize3" type="String" xid="default22"/>  
      <column label="fAwardFlag" name="fAwardFlag" type="String" xid="default23"/>
    </div>  
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      xid="dAnswer" queryAction="queryAnswer" saveAction="saveAnswer" url="/justep/prize"
      tableName="answer" idColumn="fID" confirmDelete="false">
      <column label="fID" name="fID" type="String" xid="default28"/>  
      <column label="fUserID" name="fUserID" type="String" xid="default29"/>  
      <column label="fQuestionID" name="fQuestionID" type="String" xid="default30"/>  
      <column label="fOptionID" name="fOptionID" type="String" xid="default31"/>  
      <master xid="default33" data="dUser" relation="fUserID"/>
    </div>
  </div>  
  <div xid="div5" style="position:absolute; width:100%; height:100%; z-index:-1">
    <img src="./img/background.png" alt="" xid="image2" style="width:100%;"
      height="100%"/>
  </div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="调查问卷"
        class="x-titlebar" style="background-color: transparent;"> 
        <div class="x-titlebar-left"/>  
        <div class="x-titlebar-title">调查问卷</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div xid="div6" style="padding: 0px 50px;">
        <div component="$UI/system/components/justep/output/output" class="x-output"
          xid="output1" bind-ref="dQuestion.ref('fName')" style="color:#FFFFFF;font-size:large;"/>
        <span component="$UI/system/components/justep/select/checkboxGroup"
          class="x-checkbox-group x-checkbox-group-vertical" xid="checkboxGroup1"
          bind-itemset="dOption" bind-itemsetValue="ref('fID')" bind-itemsetLabel="ref('fName')"
          bind-ref="dQuestion.ref('fAnswer')" style="color:#FFFFFF;font-size:x-small;"
          itemStyle="margin: 15px 0;" bind-visible=" $model.dQuestion.val(&quot;fType&quot;)  == '多选'"/>
        <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group x-radio-group-vertical"
          xid="radioGroup1" bind-ref="dQuestion.ref('fAnswer')" bind-itemset="dOption"
          bind-itemsetValue="ref('fID')" bind-itemsetLabel="ref('fName')" bind-visible=" $model.dQuestion.val(&quot;fType&quot;)  == '单选'"
          style="color:#FFFFFF;font-size:x-small;" itemStyle="margin: 15px 0;"/>
        <div xid="div2" style="padding: 5px 0;">
          <a component="$UI/system/components/justep/button/button" class="btn x-yellow btn-icon-left"
            label="上一题" xid="btnPrev" onClick="{operation:'dQuestion.prevRow'}" icon="icon-arrow-left-a"
            bind-visible=" $model.dQuestion.getCurrentRow() !=  $model.dQuestion.getFirstRow()"
            bind-disable="$model.dTemp.val(&quot;isSuccess&quot;)" style=""> 
            <i xid="i1" class="icon-arrow-left-a"/>  
            <span xid="span1">上一题</span>
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn x-yellow btn-icon-right"
            label="下一题" xid="btnNext" icon="icon-arrow-right-a" style="float: right;"
            bind-visible=" $model.dQuestion.getCurrentRow() !=  $model.dQuestion.getLastRow()"
            onClick="btnNextClick"> 
            <i xid="i2" class="icon-arrow-right-a"/>  
            <span xid="span2">下一题</span>
          </a>
        </div> 
      </div>
      <div xid="div1" style="margin-top: 10px;padding:5px 50px;border:solid thin #FFFFFF; "
        bind-visible="$model.dQuestion.getCurrentRow() ==  $model.dQuestion.getLastRow()"> 
        <div component="$UI/system/components/justep/row/row" class="x-row x-row-center"
          xid="row1"> 
          <div class="x-col x-col-fixed" xid="col1" style="width:50px;"> 
            <span xid="span4"><![CDATA[姓名*]]></span>
          </div>  
          <div class="x-col" xid="col2"> 
            <input component="$UI/system/components/justep/input/input" class="form-control input-sm"
              xid="input1" bind-ref="dUser.ref('fName')" maxLength="50"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row x-row-center"
          xid="row2"> 
          <div class="x-col x-col-fixed" xid="col4" style="width:50px;"> 
            <span xid="span5"><![CDATA[手机*]]></span>
          </div>  
          <div class="x-col" xid="col5"> 
            <input component="$UI/system/components/justep/input/input" class="form-control input-sm"
              xid="input2" bind-ref="dUser.ref('fPhone')" required="required" maxLength="11"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row x-row-center"
          xid="row4"> 
          <div class="x-col x-col-fixed" xid="col8" style="width:50px;"> 
            <span xid="span6"><![CDATA[单位]]></span>
          </div>  
          <div class="x-col" xid="col9"> 
            <input component="$UI/system/components/justep/input/input" class="form-control input-sm"
              xid="input3" bind-ref="dUser.ref('fCompany')" maxLength="50"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row x-row-center"
          xid="row5"> 
          <div class="x-col x-col-fixed" xid="col10" style="width:50px;"> 
            <span xid="span7"><![CDATA[邮件]]></span>
          </div>  
          <div class="x-col" xid="col11"> 
            <input component="$UI/system/components/justep/input/input" class="form-control input-sm"
              xid="input4" bind-ref="dUser.ref('fEmail')" maxLength="50"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row3"> 
          <div class="x-col" xid="col3"/>  
          <div class="x-col x-col-fixed" xid="col6" style="width:120px;">
            <a component="$UI/system/components/justep/button/button" class="btn x-green btn-icon-right"
              label="提交问卷" xid="btnSave" icon="icon-android-checkmark" style="float: right;width:100%;"
              bind-visible=" $model.dQuestion.getCurrentRow() ==  $model.dQuestion.getLastRow()"
              onClick="btnSaveClick" bind-disable="$model.dTemp.val(&quot;isSuccess&quot;)"> 
              <i xid="i3" class="icon-android-checkmark"/>  
              <span xid="span3">提交问卷</span>
            </a>
          </div>  
          <div class="x-col" xid="col7"/>
        </div>
      </div> 
    </div> 
  </div>
</div>
