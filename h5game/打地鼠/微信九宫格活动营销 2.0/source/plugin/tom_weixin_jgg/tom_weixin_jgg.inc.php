<?php

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
define('TPL_DEFAULT', true);
session_start();
$tomhash = mt_rand(111111, 999999);
$_SESSION['tomhash'] = $tomhash;
$jggConfig = $_G['cache']['plugin']['tom_weixin_jgg'];
$tomSysOffset = getglobal('setting/timeoffset');
$nowDayTime = gmmktime(0,0,0,dgmdate($_G['timestamp'], 'n',$tomSysOffset),dgmdate($_G['timestamp'], 'j',$tomSysOffset),dgmdate($_G['timestamp'], 'Y',$tomSysOffset)) - $tomSysOffset*3600;

$appid = $jggConfig['jgg_appid'];  
$appsecret = $jggConfig['jgg_appsecret']; 
include DISCUZ_ROOT.'./source/plugin/tom_weixin_jgg/weixin.class.php';
$weixinClass = new weixinClass($appid,$appsecret);
$wxJssdkConfig = $weixinClass->get_jssdk_config();

$act_id = isset($_GET['act_id'])? intval($_GET['act_id']):0;
$page   = isset($_GET['page'])? intval($_GET['page']):1;

$jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($act_id);
if(!$jggInfo){
    $jggList = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_all_list("","ORDER BY id DESC",0,1);
    $jggInfo = $jggList['0'];
}
$act_id = $jggInfo['id'];

$cookieUid = getcookie('tom_wx_jgg_user_actid'.$act_id);
if(isset($_SESSION['tom_wx_jgg_user_actid'.$act_id]) && !empty($_SESSION['tom_wx_jgg_user_actid'.$act_id])){
    $cookieUid = $_SESSION['tom_wx_jgg_user_actid'.$act_id];
}
$uid = 0;
$userInfo = array();
$show_box = 1;
if($cookieUid){
    $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($cookieUid);
    if($userInfo && $userInfo['activity_id'] == $act_id){
        $uid = $userInfo['id'];
        $show_box = 2;
    }
}

if($show_box == 1 && $jggInfo['type'] == 3){
    $show_box = 5;
}

if(TIMESTAMP > $jggInfo['end_time']){
    $show_box = 3;
}

if(TIMESTAMP < $jggInfo['start_time']){
    $show_box = 4;
}

$jgg_start_time = dgmdate($jggInfo['start_time'],"Y-m-d H:i",$tomSysOffset);
$jgg_end_time = dgmdate($jggInfo['end_time'],"Y-m-d H:i",$tomSysOffset);
$allTimes = $jggInfo['cj_times'];
$useTimes = 0;
$zjStatus = 0;
$noTimesMessage = lang('plugin/tom_weixin_jgg','no_times_message');
$zjMessage = lang('plugin/tom_weixin_jgg','zj_message');
if($jggInfo['type'] == 1 && $uid){
    $useTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$uid} AND time_id = {$nowDayTime} ");
    $zjPrizeListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} AND user_id = {$uid} AND time_id = {$nowDayTime} ","ORDER BY id ASC",0,50);
    if($zjPrizeListTmp){
        $zjStatus = 1;
    }
    $noTimesMessage = lang('plugin/tom_weixin_jgg','no_times_message1');
    $zjMessage = lang('plugin/tom_weixin_jgg','zj_message1');
}else if ($jggInfo['type'] == 2 && $uid){
    $useTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$uid} ");
    $zjPrizeListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} AND user_id = {$uid} ","ORDER BY id ASC",0,50);
    if($zjPrizeListTmp){
        $zjStatus = 1;
    }
    $noTimesMessage = lang('plugin/tom_weixin_jgg','no_times_message2');
    $zjMessage = lang('plugin/tom_weixin_jgg','zj_message2');
}else if ($jggInfo['type'] == 3 && $uid){
    $allTimes = 1;
    $useTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$uid} ");
    $noTimesMessage = lang('plugin/tom_weixin_jgg','no_times_message3');
    $zjMessage = lang('plugin/tom_weixin_jgg','zj_message3');
}
$csContent = "";
$syTimes = $allTimes - $useTimes;
if($zjStatus > 0){
    $syTimes = 0;
}
if($jggInfo['type'] == 1){
    $csContent = $jggConfig['mt_content'];
}else{
    $csContent = $jggConfig['hd_content'];
}
$csContent = str_replace("{start_time}",$jgg_start_time,$csContent);
$csContent = str_replace("{end_time}",$jgg_end_time,$csContent);
$csContent = str_replace("{allTimes}",$allTimes,$csContent);
$csContent = str_replace("{useTimes}",$useTimes,$csContent);
$csContent = str_replace("{syTimes}",$syTimes,$csContent);

