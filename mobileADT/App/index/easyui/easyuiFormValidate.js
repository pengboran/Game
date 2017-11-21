$.extend($.fn.validatebox.defaults.rules, {  
    alpha:{  
        validator:function(value,param){  
            if (value){  
                return /^[a-zA-Z\u00A1-\uFFFF]*$/.test(value);  
            } else {  
                return true;  
            }  
        },  
        message:'只能输入字母.'  
    },  
    alphanum:{  
        validator:function(value,param){  
            if (value){  
                return /^([a-zA-Z\u00A1-\uFFFF0-9])*$/.test(value);  
            } else {  
                return true;  
            }  
        },  
        message:'只能输入字母和数字.'  
    },  
    alphanum_:{  
        validator:function(value,param){  
            if (value){  
                return /^[A-Za-z0-9-]+$/.test(value);  
            } else {  
                return true;  
            }  
        },  
        message:'只能输入数字和字母中杆.'  
    },  
    positive_int:{  
        validator:function(value,param){  
            if (value){  
            	//return /^[0-9]*[1-9][0-9]*$/.test(value);  不包括0的正整数
                return /^\d+$/.test(value);  
            } else {  
                return true;  
            }  
        },  
        message:'只能输入正整数.'  
    },  
    numeric:{  
        validator:function(value,param){  
            if (value){  
                return /^[0-9]*(\.[0-9]+)?$/.test(value);  
            } else {  
                return true;  
            }  
        },  
        message:'只能输入数字.'  
    },  
    chinese:{  
        validator:function(value,param){  
        if (value){  
             return /^[\u4E00-\u9FA5]+$/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'只能输入中文'  
   },
    name:{  
        validator:function(value,param){  
        if (value){  
             return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'只能输入中文,字母,数字下划线.'  
   },
   name_:{  
        validator:function(value,param){  
        if (value){  
             return /^[a-zA-Z0-9_.]+$/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'只能输入字母,数字,点和下划线.'  
   },
    paw:{  
        validator:function(value,param){  
        if (value){  
             return /^(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,}/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'由数字、字符、特殊字符随意组成至少6位.'  
   },
   noyin:{  
        validator:function(value,param){  
        if (value){  
             return /^[^\$'‘’]+$/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'不能输入单引号及$符号.'  
   },
   noNullorYin:{  
        validator:function(value,param){  
        if (value){  
             return /^[^\$'‘’ 　]+$/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'不能输入引号、空格及$符号.'  
   },
   realname : {// 验证姓名，可以是中文或英文 
            validator : function(value) { 
                return /^[A-Za-z\u4e00-\u9fa5]+$/.test(value); 
            }, 
            message : '只能输入中文或英文' 
    },
    noNull:{  
        validator:function(value,param){  
        if (value){  
             return /^\S+$/gi.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'不能有空格.'  
   },
  senoNull:{  
		validator:function(value,param){  
	        if (value){  
	             return /(^S*)|(S*$)/gi.test(value);
	        } else {  
	            return true;  
	        }  
   	 	},  
		message:'首位不能有空格.'  
   },
   alphanumeric :{  
        validator:function(value,param){  
        if (value){  
             return /^[A-Za-z0-9]+$/.test(value);  
        } else {  
            return true;  
        }  
    },  
    message:'只能输入字母和数字.'  
   }
	
          
});  