/*

获取需要检测的 微博账号信息

*/
var action_data = "not_find";

var a_label =  window.document.getElementsByTagName("a");
//console.log(a_label);

for (var i = 0; i < a_label.length; i++) {
	
	if (a_label[i].getAttribute("class") == "W_btn_d btn_34px")
	 {
	 	console.log(a_label[i].getAttribute("action-data"));

	 	action_data = a_label[i].getAttribute("action-data");
	 	break;
	 };
	// console.log(a_label[i].getAttribute("action-data"));
};



if (action_data == "not_find")
{

};

//查找在线状态  关键字
var user_uid="";
var user_name="";
//uid=3117512213&nick=沉寂的鱼小姐"
if(action_data.search(/[0-9]{4,20}/)>=0)
{
	user_uid=action_data.match(/[0-9]{4,20}/)[0];
}
else{
	user_uid="no_find";
}


if (action_data.search(/nick.*/)>=0) 
{
	user_name=action_data.match(/nick.*/)[0];
}
else{
	user_name="no_find";
}

var user_info={};
user_info.type="get_user_info";
user_info.uid = user_uid;
user_info.name= user_name;

//发送消息
chrome.extension.sendMessage(null,user_info,cellBack);

//
function cellBack(data){
	console.log("get_user_info.js cellBack data:"+data.reponse);
}