require_once libfile('function/discuzcode');
$csContent = discuzcode($csContent, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0);

//require_once libfile('function/discuzcode');
//$jgg_content = discuzcode($jggInfo['content'], 0, 0, 0, 1, 1, 1, 0, 0, 0, 0);
$jgg_content = stripslashes($jggInfo['content']);

$prizeList = array();
for($i=1;$i<=7;$i++){
    $prizeList[$i] = array(
        'prize_no'      => 0,
        'prize_title'   => lang('plugin/tom_weixin_jgg','prize_kong'),
        'prize_desc'    => lang('plugin/tom_weixin_jgg','prize_kong_desc'),
        'prize_num'     => 0,
        'prize_pic'     => 'source/plugin/tom_weixin_jgg/images/prize_00.png',
        'prize_chance'  => 0,
    );
}
$prizeList[8] = array(
        'prize_no'      => 0,
        'prize_title'   => lang('plugin/tom_weixin_jgg','prize_xinyun'),
        'prize_desc'    => lang('plugin/tom_weixin_jgg','prize_xinyun_desc'),
        'prize_num'     => 0,
        'prize_pic'     => 'source/plugin/tom_weixin_jgg/images/ths.png',
        'prize_chance'  => 0,
    );
$prizeListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_all_list(" AND activity_id = {$act_id} ","ORDER BY prize_no ASC",0,50);
if(is_array($prizeListTmp) && !empty($prizeListTmp)){
    foreach ($prizeListTmp as $key => $value) {
        if(!preg_match('/^http:/', $value['prize_pic']) ){
            $prize_pic = (preg_match('/^http:/', $_G['setting']['attachurl']) ? '' : $_G['siteurl']).$_G['setting']['attachurl'].'common/'.$value['prize_pic'];
        }else{
            $prize_pic = $value['prize_pic'];
        }
        if(isset($prizeList[$value['prize_no']])){
            $prizeList[$value['prize_no']] = $value;
            $prizeList[$value['prize_no']]['prize_pic'] = $prize_pic;
        }
    }
}

$ajaxCjUrl = $_G['siteurl']."plugin.php?id=tom_weixin_jgg:ajax&act=cj&act_id={$act_id}&user_id={$uid}&tomhash={$tomhash}&formhash=".FORMHASH;
$ajaxScoreUrl = $_G['siteurl']."plugin.php?id=tom_weixin_jgg:ajax&act=score&act_id={$act_id}&user_id={$uid}&tomhash={$tomhash}&formhash=".FORMHASH;

$myZjList = array();
if($uid){
    $myZjListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} AND user_id={$uid} "," ORDER BY id DESC ",0,50);
    if(is_array($myZjListTmp) && !empty($myZjListTmp)){
        foreach ($myZjListTmp as $key => $value){
            $prizeInfoTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($value['prize_id']);
            if($prizeInfoTmp['prize_chance'] != 0){
                $myZjList[$key] = $value;
                $myZjList[$key]['time'] = dgmdate($value['zl_time'],"Y-m-d H:i",$tomSysOffset);
                $myZjList[$key]['prize_title'] = $prizeInfoTmp['prize_title'];
                $myZjList[$key]['prize_desc'] = $prizeInfoTmp['prize_desc'];
                $myZjList[$key]['prize_type'] = $prizeInfoTmp['prize_type'];
                $myZjList[$key]['prize_id'] = $prizeInfoTmp['id'];
            }
        }
    }
}

