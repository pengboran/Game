<?xml version="1.0" encoding="utf-8"?>
<!-- Model Data  Start-->
<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  
<!-- ModelLoad  Start-->
<div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="height:auto;left:314px;top:58px;"/> 
  
<!-- Panel -->
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" style="height:100%;width:100%;"> 
<!-- TOP DATA START-->  
<div class="x-panel-top" id ="top" > 
  <!-- TITLEBAR START-->
  <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="HiChats" style="background-color:#333333;">
    <!-- left . button ajax load  start-->
    <div class="x-titlebar-left" xid="div9" >
    <div center="left" id = "left">
    </div>
    </div>
    <!-- LEFT . BUTTON AJAX LOAD  END-->
    <!-- TITLEBAR -->
    <div class="x-titlebar-title" xid="div10" id = "tops">HiChats</div>
    <!-- RIGHT BUTTON  START-->
    <div class="x-titlebar-right reverse" xid="div11">
   	<div center="right" id = "right">
   	</div>
    </div>
    <!-- RIGHT BUTTON  END-->
  </div>
  <!-- TITLEBAR END-->
</div>  
<!-- TOP DATA END -->
  
  
  <!-- DATA LIST -->
<div class="x-panel-content" id = "show" style="background-color:#CCC;"> 

<!-- 右上角弹窗 start -->
<div id="panel" class="tip-bubble tip-bubble-top"></div>
<!-- 右上角弹窗 end -->



		
		

		
<div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="pages" slidable="true"  wrap="true" swipe="true">
  
<div class="x-contents-content" xid="Chats_View">
<!-- Chat ：ListFriend start-->
<ul data-role="listview" data-split-icon="delete" id ="listLiView">
	<!-- 
	数据格式 如下：
	<li onClick="index(this.id)" id="li1">	
	<img src="$UI/App/img/a_c.png" style="width: 70px; height: 70px" />
	<h3><a href="#page2">Mr_JianXinZhang</a></h3>
	<p>Msg</p>
	<p class="ui-li-aside">2012-02-25 21:37</p>
	<span class="ui-li-count">3</span>
	</li>
	 -->
</ul>
<!-- Chat ：ListFriend  End-->  
</div>

  <div class="x-contents-content" xid="Contacts_View">
  Contacts_View 
  </div>
  <div class="x-contents-content" xid="Discover_View">
  Discover_View
  </div>
  <div class="x-contents-content" xid="Me_View">
  Me_View
  </div>
  
  <div class="x-contents-content" xid="Msg_chat_View">
  <!-- Msg -Chat -->
  Msg_chat_View LOADING
  </div>
  
  </div>
  
  </div>  



<!-- DATA List End -->
    
    
    
    
    <!-- Active Buttom -->
    <div class="x-panel-bottom" xid="bottom1">
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified"
        tabbed="false" xid="buttonGroup1">
        
        <!-- start -->
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="Chats" xid="chats" icon="img:$UI/App/img/2.png" onClick="chats"> 
          <i xid="i1"/>  
          <img src="$UI/App/img/2.png"  style="width:30px; height:28px"    xid="image2"></img><span xid="span1">Chats</span>
        </a>  

        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="Contacts" xid="Contacts" icon="img:$UI/App/img/con1.png" onClick="Contacts" > 
          <i xid="i2"/>  
          <img src="$UI/App/img/con1.png"  style="width:30px; height:28px"     xid="image3"></img><span xid="span3">Contacts</span>
          </a>  
        
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top "
          label="Discover" xid="Discover" icon="img:$UI/App/img/tel1.png|" onClick="Discover"> 
          <i xid="i4"/>  
          <img src="$UI/App/img/tel1.png"  style="width:30px; height:28px"    xid="image1"></img><span xid="span4">Discover</span>
        </a>  
        
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="Me" xid="Me" icon="img:$UI/App/img/me1.png|" onClick="Me"> 
          <i xid="i5"/>  
          <img src="$UI/App/img/me1.png"  style="width:30px; height:28px"    xid="image4"></img><span xid="span5">Me</span>
        </a>
        <!-- end  -->
      </div>
    </div>
    <!-- end buttom -->
   
      <div id="aler"/> 
  
   </div> 
</div>
<!-- Model Data End-->