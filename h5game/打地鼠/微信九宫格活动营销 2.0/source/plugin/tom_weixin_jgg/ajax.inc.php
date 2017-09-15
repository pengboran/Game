<?php

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
session_start();
$jggConfig = $_G['cache']['plugin']['tom_weixin_jgg'];
$tomSysOffset = getglobal('setting/timeoffset');
$nowDayTime = gmmktime(0,0,0,dgmdate($_G['timestamp'], 'n',$tomSysOffset),dgmdate($_G['timestamp'], 'j',$tomSysOffset),dgmdate($_G['timestamp'], 'Y',$tomSysOffset)) - $tomSysOffset*3600;
$scoretype = 'extcredits1';
if(intval($jggConfig['score_type']) >= 1){
    $scoretype = 'extcredits'.$jggConfig['score_type'];
}

$formhash = isset($_GET['formhash'])? daddslashes($_GET['formhash']):'';
$tomhash = isset($_GET['tomhash'])? daddslashes($_GET['tomhash']):'';

if($_GET['act'] == 'add' && $formhash == FORMHASH && $_SESSION['tomhash'] == $tomhash){
    $_SESSION['tomhash'] = 0;
    $xm = isset($_GET['xm'])? daddslashes(diconv(urldecode($_GET['xm']),'utf-8')):'';
    $tel = isset($_GET['tel'])? daddslashes($_GET['tel']):'';
    $act_id = isset($_GET['act_id'])? intval($_GET['act_id']):'';
    
    if(empty($xm) || empty($tel)){
        echo 1;exit;
    }
    
    $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_act_id_tel($act_id,$tel);
    if($userInfo){
        $lifeTime = 86400*30;
        $_SESSION['tom_wx_jgg_user_actid'.$act_id] = $userInfo['id'];
        dsetcookie('tom_wx_jgg_user_actid'.$act_id,$userInfo['id'],$lifeTime);
    }else{
        $insertData = array();
        $insertData['activity_id']      = $act_id;
        $insertData['xm']               = $xm;
        $insertData['tel']              = $tel;
        $insertData['add_time']         = TIMESTAMP;
        C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->insert($insertData);
        $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_act_id_tel($act_id,$tel);
        if($userInfo){
            $lifeTime = 86400*30;
            $_SESSION['tom_wx_jgg_user_actid'.$act_id] = $userInfo['id'];
            dsetcookie('tom_wx_jgg_user_actid'.$act_id,$userInfo['id'],$lifeTime);
        }
    }
    echo 1;exit;
}else if($_GET['act'] == 'share'  && $formhash == FORMHASH && $_SESSION['tomhash'] == $tomhash){
    $_SESSION['tomhash'] = 0;
    $act_id = isset($_GET['act_id'])? intval($_GET['act_id']):'';
    $user_id = isset($_GET['user_id'])? intval($_GET['user_id']):0;
    $fs = isset($_GET['fs'])? intval($_GET['fs']):0;
    
    $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($user_id);
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($act_id);
    
    if($userInfo && $jggInfo && $jggInfo['id'] == $userInfo['activity_id']){
        $allowGetTimes = false;
        if($fs == 1 && $jggConfig['share_pyq'] == 1){
            $allowGetTimes = true;
        }
        
        if($allowGetTimes){
            if($jggInfo['type'] == 1){
                $shareTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_share')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$user_id} AND time_id = {$nowDayTime} ");
                if($shareTimes < $jggConfig['max_share']){
                    C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->delete_by_condition(" AND activity_id = {$act_id} AND user_id = {$user_id} AND time_id = {$nowDayTime} ");
                    $insertData = array();
                    $insertData['activity_id']     = $act_id;
                    $insertData['user_id']         = $user_id;
                    $insertData['share_time']      = TIMESTAMP;
                    $insertData['time_id']         = $nowDayTime;
                    C::t('#tom_weixin_jgg#tom_weixin_jgg_share')->insert($insertData);
                }
            }else if($jggInfo['type'] == 2){
                $shareTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_share')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$user_id} ");
                if($shareTimes < $jggConfig['max_share']){
                    C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->delete_by_condition(" AND activity_id = {$act_id} AND user_id = {$user_id} ");
                    $insertData = array();
                    $insertData['activity_id']     = $act_id;
                    $insertData['user_id']         = $user_id;
                    $insertData['share_time']      = TIMESTAMP;
                    $insertData['time_id']         = $nowDayTime;
                    C::t('#tom_weixin_jgg#tom_weixin_jgg_share')->insert($insertData);
                }
            }
        }
        if($userInfo['zf_status']==0){
            $updateData = array();
            $updateData['zf_status']     = 1;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->update($user_id,$updateData);
        }
    }
    echo 1;exit;
}else if($_GET['act'] == 'score' && $formhash == FORMHASH  && $_SESSION['tomhash'] == $tomhash){
    $_SESSION['tomhash'] = 0;
    $outArr = array(
        'status'=> 1,
    );
    
    $act_id = isset($_GET['act_id'])? intval($_GET['act_id']):0;
    $user_id = isset($_GET['user_id'])? intval($_GET['user_id']):0;
    $zj_id = isset($_GET['zj_id'])? intval($_GET['zj_id']):0;
    $prize_id = isset($_GET['prize_id'])? intval($_GET['prize_id']):0;
    $username = isset($_GET['username'])? daddslashes(diconv(urldecode($_GET['username']),'utf-8')):'';
    $password = isset($_GET['password'])? daddslashes($_GET['password']):'';
    
    loaducenter();
    $user = uc_user_login($username,$password,0);
    $bbsUid = 0;
    if($user['0'] > 0){
        $bbsUid = $user['0'];
    }else{
       $outArr['status'] = 100;
       echo json_encode($outArr); exit;
    }
    
    $zjInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_by_id($zj_id);
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($zjInfo['activity_id']);
    $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($zjInfo['user_id']);
    $prizeInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($zjInfo['prize_id']);
    
    if($zjInfo && $jggInfo && $userInfo && $prizeInfo){
        if($zjInfo['status'] == 0 && $prizeInfo['prize_type'] == 2 && $prizeInfo['prize_score']>0){
            $deductScore = 1 * $prizeInfo['prize_score'];
            updatemembercount($bbsUid , array($scoretype => $deductScore));

            $updateData = array();
            $updateData['status'] = 1;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->update($zj_id,$updateData);

            $outArr['status'] = 200;
            echo json_encode($outArr); exit;
        }
    }
    echo json_encode($outArr); exit;
    
}else if($_GET['act'] == 'pwd' && $formhash == FORMHASH  && $_SESSION['tomhash'] == $tomhash){
    $_SESSION['tomhash'] = 0;
    $outArr = array(
        'status'=> 1,
    );
    
    $act_id = isset($_GET['act_id'])? intval($_GET['act_id']):0;
    $user_id = isset($_GET['user_id'])? intval($_GET['user_id']):0;
    $zj_id = isset($_GET['zj_id'])? intval($_GET['zj_id']):0;
    $prize_id = isset($_GET['prize_id'])? intval($_GET['prize_id']):0;
    $prizepwd = isset($_GET['prizepwd'])? daddslashes($_GET['prizepwd']):'';
    
    $zjInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_by_id($zj_id);
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($zjInfo['activity_id']);
    $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($zjInfo['user_id']);
    $prizeInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($zjInfo['prize_id']);
    
    if($zjInfo && $jggInfo && $userInfo && $prizeInfo){
        if($zjInfo['status'] == 0 && $prizeInfo['prize_type'] == 1){
            if(isset($prizeInfo['part1']) && !empty($prizeInfo['part1'])){
                if($prizeInfo['part1'] == $prizepwd){
                    $updateData = array();
                    $updateData['status'] = 1;
                    C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->update($zj_id,$updateData);

                    $outArr['status'] = 200;
                    echo json_encode($outArr); exit;
                }
            }
        }
    }
    
    $outArr['status'] = 1;
    echo json_encode($outArr); exit;
    
}else if($_GET['act'] == 'cj' && $formhash == FORMHASH  && $_SESSION['tomhash'] == $tomhash){
    $_SESSION['tomhash'] = 0;
    $outArr = array(
        'status'=> 1,
        'prize' => 8,
    );
    
    $act_id = isset($_GET['act_id'])? intval($_GET['act_id']):0;
    $user_id = isset($_GET['user_id'])? intval($_GET['user_id']):0;
    
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($act_id);
    
    if(!$jggInfo){
        echo json_encode($outArr); exit;
    }
    
    if(TIMESTAMP > $jggInfo['end_time']){
        echo json_encode($outArr); exit;
    }
    
    if(TIMESTAMP < $jggInfo['start_time']){
        echo json_encode($outArr); exit;
    }
    
    $allTimes = $jggInfo['cj_times'];
    $useTimes = 0;
    $zjStatus = 0;
    if($jggInfo['type'] == 1 && $uid){
        $useTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$user_id} AND time_id = {$nowDayTime} ");
        $zjPrizeListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} AND user_id = {$user_id} AND time_id = {$nowDayTime} ","ORDER BY id ASC",0,50);
        if($zjPrizeListTmp){
            $zjStatus = 1;
        }
    }else if ($jggInfo['type'] == 2 && $uid){
        $useTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$user_id} ");
        $zjPrizeListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$act_id} AND user_id = {$user_id} ","ORDER BY id ASC",0,50);
        if($zjPrizeListTmp){
            $zjStatus = 1;
        }
    }else if ($jggInfo['type'] == 3 && $uid){
        $allTimes = 1;
        $useTimes = C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->fetch_all_count(" AND activity_id = {$act_id} AND user_id = {$user_id} ");
    }
    
    if($zjStatus){
        echo json_encode($outArr); exit;
    }
    
    if($useTimes >= $allTimes){
        echo json_encode($outArr); exit;
    }
    
    $prizeList = array();
    for($i=1;$i<=7;$i++){
        $prizeList[$i] = array(
            'prize_no'      => 0,
            'prize_title'   => lang('plugin/tom_weixin_jgg','prize_xinyun'),
            'prize_desc'    => lang('plugin/tom_weixin_jgg','prize_xinyun_desc'),
            'prize_num'     => 0,
            'prize_pic'     => 'source/plugin/tom_weixin_jgg/images/ths.png',
            'prize_chance'  => 0,
        );
    }
    $prizeListTmp = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_all_list(" AND activity_id = {$act_id} ","ORDER BY prize_no ASC",0,50);
    if(is_array($prizeListTmp) && !empty($prizeListTmp)){
        foreach ($prizeListTmp as $key => $value) {
            if(isset($prizeList[$value['prize_no']])){
                $prizeList[$value['prize_no']] = $value;
            }
        }
    }
    $prizeArr = array();
    foreach ($prizeList as $key => $value){
        if($value['prize_chance'] !== 0 && $value['prize_num']>0 ){
            $prizeArr[$key] = $value['prize_chance'];
        }
    }
    $prizeArr[8] = 10000 - array_sum($prizeArr);
    if($prizeArr[8] < 0){
        $prizeArr[8] = 0;
    }
    
    $randPrize = get_rand($prizeArr);
    
    if($randPrize <=8 && $randPrize>=1){
        if($prizeList[$randPrize]['prize_no'] > 0 && $prizeList[$randPrize]['id']  && $prizeList[$randPrize]['prize_num'] > 0  && $prizeList[$randPrize]['prize_chance'] != 0){
            $insertData = array();
            $insertData['activity_id']     = $act_id;
            $insertData['user_id']         = $user_id;
            $insertData['prize_id']        = $prizeList[$randPrize]['id'];
            $insertData['zl_time']         = TIMESTAMP;
            $insertData['time_id']         = $nowDayTime;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->insert($insertData);
            
            $updateData = array();
            $updateData['prize_num']       = $prizeList[$randPrize]['prize_num']-1;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->update($prizeList[$randPrize]['id'],$updateData);
            
            $insertData = array();
            $insertData['activity_id']     = $act_id;
            $insertData['user_id']         = $user_id;
            $insertData['log_time']        = TIMESTAMP;
            $insertData['time_id']         = $nowDayTime;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->insert($insertData);
            
        }else{
            $insertData = array();
            $insertData['activity_id']     = $act_id;
            $insertData['user_id']         = $user_id;
            $insertData['log_time']        = TIMESTAMP;
            $insertData['time_id']         = $nowDayTime;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->insert($insertData);
            
            $randPrize = 8;
        }

        $outArr = array(
            'status'    => 1,
            'prize'     => $randPrize,
        );
    }
    
    echo json_encode($outArr); exit;
}else{
    exit('Access Denied 101');
}

function get_rand($dataArr){ 
    $result = ''; 
    $dataSum = array_sum($dataArr); 
    $randNum = mt_rand(1, 10000); 
    foreach ($dataArr as $key => $dataCur) { 
        $nextSum = $dataSum-$dataCur;
        if($nextSum < $randNum && $randNum <= $dataSum) { 
            $result = $key; 
            break; 
        }
        $dataSum -= $dataCur;                     
    } 
    unset ($dataArr); 
    return $result; 
}

?>
