<?php

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$sql = <<<EOF

DROP TABLE IF EXISTS pre_tom_weixin_jgg;
DROP TABLE IF EXISTS pre_tom_weixin_jgg_log;
DROP TABLE IF EXISTS pre_tom_weixin_jgg_prize;
DROP TABLE IF EXISTS pre_tom_weixin_jgg_share;
DROP TABLE IF EXISTS pre_tom_weixin_jgg_user;
DROP TABLE IF EXISTS pre_tom_weixin_jgg_zj;

EOF;

runquery($sql);

$finish = TRUE;

?>