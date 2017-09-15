<?php
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$sql = <<<EOF

DROP TABLE IF EXISTS `pre_tom_weixin_jgg`;
CREATE TABLE `pre_tom_weixin_jgg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT '1',
  `cj_times` int(11) DEFAULT '1',
  `start_time` int(11) DEFAULT '0',
  `end_time` int(11) DEFAULT '0',
  `content` text,
  `guanzu` text,
  `share_logo` varchar(255) DEFAULT NULL,
  `share_title` varchar(255) DEFAULT NULL,
  `share_desc` varchar(255) DEFAULT NULL,
  `add_time` int(11) NOT NULL DEFAULT '0',
  `paixu` int(11) DEFAULT '100',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `part1` varchar(255) DEFAULT NULL,
  `part2` varchar(255) DEFAULT NULL,
  `part3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;


DROP TABLE IF EXISTS `pre_tom_weixin_jgg_log`;
CREATE TABLE `pre_tom_weixin_jgg_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `log_time` int(11) DEFAULT '0',
  `time_id` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '1',
  `part1` varchar(255) DEFAULT NULL,
  `part2` varchar(255) DEFAULT NULL,
  `part3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;

DROP TABLE IF EXISTS `pre_tom_weixin_jgg_prize`;
CREATE TABLE `pre_tom_weixin_jgg_prize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) DEFAULT '0',
  `prize_no` int(11) DEFAULT '0',
  `prize_title` varchar(255) DEFAULT NULL,
  `prize_type` int(11) DEFAULT '1',
  `prize_score` int(11) DEFAULT '0',
  `prize_desc` varchar(255) DEFAULT NULL,
  `prize_num` int(11) DEFAULT '0',
  `prize_pic` varchar(255) DEFAULT NULL,
  `prize_chance` int(11) DEFAULT '0',
  `paixu` int(11) DEFAULT '0',
  `part1` varchar(255) DEFAULT NULL,
  `part2` varchar(255) DEFAULT NULL,
  `part3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;

DROP TABLE IF EXISTS `pre_tom_weixin_jgg_share`;
CREATE TABLE `pre_tom_weixin_jgg_share` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `share_time` int(11) DEFAULT '0',
  `time_id` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '1',
  `part1` varchar(255) DEFAULT NULL,
  `part2` varchar(255) DEFAULT NULL,
  `part3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;

DROP TABLE IF EXISTS `pre_tom_weixin_jgg_user`;
CREATE TABLE `pre_tom_weixin_jgg_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) DEFAULT NULL,
  `xm` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `zf_status` int(11) DEFAULT '0',
  `add_time` int(11) DEFAULT '0',
  `part1` varchar(255) DEFAULT NULL,
  `part2` varchar(255) DEFAULT NULL,
  `part3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;

DROP TABLE IF EXISTS `pre_tom_weixin_jgg_zj`;
CREATE TABLE `pre_tom_weixin_jgg_zj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `prize_id` int(11) DEFAULT '0',
  `zl_time` int(11) DEFAULT '0',
  `time_id` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '0',
  `part1` varchar(255) DEFAULT NULL,
  `part2` varchar(255) DEFAULT NULL,
  `part3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM;

EOF;

runquery($sql);

$finish = TRUE;
?>