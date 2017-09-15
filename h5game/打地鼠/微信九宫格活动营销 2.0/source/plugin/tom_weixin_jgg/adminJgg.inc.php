<?php
if(!defined('IN_DISCUZ') || !defined('IN_ADMINCP')) {
	exit('Access Denied');
}

$tomSysOffset = getglobal('setting/timeoffset');

include DISCUZ_ROOT.'./source/plugin/tom_weixin_jgg/tom.func.php';

$pluginScriptLang = $scriptlang['tom_weixin_jgg'];
$jggBaseUrl = ADMINSCRIPT.'?action=plugins&operation=config&do='.$pluginid.'&identifier=tom_weixin_jgg&pmod=adminJgg'; 
$jggListUrl = 'action=plugins&operation=config&do='.$pluginid.'&identifier=tom_weixin_jgg&pmod=adminJgg';
if($_GET['act'] == 'add'){
    if(submitcheck('submit')){
        $title          = isset($_GET['title'])? addslashes($_GET['title']):'';
        $type           = isset($_GET['type'])? intval($_GET['type']):1;
        $cj_times       = isset($_GET['cj_times'])? intval($_GET['cj_times']):5;
        $start_time     = isset($_GET['start_time'])? addslashes($_GET['start_time']):'';
        $start_time     = strtotime($start_time);
        $end_time       = isset($_GET['end_time'])? addslashes($_GET['end_time']):'';
        $end_time       = strtotime($end_time);
        $content        = isset($_GET['content'])? addslashes($_GET['content']):'';
        $guanzu         = isset($_GET['guanzu'])? addslashes($_GET['guanzu']):'';
        $share_title    = isset($_GET['share_title'])? addslashes($_GET['share_title']):'';
        $share_desc     = isset($_GET['share_desc'])? addslashes($_GET['share_desc']):'';
        
        if($_FILES['share_logo']['tmp_name']) {
            $upload = new discuz_upload();
            if(!getimagesize($_FILES['share_logo']['tmp_name']) || !$upload->init($_FILES['share_logo'], 'common', random(3, 1), random(8)) || !$upload->save()) {
                cpmsg($upload->errormessage(), '', 'error');
            }
            $share_logo = $upload->attach['attachment'];
        } else {
            $share_logo = addslashes($_GET['share_logo']);
        }
        
        $insertData = array();
        $insertData['title']        = $title;
        $insertData['type']         = $type;
        $insertData['cj_times']     = $cj_times;
        $insertData['start_time']   = $start_time;
        $insertData['end_time']     = $end_time;
        $insertData['content']      = $content;
        $insertData['guanzu']       = $guanzu;
        $insertData['share_title']  = $share_title;
        $insertData['share_desc']   = $share_desc;
        $insertData['share_logo']   = $share_logo;
        $insertData['add_time']     = TIMESTAMP;
        C::t('#tom_weixin_jgg#tom_weixin_jgg')->insert($insertData);
        cpmsg($pluginScriptLang['act_success'], $jggListUrl, 'succeed');
    }else{
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        loadeditorjs();
        showformheader('plugins&operation=config&do=' . $pluginid . '&identifier=tom_weixin_jgg&pmod=adminJgg&act=add','enctype');
        showtableheader();
        echo '<tr><th colspan="15" class="partition">' . $pluginScriptLang['jgg_add'] . '</th></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_title'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="title" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['jgg_title_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_type'].'</th><th></th></tr>';
        echo '<tr><td width="300">';
        echo '<input name="type" type="radio" value="1" checked />'.$pluginScriptLang['jgg_type1'];
        echo '<input name="type" type="radio" value="2" />'.$pluginScriptLang['jgg_type2'];
        echo '<input name="type" type="radio" value="3" />'.$pluginScriptLang['jgg_type3'];
        echo '</td><td>'.$pluginScriptLang['jgg_type_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_cj_times'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="cj_times" type="text" value="5" size="40" /></td><td>'.$pluginScriptLang['jgg_cj_times_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_start_time'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="start_time" type="text" value="" size="40" onclick="showcalendar(event, this, 1)" /></td><td>'.$pluginScriptLang['jgg_start_time_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_end_time'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="end_time" type="text" value="" size="40" onclick="showcalendar(event, this, 1)" /></td><td>'.$pluginScriptLang['jgg_end_time_msg'].'</td></tr>';
        
        //echo '<tr class="header"><th>'.$pluginScriptLang['jgg_content'].'</th><th></th></tr>';
        //echo '<tr><td><textarea rows="6" name="content" cols="30" class="tarea"></textarea></td><td>'.$pluginScriptLang['jgg_content_msg'].'</td></tr>';
        tomshowsetting(array('title'=>$pluginScriptLang['jgg_content'],'name'=>'content','value'=>'','msg'=>$pluginScriptLang['jgg_content_msg']),"text");
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_guanzu'].'</th><th></th></tr>';
        echo '<tr><td><textarea rows="6" name="guanzu" cols="30" class="tarea"></textarea></td><td>'.$pluginScriptLang['jgg_guanzu_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_share_title'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="share_title" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['jgg_share_title_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_share_desc'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="share_desc" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['jgg_share_desc_msg'].'</td></tr>';
        
        showsetting($pluginScriptLang['jgg_share_logo'], 'share_logo', '', 'filetext',0,0,$pluginScriptLang['jgg_share_logo_msg']);
        
        showsubmit('submit', 'submit');
        showtablefooter();
        showformfooter();
    }
}else if($_GET['act'] == 'addprize'){
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['activity_id']);
    if(submitcheck('submit')){
        $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
        $prize_no    = isset($_GET['prize_no'])? intval($_GET['prize_no']):'';
        $prize_title    = isset($_GET['prize_title'])? addslashes($_GET['prize_title']):'';
        $prize_type     = isset($_GET['prize_type'])? intval($_GET['prize_type']):1;
        $prize_score     = isset($_GET['prize_score'])? intval($_GET['prize_score']):'';
        $prize_desc     = isset($_GET['prize_desc'])? addslashes($_GET['prize_desc']):'';
        $prize_num     = isset($_GET['prize_num'])? intval($_GET['prize_num']):'';
        $prize_chance    = isset($_GET['prize_chance'])? intval($_GET['prize_chance']*100):0;
        $prize_pwd     = isset($_GET['prize_pwd'])? addslashes($_GET['prize_pwd']):'';
        
        if($_FILES['prize_pic']['tmp_name']) {
            $upload = new discuz_upload();
            if(!getimagesize($_FILES['prize_pic']['tmp_name']) || !$upload->init($_FILES['prize_pic'], 'common', random(3, 1), random(8)) || !$upload->save()) {
                cpmsg($upload->errormessage(), '', 'error');
            }
            $prize_pic = $upload->attach['attachment'];
        } else {
            $prize_pic = addslashes($_GET['prize_pic']);
        }
        
        $prizeList = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_all_list(" AND activity_id = {$activity_id} AND prize_no={$prize_no} ","ORDER BY prize_no ASC",0,1);
        if($prizeList){
            cpmsg($pluginScriptLang['prize_no_error'], $jggListUrl.'&act=listprize&activity_id='.$activity_id, 'succeed');
        }
        
        $insertData = array();
        $insertData['activity_id']        = $activity_id;
        $insertData['prize_no']        = $prize_no;
        $insertData['prize_title']        = $prize_title;
        $insertData['prize_type']         = $prize_type;
        $insertData['prize_score']        = $prize_score;
        $insertData['prize_desc']        = $prize_desc;
        $insertData['prize_num']        = $prize_num;
        $insertData['prize_pic']      = $prize_pic;
        $insertData['prize_chance']      = $prize_chance;
        $insertData['part1']      = $prize_pwd;
        C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->insert($insertData);
        cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listprize&activity_id='.$activity_id, 'succeed');
    }else{
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        showformheader('plugins&operation=config&do=' . $pluginid . '&identifier=tom_weixin_jgg&pmod=adminJgg&act=addprize&activity_id='.$_GET['activity_id'],'enctype');
        showtableheader();
        echo '<tr><th colspan="15" class="partition">' .$jggInfo['title'].' >> '. $pluginScriptLang['prize_add'] . '</th></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_no'].'</th><th></th></tr>';
        echo '<tr><td width="300"><select name="prize_no">';
        $si = 1;
        for($i=1;$i<=7;$i++){
            if($i == $si){
                echo '<option value="'.$i.'" selected="selected">NO.'.$i.'</option>';
            }else{
                echo '<option value="'.$i.'">NO.'.$i.'</option>';
            }
        }
        echo '</select></td><td>'.$pluginScriptLang['prize_no_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_title'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_title" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['prize_title_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_type'].'</th><th></th></tr>';
        echo '<tr><td width="300">';
        echo '<input name="prize_type" type="radio" value="1" checked />'.$pluginScriptLang['prize_type1'];
        echo '<input name="prize_type" type="radio" value="2" />'.$pluginScriptLang['prize_type2'];
        echo '</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_score'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_score" type="text" value="0" size="40" /></td><td>'.$pluginScriptLang['prize_score_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_desc'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_desc" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['prize_desc_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_num'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_num" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['prize_num_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_chance'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_chance" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['prize_chance_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_pwd'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_pwd" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['prize_pwd_msg'].'</td></tr>';
        
        showsetting($pluginScriptLang['prize_pic'], 'prize_pic', '', 'filetext',0,0,$pluginScriptLang['prize_pic_msg']);
        
        showsubmit('submit', 'submit');
        showtablefooter();
        showformfooter();
    }
}else if($_GET['act'] == 'addzj'){
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['activity_id']);
    $prizeList = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_all_list(" AND activity_id = {$_GET['activity_id']} ","ORDER BY prize_no ASC",0,50);
    if(submitcheck('submit')){
        $activity_id        = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
        $prize_id           = isset($_GET['prize_id'])? intval($_GET['prize_id']):0;
        $xm                 = isset($_GET['xm'])? addslashes($_GET['xm']):'';
        $tel                = isset($_GET['tel'])? addslashes($_GET['tel']):1;
        $zl_time            = isset($_GET['zl_time'])? addslashes($_GET['zl_time']):'';
        $zl_time            = strtotime($zl_time);
        
        $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_act_id_tel($activity_id,$tel);
        if($userInfo){
        }else{
            $insertData = array();
            $insertData['activity_id']      = $activity_id;
            $insertData['xm']               = $xm;
            $insertData['tel']              = $tel;
            $insertData['add_time']         = TIMESTAMP;
            C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->insert($insertData);
            $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_act_id_tel($activity_id,$tel);
        }
        $nowDayTime = gmmktime(0,0,0,dgmdate($zl_time, 'n',$tomSysOffset),dgmdate($zl_time, 'j',$tomSysOffset),dgmdate($zl_time, 'Y',$tomSysOffset)) - $tomSysOffset*3600;
        $prizeInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($prize_id);
        $insertData = array();
        $insertData['activity_id']     = $activity_id;
        $insertData['user_id']         = $userInfo['id'];
        $insertData['prize_id']        = $prize_id;
        $insertData['zl_time']         = $zl_time;
        $insertData['time_id']         = $nowDayTime;
        C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->insert($insertData);

        $updateData = array();
        $updateData['prize_num']       = $prizeInfo['prize_num']-1;
        C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->update($prize_id,$updateData);
        
        cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listzj&activity_id='.$activity_id, 'succeed');
    }else{
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        showformheader('plugins&operation=config&do=' . $pluginid . '&identifier=tom_weixin_jgg&pmod=adminJgg&act=addzj&activity_id='.$_GET['activity_id'],'enctype');
        showtableheader();
        echo '<tr><th colspan="15" class="partition">' .$jggInfo['title'].' >> '. $pluginScriptLang['zj_add'] . '</th></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['zj_prize'].'</th><th></th></tr>';
        echo '<tr><td width="300"><select name="prize_id">';
        foreach ($prizeList as $pk => $pv){
            echo '<option value="'.$pv['id'].'">'.$pv['prize_title'].'</option>';
        }
        echo '</select></td><td>'.$pluginScriptLang['zj_prize_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['zj_xm'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="xm" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['zj_xm_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['zj_tel'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="tel" type="text" value="" size="40" /></td><td>'.$pluginScriptLang['zj_tel_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['zl_time'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="zl_time" type="text" value="" size="40" onclick="showcalendar(event, this, 1)" /></td><td>'.$pluginScriptLang['zl_time_msg'].'</td></tr>';
        
        showsubmit('submit', 'submit');
        showtablefooter();
        showformfooter();
    }
}else if($_GET['act'] == 'edit'){
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['id']);
    if(submitcheck('submit')){
        $title          = isset($_GET['title'])? addslashes($_GET['title']):'';
        $type           = isset($_GET['type'])? intval($_GET['type']):1;
        $cj_times       = isset($_GET['cj_times'])? intval($_GET['cj_times']):5;
        $start_time     = isset($_GET['start_time'])? addslashes($_GET['start_time']):'';
        $start_time     = strtotime($start_time);
        $end_time       = isset($_GET['end_time'])? addslashes($_GET['end_time']):'';
        $end_time       = strtotime($end_time);
        $content        = isset($_GET['content'])? addslashes($_GET['content']):'';
        $guanzu         = isset($_GET['guanzu'])? addslashes($_GET['guanzu']):'';
        $share_title    = isset($_GET['share_title'])? addslashes($_GET['share_title']):'';
        $share_desc     = isset($_GET['share_desc'])? addslashes($_GET['share_desc']):'';
        
        if($_FILES['share_logo']['tmp_name']) {
            $upload = new discuz_upload();
            if(!getimagesize($_FILES['share_logo']['tmp_name']) || !$upload->init($_FILES['share_logo'], 'common', random(3, 1), random(8)) || !$upload->save()) {
                cpmsg($upload->errormessage(), '', 'error');
            }
            $share_logo = $upload->attach['attachment'];
            if(file_exists($_G['setting']['attachdir'].'common/'.$jggInfo['share_logo'])){
                @unlink($_G['setting']['attachdir'].'common/'.$jggInfo['share_logo']);
            }
        } else {
            $share_logo = addslashes($_GET['share_logo']);
        }
        
        $updateData = array();
        $updateData['title']        = $title;
        $updateData['type']         = $type;
        $updateData['cj_times']     = $cj_times;
        $updateData['start_time']   = $start_time;
        $updateData['end_time']     = $end_time;
        $updateData['content']      = $content;
        $updateData['guanzu']       = $guanzu;
        $updateData['share_title']  = $share_title;
        $updateData['share_desc']   = $share_desc;
        $updateData['share_logo']   = $share_logo;
        
        C::t('#tom_weixin_jgg#tom_weixin_jgg')->update($jggInfo['id'],$updateData);
        cpmsg($pluginScriptLang['act_success'], $jggListUrl, 'succeed');
    }else{
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        loadeditorjs();
        showformheader('plugins&operation=config&do=' . $pluginid . '&identifier=tom_weixin_jgg&pmod=adminJgg&act=edit&id='.$_GET['id'],'enctype');
        showtableheader();
        
        echo '<tr><th colspan="15" class="partition">' . $pluginScriptLang['jgg_edit'] . '</th></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_title'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="title" type="text" value="'.$jggInfo['title'].'" size="40" /></td><td>'.$pluginScriptLang['jgg_title_msg'].'</td></tr>';
        
        $jgg_type1_checked = "";
        $jgg_type2_checked = "";
        $jgg_type3_checked = "";
        if($jggInfo['type'] == 1){
            $jgg_type1_checked = "checked";
        }
        if($jggInfo['type'] == 2){
            $jgg_type2_checked = "checked";
        }
        if($jggInfo['type'] == 3){
            $jgg_type3_checked = "checked";
        }
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_type'].'</th><th></th></tr>';
        echo '<tr><td width="300">';
        echo '<input name="type" type="radio" value="1" '.$jgg_type1_checked.' />'.$pluginScriptLang['jgg_type1'];
        echo '<input name="type" type="radio" value="2" '.$jgg_type2_checked.' />'.$pluginScriptLang['jgg_type2'];
        echo '<input name="type" type="radio" value="3" '.$jgg_type3_checked.' />'.$pluginScriptLang['jgg_type3'];
        echo '</td><td>'.$pluginScriptLang['jgg_type_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_cj_times'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="cj_times" type="text" value="'.$jggInfo['cj_times'].'" size="40" /></td><td>'.$pluginScriptLang['jgg_cj_times_msg'].'</td></tr>';
        
        $start_time = dgmdate($jggInfo['start_time'],"Y-m-d H:i",$tomSysOffset);
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_start_time'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="start_time" type="text" value="'.$start_time.'" size="40" onclick="showcalendar(event, this, 1)" /></td><td>'.$pluginScriptLang['jgg_start_time_msg'].'</td></tr>';
        
        $end_time = dgmdate($jggInfo['end_time'],"Y-m-d H:i",$tomSysOffset);
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_end_time'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="end_time" type="text" value="'.$end_time.'" size="40" onclick="showcalendar(event, this, 1)" /></td><td>'.$pluginScriptLang['jgg_end_time_msg'].'</td></tr>';
        
        //echo '<tr class="header"><th>'.$pluginScriptLang['jgg_content'].'</th><th></th></tr>';
        //echo '<tr><td><textarea rows="6" name="content" cols="30" class="tarea">'.$jggInfo['content'].'</textarea></td><td>'.$pluginScriptLang['jgg_content_msg'].'</td></tr>';
        tomshowsetting(array('title'=>$pluginScriptLang['jgg_content'],'name'=>'content','value'=>$jggInfo['content'],'msg'=>$pluginScriptLang['jgg_content_msg']),"text");
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_guanzu'].'</th><th></th></tr>';
        echo '<tr><td><textarea rows="6" name="guanzu" cols="30" class="tarea">'.$jggInfo['guanzu'].'</textarea></td><td>'.$pluginScriptLang['jgg_guanzu_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_share_title'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="share_title" type="text" value="'.$jggInfo['share_title'].'" size="40" /></td><td>'.$pluginScriptLang['jgg_share_title_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['jgg_share_desc'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="share_desc" type="text" value="'.$jggInfo['share_desc'].'" size="40" /></td><td>'.$pluginScriptLang['jgg_share_desc_msg'].'</td></tr>';
        
        if(!preg_match('/^http:/', $jggInfo['share_logo']) ){
            $share_logo = (preg_match('/^http:/', $_G['setting']['attachurl']) ? '' : $_G['siteurl']).$_G['setting']['attachurl'].'common/'.$jggInfo['share_logo'];
        }else{
            $share_logo = $jggInfo['share_logo'];
        }
        $pluginScriptLang['jgg_share_logo_msg'] = $pluginScriptLang['jgg_share_logo_msg'].'<br/><img src="'.$share_logo.'" width="40" />';
        showsetting($pluginScriptLang['jgg_share_logo'], 'share_logo', $jggInfo['share_logo'], 'filetext',0,0,$pluginScriptLang['jgg_share_logo_msg']);
        
        showsubmit('submit', 'submit');
        showtablefooter();
        showformfooter();
    }
}else if($_GET['act'] == 'editprize'){
    $prizeInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($_GET['id']);
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['activity_id']);
    if(submitcheck('submit')){
        $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
        $prize_no    = isset($_GET['prize_no'])? intval($_GET['prize_no']):'';
        $prize_title    = isset($_GET['prize_title'])? addslashes($_GET['prize_title']):'';
        $prize_type     = isset($_GET['prize_type'])? intval($_GET['prize_type']):1;
        $prize_score     = isset($_GET['prize_score'])? intval($_GET['prize_score']):'';
        $prize_desc     = isset($_GET['prize_desc'])? addslashes($_GET['prize_desc']):'';
        $prize_num     = isset($_GET['prize_num'])? intval($_GET['prize_num']):'';
        $prize_chance    = isset($_GET['prize_chance'])? intval($_GET['prize_chance']*100):0;
        $prize_pwd     = isset($_GET['prize_pwd'])? addslashes($_GET['prize_pwd']):'';
        
        if($_FILES['prize_pic']['tmp_name']) {
            $upload = new discuz_upload();
            if(!getimagesize($_FILES['prize_pic']['tmp_name']) || !$upload->init($_FILES['prize_pic'], 'common', random(3, 1), random(8)) || !$upload->save()) {
                cpmsg($upload->errormessage(), '', 'error');
            }
            $prize_pic = $upload->attach['attachment'];
            if(file_exists($_G['setting']['attachdir'].'common/'.$prizeInfo['prize_pic'])){
                @unlink($_G['setting']['attachdir'].'common/'.$prizeInfo['prize_pic']);
            }
        } else {
            $prize_pic = addslashes($_GET['prize_pic']);
        }
        
        $updateData = array();
        $updateData['activity_id']        = $activity_id;
        $updateData['prize_no']        = $prize_no;
        $updateData['prize_title']        = $prize_title;
        $updateData['prize_type']         = $prize_type;
        $updateData['prize_score']        = $prize_score;
        $updateData['prize_desc']        = $prize_desc;
        $updateData['prize_num']        = $prize_num;
        $updateData['prize_pic']      = $prize_pic;
        $updateData['prize_chance']      = $prize_chance;
        $updateData['part1']      = $prize_pwd;
        
        C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->update($prizeInfo['id'],$updateData);
        cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listprize&activity_id='.$activity_id, 'succeed');
    }else{
        echo '<script type="text/javascript" src="static/js/calendar.js"></script>';
        showformheader('plugins&operation=config&do=' . $pluginid . '&identifier=tom_weixin_jgg&pmod=adminJgg&act=editprize&id='.$_GET['id'].'&activity_id='.$_GET['activity_id'],'enctype');
        showtableheader();
        
        echo '<tr><th colspan="15" class="partition">' .$jggInfo['title'].' >> '. $pluginScriptLang['prize_edit'] . '</th></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_no'].'</th><th></th></tr>';
        echo '<tr><td width="300"><select name="prize_no">';
        $si = $prizeInfo['prize_no'];
        for($i=1;$i<=7;$i++){
            if($i == $si){
                echo '<option value="'.$i.'" selected="selected">NO.'.$i.'</option>';
            }else{
                echo '<option value="'.$i.'">NO.'.$i.'</option>';
            }
        }
        echo '</select></td><td>'.$pluginScriptLang['prize_no_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_title'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_title" type="text" value="'.$prizeInfo['prize_title'].'" size="40" /></td><td>'.$pluginScriptLang['prize_title_msg'].'</td></tr>';
        
        $prize_type1_checked = "";
        $prize_type2_checked = "";
        if($prizeInfo['prize_type'] == 1){
            $prize_type1_checked = "checked";
        }
        if($prizeInfo['prize_type'] == 2){
            $prize_type2_checked = "checked";
        }
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_type'].'</th><th></th></tr>';
        echo '<tr><td width="300">';
        echo '<input name="prize_type" type="radio" value="1" '.$prize_type1_checked.' />'.$pluginScriptLang['prize_type1'];
        echo '<input name="prize_type" type="radio" value="2" '.$prize_type2_checked.' />'.$pluginScriptLang['prize_type2'];
        echo '</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_score'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_score" type="text" value="'.$prizeInfo['prize_score'].'" size="40" /></td><td>'.$pluginScriptLang['prize_score_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_desc'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_desc" type="text" value="'.$prizeInfo['prize_desc'].'" size="40" /></td><td>'.$pluginScriptLang['prize_desc_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_num'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_num" type="text" value="'.$prizeInfo['prize_num'].'" size="40" /></td><td>'.$pluginScriptLang['prize_num_msg'].'</td></tr>';
        
        $prize_chance = 0;
        if($prizeInfo['prize_chance'] != 0){
            $prize_chance = $prizeInfo['prize_chance']/100;
        }
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_chance'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_chance" type="text" value="'.$prize_chance.'" size="40" /></td><td>'.$pluginScriptLang['prize_chance_msg'].'</td></tr>';
        
        echo '<tr class="header"><th>'.$pluginScriptLang['prize_pwd'].'</th><th></th></tr>';
        echo '<tr><td width="300"><input name="prize_pwd" type="text" value="'.$prizeInfo['part1'].'" size="40" /></td><td>'.$pluginScriptLang['prize_pwd_msg'].'</td></tr>';
        
        if(!preg_match('/^http:/', $prizeInfo['prize_pic']) ){
            $prize_pic = (preg_match('/^http:/', $_G['setting']['attachurl']) ? '' : $_G['siteurl']).$_G['setting']['attachurl'].'common/'.$prizeInfo['prize_pic'];
        }else{
            $prize_pic = $prizeInfo['prize_pic'];
        }
        $pluginScriptLang['prize_pic_msg'] = $pluginScriptLang['prize_pic_msg'].'<br/><img src="'.$prize_pic.'" width="40" />';
        showsetting($pluginScriptLang['prize_pic'], 'prize_pic', $prizeInfo['prize_pic'], 'filetext',0,0,$pluginScriptLang['prize_pic_msg']);
        
        showsubmit('submit', 'submit');
        showtablefooter();
        showformfooter();
    }
}else if($_GET['formhash'] == FORMHASH && $_GET['act'] == 'del'){
    C::t('#tom_weixin_jgg#tom_weixin_jgg')->delete_by_id($_GET['id']);
    C::t('#tom_weixin_jgg#tom_weixin_jgg_log')->delete_by_activity_id($_GET['id']);
    C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->delete_by_activity_id($_GET['id']);
    C::t('#tom_weixin_jgg#tom_weixin_jgg_share')->delete_by_activity_id($_GET['id']);
    C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->delete_by_activity_id($_GET['id']);
    C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->delete_by_activity_id($_GET['id']);
    cpmsg($pluginScriptLang['act_success'], $jggListUrl, 'succeed');
    
}else if($_GET['formhash'] == FORMHASH && $_GET['act'] == 'delprize'){
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->delete_by_id($_GET['id']);
    cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listprize&activity_id='.$activity_id, 'succeed');
    
}else if($_GET['formhash'] == FORMHASH && $_GET['act'] == 'deluser'){
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->delete_by_id($_GET['id']);
    cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listuser&activity_id='.$activity_id, 'succeed');
    
}else if($_GET['formhash'] == FORMHASH && $_GET['act'] == 'delzj'){
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->delete_by_id($_GET['id']);
    cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listzj&activity_id='.$activity_id, 'succeed');
    
}else if($_GET['formhash'] == FORMHASH && $_GET['act'] == 'dhzj'){
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    $updateData = array();
    $updateData['status'] = 1;
    C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->update($_GET['id'],$updateData);
    cpmsg($pluginScriptLang['act_success'], $jggListUrl.'&act=listzj&activity_id='.$activity_id, 'succeed');
}else if($_GET['act'] == 'listprize'){
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['activity_id']);
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    $prizeList = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_all_list(" AND activity_id = {$activity_id} ","ORDER BY prize_no ASC",0,50);
    showtableheader();
    echo '<tr><th colspan="15" class="partition">' .$jggInfo['title'].' >> ' . $pluginScriptLang['prize_list_title'] . '</th></tr>';
    echo '<tr><th colspan="15">';
    echo '&nbsp;&nbsp;<a class="addtr" href="'.$jggBaseUrl.'&act=addprize&activity_id='.$activity_id.'">' . $pluginScriptLang['prize_add'] . '</a>';
    echo '</th></tr>';
    echo '<tr class="header">';
    echo '<th width="10%">NO</th>';
    echo '<th>' . $pluginScriptLang['prize_title'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_type'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_pic'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_score'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_desc'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_num'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_chance'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_pwd'] . '</th>';
    echo '<th>' . $pluginScriptLang['handle'] . '</th>';
    echo '</tr>';
    
    $i = 1;
    foreach ($prizeList as $key => $value) {
        if(!preg_match('/^http:/', $value['prize_pic']) ){
            $prize_pic = (preg_match('/^http:/', $_G['setting']['attachurl']) ? '' : $_G['siteurl']).$_G['setting']['attachurl'].'common/'.$value['prize_pic'];
        }else{
            $prize_pic = $value['prize_pic'];
        }
        $prize_chance = 0;
        if($value['prize_chance'] != 0){
            $prize_chance = $value['prize_chance']/100;
        }
        $prize_type_name = "";
        if($value['prize_type'] == 1){
            $prize_type_name = $pluginScriptLang['prize_type1'];
        }
        if($value['prize_type'] == 2){
            $prize_type_name = $pluginScriptLang['prize_type2'];
        }
        echo '<tr>';
        echo '<td>NO.' . $value['prize_no'] . '</td>';
        echo '<td>' . $value['prize_title'] . '</td>';
        echo '<td>' . $prize_type_name . '</td>';
        echo '<td><img src="'.$prize_pic.'" width="40" /></td>';
        echo '<td>' . $value['prize_score'] . '</td>';
        echo '<td>' . $value['prize_desc'] . '</td>';
        echo '<td>' . $value['prize_num'] . '</td>';
        echo '<td>' . $prize_chance . '</td>';
        echo '<td>' . $value['part1'] . '</td>';
        echo '<td>';
        echo '<a href="'.$jggBaseUrl.'&act=editprize&activity_id='.$activity_id.'&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['prize_edit']. '</a>&nbsp;|&nbsp;';
        echo '<a href="'.$jggBaseUrl.'&act=delprize&activity_id='.$activity_id.'&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['delete'] . '</a>';
        echo '</td>';
        echo '</tr>';
        $i++;
    }
    showtablefooter();
}else if($_GET['act'] == 'listuser'){
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['activity_id']);
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    $pagesize = 15;
    $page = intval($_GET['page'])>0? intval($_GET['page']):1;
    $start = ($page-1)*$pagesize;	
    
    $count = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_all_count(" AND activity_id = {$activity_id} ");
    $userList = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_all_list(" AND activity_id = {$activity_id} "," ORDER BY id DESC ",$start,$pagesize);
    showtableheader();
    echo '<tr><th colspan="15" class="partition">' .$jggInfo['title'].' >> ' . $pluginScriptLang['user_list_title'] . '</th></tr>';
    echo '<tr class="header">';
    echo '<th width="10%">ID</th>';
    echo '<th>' . $pluginScriptLang['user_xm'] . '</th>';
    echo '<th>' . $pluginScriptLang['user_tel'] . '</th>';
    echo '<th>' . $pluginScriptLang['user_add_time'] . '</th>';
    echo '<th>' . $pluginScriptLang['handle'] . '</th>';
    echo '</tr>';
    
    $i = 1;
    foreach ($userList as $key => $value) {
        echo '<tr>';
        echo '<td>' . $i . '</td>';
        echo '<td>' . $value['xm'] . '</td>';
        echo '<td>' . $value['tel'] . '</td>';
        echo '<td>' . dgmdate($value['add_time'],"Y-m-d H:i",$tomSysOffset) . '</td>';
        echo '<td>';
        echo '<a href="'.$jggBaseUrl.'&act=deluser&activity_id='.$activity_id.'&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['delete'] . '</a>';
        echo '</td>';
        echo '</tr>';
        $i++;
    }
    showtablefooter();
    $multi = multi($count, $pagesize, $page, ADMINSCRIPT."?action=plugins&operation=config&do=".$pluginid."&identifier=tom_weixin_jgg&pmod=adminJgg&act=listuser&activity_id=".$activity_id);	
    showsubmit('', '', '', '', $multi, false);
}else if($_GET['act'] == 'listzj'){
    $jggInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_by_id($_GET['activity_id']);
    $activity_id     = isset($_GET['activity_id'])? intval($_GET['activity_id']):0;
    $pagesize = 15;
    $page = intval($_GET['page'])>0? intval($_GET['page']):1;
    $start = ($page-1)*$pagesize;	
    
    $count = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_count(" AND activity_id = {$activity_id} ");
    $zjList = C::t('#tom_weixin_jgg#tom_weixin_jgg_zj')->fetch_all_list(" AND activity_id = {$activity_id} "," ORDER BY id DESC ",$start,$pagesize);
    showtableheader();
    echo '<tr><th colspan="15" class="partition">' .$jggInfo['title'].' >> ' . $pluginScriptLang['zj_list_title'] . '</th></tr>';
    echo '<tr class="header">';
    echo '<tr><th colspan="15">';
    echo '&nbsp;&nbsp;<a class="addtr" href="'.$jggBaseUrl.'&act=addzj&activity_id='.$activity_id.'">' . $pluginScriptLang['zj_add'] . '</a>';
    echo '&nbsp;&nbsp;<a class="addtr" target="_blank" href="'.$_G['siteurl'].'plugin.php?id=tom_weixin_jgg:doDao&act_id='.$activity_id.'">' . $pluginScriptLang['zj_dao'] . '</a>';
    echo '</th></tr>';
    echo '<th width="10%">ID</th>';
    echo '<th>' . $pluginScriptLang['user_xm'] . '</th>';
    echo '<th>' . $pluginScriptLang['user_tel'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_title'] . '</th>';
    echo '<th>' . $pluginScriptLang['prize_desc'] . '</th>';
    echo '<th>' . $pluginScriptLang['zl_time'] . '</th>';
    echo '<th>' . $pluginScriptLang['dh_status'] . '</th>';
    echo '<th>' . $pluginScriptLang['handle'] . '</th>';
    echo '</tr>';
    
    $i = 1;
    foreach ($zjList as $key => $value) {
        $userInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_user')->fetch_by_id($value['user_id']);
        $prizeInfo = C::t('#tom_weixin_jgg#tom_weixin_jgg_prize')->fetch_by_id($value['prize_id']);
        
        $dh_status_name = "";
        if($value['status'] == 0){
            $dh_status_name = '<font color="#FF0000">'.$pluginScriptLang['status_no'].'</font>';
        }else if($value['status'] == 1){
            $dh_status_name = '<font color="#009900">'.$pluginScriptLang['status_yes'].'</font>';
        }
        
        echo '<tr>';
        echo '<td>' . $i . '</td>';
        echo '<td>' . $userInfo['xm'] . '</td>';
        echo '<td>' . $userInfo['tel'] . '</td>';
        echo '<td>' . $prizeInfo['prize_title'] . '</td>';
        echo '<td>' . $prizeInfo['prize_desc'] . '</td>';
        echo '<td>' . dgmdate($value['zl_time'],"Y-m-d H:i",$tomSysOffset) . '</td>';
        echo '<td>' . $dh_status_name . '</td>';
        echo '<td>';
        echo '<a href="'.$jggBaseUrl.'&act=dhzj&activity_id='.$activity_id.'&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['dh_title'] . '</a>&nbsp;|&nbsp;';
        echo '<a href="'.$jggBaseUrl.'&act=delzj&activity_id='.$activity_id.'&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['delete'] . '</a>';
        echo '</td>';
        echo '</tr>';
        $i++;
    }
    showtablefooter();
    $multi = multi($count, $pagesize, $page, ADMINSCRIPT."?action=plugins&operation=config&do=".$pluginid."&identifier=tom_weixin_jgg&pmod=adminJgg&act=listzj&activity_id=".$activity_id);	
    showsubmit('', '', '', '', $multi, false);
}else{
    $pagesize = 15;
    $page = intval($_GET['page'])>0? intval($_GET['page']):1;
    $start = ($page-1)*$pagesize;	
    $count = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_all_count("");
    $jggList = C::t('#tom_weixin_jgg#tom_weixin_jgg')->fetch_all_list("","ORDER BY id DESC",$start,$pagesize);
    showtableheader();
    $pluginScriptLang['jgg_help_1']  = str_replace("{SITEURL}", $_G['siteurl'], $pluginScriptLang['jgg_help_1']);
    echo '<tr><th colspan="15" class="partition">' . $pluginScriptLang['jgg_help_title'] . '</th></tr>';
    echo '<tr><td  class="tipsblock" s="1"><ul id="tipslis">';
    echo '<li>' . $pluginScriptLang['jgg_help_1'] . '</li>';
    echo '<li>' . $pluginScriptLang['jgg_help_2'] . '</li>';
    echo '</ul></td></tr>';
    showtablefooter();
    showtableheader();
    echo '<tr><th colspan="15" class="partition">' . $pluginScriptLang['jgg_list_title'] . '</th></tr>';
    echo '<tr><th colspan="15">';
    echo '&nbsp;&nbsp;<a class="addtr" href="'.$jggBaseUrl.'&act=add">' . $pluginScriptLang['jgg_add'] . '</a>';
    echo '</th></tr>';
    echo '<tr class="header">';
    echo '<th width="10%">' . $pluginScriptLang['jgg_id'] . '</th>';
    echo '<th>' . $pluginScriptLang['jgg_title'] . '</th>';
    echo '<th>' . $pluginScriptLang['jgg_type'] . '</th>';
    echo '<th>' . $pluginScriptLang['jgg_start_time'] . '</th>';
    echo '<th>' . $pluginScriptLang['jgg_end_time'] . '</th>';
    echo '<th>' . $pluginScriptLang['handle'] . '</th>';
    echo '</tr>';
    
    $i = 1;
    foreach ($jggList as $key => $value) {
        
        $type_name = "";
        if($value['type'] == 1){
            $type_name = $pluginScriptLang['jgg_type1'];
        }
        if($value['type'] == 2){
            $type_name = $pluginScriptLang['jgg_type2'];
        }
        if($value['type'] == 3){
            $type_name = $pluginScriptLang['jgg_type3'];
        }
        
        echo '<tr>';
        echo '<td>' . $value['id'] . '</td>';
        echo '<td>' . $value['title'] . '</td>';
        echo '<td>' . $type_name . '</td>';
        echo '<td>' . dgmdate($value['start_time'],"Y-m-d H:i",$tomSysOffset) . '</td>';
        echo '<td>' . dgmdate($value['end_time'],"Y-m-d H:i",$tomSysOffset) . '</td>';
        echo '<td>';
        echo '<a href="'.$jggBaseUrl.'&act=listzj&activity_id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['zj_list_title']. '</a>&nbsp;|&nbsp;';
        echo '<a href="'.$jggBaseUrl.'&act=listuser&activity_id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['user_list_title']. '</a>&nbsp;|&nbsp;';
        echo '<a href="'.$jggBaseUrl.'&act=listprize&activity_id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['prize_list_title']. '</a>&nbsp;|&nbsp;';
        echo '<a href="'.$jggBaseUrl.'&act=edit&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['jgg_edit']. '</a>&nbsp;|&nbsp;';
        //echo '<a href="'.$jggBaseUrl.'&act=del&id='.$value['id'].'&formhash='.FORMHASH.'">' . $pluginScriptLang['delete'] . '</a>';
        echo '<a href="javascript:void(0);" onclick="del_confirm(\''.$jggBaseUrl.'&act=del&id='.$value['id'].'&formhash='.FORMHASH.'\');">' . $pluginScriptLang['delete'] . '</a>';
        echo '</td>';
        echo '</tr>';
        $i++;
    }
    showtablefooter();
    $multi = multi($count, $pagesize, $page, ADMINSCRIPT."?action=plugins&operation=config&do=".$pluginid."&identifier=tom_weixin_jgg&pmod=adminJgg");	
    showsubmit('', '', '', '', $multi, false);
    
        $jsstr = <<<EOF
<script type="text/javascript">
function del_confirm(url){
  var r = confirm("{$pluginScriptLang['makesure_del_msg']}")
  if (r == true){
    window.location = url;
  }else{
    return false;
  }
}
</script>
EOF;
    echo $jsstr;
}
?>
