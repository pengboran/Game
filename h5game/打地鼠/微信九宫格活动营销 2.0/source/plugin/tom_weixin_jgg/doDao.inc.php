<?php

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
$jggConfig = $_G['cache']['plugin']['tom_weixin_jgg'];
$act_id = isset($_GET['act_id'])? intval($_GET['act_id']):0;
$page   = isset($_GET['page'])? intval($_GET['page']):1;

$pagesize = 10000;
$start = ($page-1)*$pagesize;

$tomSysOffset = getglobal('setting/timeoffset');

if(isset($_G['uid']) && $_G['uid'] > 0 && $_G['groupid'] == 1){
    $zjListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} "," ORDER BY id DESC ",$start,$pagesize);
    $zjList = array();
    foreach ($zjListTmp as $key => $value) {
        $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($value['user_id']);
        $prizeInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($value['prize_id']);
        $zjList[$key]['xm'] = $userInfo['xm'];
        $zjList[$key]['tel'] = $userInfo['tel'];
        $zjList[$key]['prize_title'] = $prizeInfo['prize_title'];
        $zjList[$key]['prize_desc'] = $prizeInfo['prize_desc'];
        $zjList[$key]['zl_time'] = dgmdate($value['zl_time'],"Y-m-d H:i",$tomSysOffset);
        
        if($value['status'] == 0){
            $zjList[$key]['status'] = lang('plugin/tom_weixin_jgg','status_no');
        }else if($value['status'] == 1){
            $zjList[$key]['status'] = lang('plugin/tom_weixin_jgg','status_yes');
        }
        
    }

    $user_xm = lang('plugin/tom_weixin_jgg','user_xm');
    $user_tel = lang('plugin/tom_weixin_jgg','user_tel');
    $prize_title = lang('plugin/tom_weixin_jgg','prize_title');
    $prize_desc = lang('plugin/tom_weixin_jgg','prize_desc');
    $zl_time = lang('plugin/tom_weixin_jgg','zl_time');
    $dh_status = lang('plugin/tom_weixin_jgg','dh_status');

    //ob_end_clean();
    $listData[] = array($user_xm,$user_tel,$prize_title,$prize_desc,$zl_time,$dh_status); 
    foreach ($zjList as $v){
        $lineData = array();
        $lineData[] = $v['xm'];
        $lineData[] = $v['tel'];
        $lineData[] = $v['prize_title'];
        $lineData[] = $v['prize_desc'];
        $lineData[] = $v['zl_time'];
        $lineData[] = $v['status'];
        $listData[] = $lineData;
    }
    header("Content-Type: application/vnd.ms-excel");
    header("Content-Disposition:filename=exportJgg.xls");

    foreach ($listData as $fields){
        foreach ($fields as $k=> $v){
            $str = @diconv("$v",CHARSET,"GB2312");
            echo $str ."\t";
        }
        echo "\n";
    }
    exit;
}else{
    exit('Access Denied');
}

?>
