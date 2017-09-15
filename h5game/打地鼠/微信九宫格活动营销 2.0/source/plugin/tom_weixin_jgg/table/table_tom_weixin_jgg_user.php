<?php

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
} 

class table_tom_weixin_jgg_user extends discuz_table{
	public function __construct() {
        parent::__construct();
		$this->_table = 'tom_weixin_jgg_user';
		$this->_pk    = 'id';
	}

    public function fetch_by_id($id,$field='*') {
		return DB::fetch_first("SELECT $field FROM %t WHERE id=%d", array($this->_table, $id));
	}
    
    public function fetch_by_act_id_tel($act_id,$tel) {
		return DB::fetch_first("SELECT * FROM %t WHERE activity_id=%d AND tel=%s ", array($this->_table, $act_id,$tel));
	}
	
    public function fetch_all_list($condition,$orders = '',$start = 0,$limit = 10) {
		$data = DB::fetch_all("SELECT * FROM %t WHERE 1 %i $orders LIMIT $start,$limit",array($this->_table,$condition));
		return $data;
	}
    
    public function insert_id() {
		return DB::insert_id();
	}
    
    public function fetch_all_count($condition) {
        $return = DB::fetch_first("SELECT count(*) AS num FROM ".DB::table($this->_table)." WHERE 1 $condition ");
		return $return['num'];
	}
    
    public function fetch_all_sun($condition) {
        $return = DB::fetch_first("SELECT SUM(zl_num) AS zlnum FROM ".DB::table($this->_table)." WHERE 1 $condition ");
		return $return['zlnum'];
	}
	
	public function delete_by_id($id) {
		return DB::query("DELETE FROM %t WHERE id=%d", array($this->_table, $id));
	}
    
    public function delete_by_activity_id($activity_id) {
		return DB::query("DELETE FROM %t WHERE activity_id=%d", array($this->_table, $activity_id));
	}

}


?>