$pagesize = 15;
$start = ($page-1)*$pagesize;
$zjListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} "," ORDER BY id DESC ",$start,$pagesize);
$zjListCount = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_count(" AND activity_id = {$act_id} ");
$zjList = array();
if(is_array($zjListTmp) && !empty($zjListTmp)){
    foreach ($zjListTmp as $key => $value){
        $userInfoTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($value['user_id']);
        $prizeInfoTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($value['prize_id']);
        if($prizeInfoTmp['prize_chance'] != 0){
            $zjList[$key] = $value;
            $zjList[$key]['time'] = dgmdate($value['zl_time'],"Y-m-d H:i",$tomSysOffset);
            $zjList[$key]['tel'] = substr($userInfoTmp['tel'], 0, 3)."****".substr($userInfoTmp['tel'], -4);
            $zjList[$key]['prize_title'] = $prizeInfoTmp['prize_title'];
        }
    }
}
$showNextPage = 1;
if(($start + $pagesize) >= $zjListCount){
    $showNextPage = 0;
}

$allPageNum = ceil($zjListCount/$pagesize);

$prePage = $page - 1;
$nextPage = $page + 1;
$prePageUrl = "plugin.php?id=tom_weixin_jgg&act_id={$act_id}&page={$prePage}";
$nextPageUrl = "plugin.php?id=tom_weixin_jgg&act_id={$act_id}&page={$nextPage}";

if(!preg_match('/^http:/', $jggInfo['share_logo']) ){
    $jgg_share_logo = (preg_match('/^http:/', $_G['setting']['attachurl']) ? '' : $_G['siteurl']).$_G['setting']['attachurl'].'common/'.$jggInfo['share_logo'];
}else{
    $jgg_share_logo = $jggInfo['share_logo'];
}
$shareTitle = $jggInfo['share_title'];
$shareDesc = $jggInfo['share_desc'];
$shareLogo = $jgg_share_logo;
$wbShareUrl = $_G['siteurl']."plugin.php?id=tom_weixin_jgg&act_id={$act_id}";
$shareUrl = $_G['siteurl']."plugin.php?id=tom_weixin_jgg&act_id={$act_id}";
$ajaxPyqUrl = $_G['siteurl']."plugin.php?id=tom_weixin_jgg:ajax&act=share&fs=1&act_id={$act_id}&user_id={$uid}&tomhash={$tomhash}&formhash=".FORMHASH;
$ajaxHyUrl  = $_G['siteurl']."plugin.php?id=tom_weixin_jgg:ajax&act=share&fs=2&act_id={$act_id}&user_id={$uid}&tomhash={$tomhash}&formhash=".FORMHASH;

# from
$showGuanzu = 0;
$mustGuanzu = 0;
if(isset($_GET['from']) && ($_GET['from']=='singlemessage' || $_GET['from']=='timeline')){
    if($jggConfig['show_guanz']){
        $showGuanzu = 1;
    }
    if($jggConfig['must_gz']){
        $mustGuanzu = 1;
    }
}
if(!empty($userInfo)){
    $showGuanzu = 0;
}
$guanzu_descTmp = $jggConfig['guanzu_desc'];
if(!empty($jggInfo['guanzu'])){
    $guanzu_descTmp = $jggInfo['guanzu'];
}

require_once libfile('function/discuzcode');
$guanzu_desc = discuzcode($guanzu_descTmp, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0);

# zf
$mustZf = 0;
if(!empty($userInfo) && $userInfo['zf_status']==0){
    if($jggConfig['must_zf']){
        $mustZf = 1;
    }
}

$formhash = FORMHASH;
$isGbk = false;
if (CHARSET == 'gbk') $isGbk = true;
if(strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') === false && $jggConfig['must_weixin'] == 1) {
    include template("tom_weixin_jgg:weixin"); 
}else{
    include template("tom_weixin_jgg:index"); 
}



?>
