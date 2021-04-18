// 顶部导航栏==========================
$(function() {/* // 头部导航栏==fl===省份选择=== */
  function setSelected(index) {
    //设置省份下拉类别中的某个对象为选中状态===排他功能
    $(".ui-areamini-content-wrap a").removeClass("selected");
    $(".ui-areamini-content-wrap a:eq(" + index + ")").addClass("selected");
    // 修改展示区的内容为当前所选择的内容
    $(".ui-areamini-text>span").text(
      $(".ui-areamini-content-wrap a:eq(" + index + ")").text()
    );
  }

  (function() {/* // 动态生成省份列表================ */
    var provinceList = [
      "北京",
      "上海",
      "天津",
      "重庆",
      "河北",
      "山西",
      "河南",
      "辽宁",
      "吉林",
      "黑龙江",
      "内蒙古",
      "江苏",
      "山东",
      "安徽",
      "浙江",
      "福建",
      "湖北",
      "湖南",
      "广东",
      "广西",
      "江西",
      "四川",
      "海南",
      "贵州",
      "云南",
      "西藏",
      "陕西",
      "甘肃",
      "青海",
      "宁夏",
      "新疆",
      "港澳",
      "台湾",
      "钓鱼岛",
      "海外"
    ];
    var len = provinceList.length;
    var fatherObj = $(".ui-areamini-content-wrap");
    for (var i = 0; i < len; i++) {
      $(
        "<div><a href='javascript:void(0);'>" + provinceList[i] + "</a></div>"
      ).appendTo(fatherObj);
    }
    // 将第一个子元素设置为选中状态
    $(".ui-areamini-content-wrap>div")
      .eq(0)
      .children()
      .addClass("selected");
  })();

  // 注册鼠标进入事件=================
  // 当鼠标进入省份区域时显示省份选择下拉列表
  dropDownLayer(".shortcut .fl");

  // 注册鼠标点击事件===================
  $(".shortcut .fl a").click(function() {
    //用户点击了某个省份
    /* 
            // 重新选择地区数据并重新加载网页====》重定向至对应地区的主业
            // 如果用户点击的是【中国大陆省份】===》为当前区域的添加selected样式，并取消其他区域的selected样式===》页面重新加载
            // 如果用户点击的是【港澳台地区】选项===》改变页面的字体为 zh-hk ，
                    并刷新页面为新的地区内容===》修改a标签内的内容为【中文主站】===》为港澳地区添加selected样式
            // 如果用户点击的是【国外区域】===》直接跳转至国外版主页，本区域不做操作 
            */

    if (/^[\u4E00-\u9FA5]{2,4}$/.test($(this).text())) {
      if (
        $(this)
          .parent()
          .siblings("p")
          .text() == "地区专享版本"
      ) {
        //用户选择港澳地区版主页
        // 重定向到港澳版主页
        // 修改内容为中文主站
        if ($(this).text() == "中文主站") {
          //如果已经跳转至港澳地区
          // 其实这里应该返回大陆版主页，但是现在只有一个主页所以这里，使用一些演示效果代替实际的跳转动作
          $(".dropdown-layer>div:eq(1) a").text("中國港澳"); //改变该链接名称，及连接地址（暂时不改变）
          //返回到默认省份
          setSelected(21);
        } else {
          // 如果还没跳转，就跳转到该网页===》跳转之后的页面中再选择其他地区也还是会继续显示繁体字版本
          $(".dropdown-layer>div:eq(1) a").text("中文主站");
          // 将标签转换到对应的位置==港澳标签
          setSelected(31);
        }
      } else {
        //用户没有选择港澳版本
        // 修改数据包为所选择的区域的数据===》重新加载页面
        // 下拉列表修改为当前所选的区域
        var index = $(this)
          .parent()
          .index();
        setSelected(index);
      } //end if
    } else {
      //国外地区
      alert("跳转到：" + $(this).text() + "版本主页");
    } //end if
  });
});

$(function() {/* // 头部导航栏===fr===各种按钮 */
  //我的京东========
  setDropDownLayer("#ttbar-myjd");
  //企业采购===========
  setDropDownLayer(".shortcut_btn_company");
  //客户服务=========
  ((function() {// 动态生成按钮列表
    var list = [
      [
        "客户",
        "帮助中心",
        "售后服务",
        "在线客服",
        "意见建议",
        "电话客服",
        "客服邮箱",
        "金融咨询",
        "全球售客服"
      ],
      [
        "商户",
        "合作招商",
        "成长中心",
        "商家后台",
        "京麦工作台",
        "商家帮助",
        "规则平台"
      ]
    ];
    var ulObj = $("#ttbar-serv>.dd>ul");
    for (var i = 0; i < 2; i++) {
      var itemList = list[i];
      for (var j = 0; j < itemList.length; j++) {
        if (i == 0 && j == 0) {
          $("<li  class = 'item-client'>" + itemList[j] + "</li>").appendTo(
            ulObj
          );
        } else if (i == 1 && j == 0) {
          $("<li  class = 'item-business'>" + itemList[j] + "</li>").appendTo(
            ulObj
          );
        } else {
          $(
            "<li><a href='javascript:void(0);'>" + itemList[j] + "</a></li>"
          ).appendTo(ulObj);
        }
      }
    }
  })());
  // 注册下拉列表事件
  setDropDownLayer("#ttbar-serv");
  // 网站导航===================
  ((function(){// 动态生成列表
    var list = [
[
"特色主题",
"京东试用",
"京东金融",
"全球售国际站",
"京东会员",
"京东预售",
"买什么",
"俄语站",
"装机大师",
"0元评测",
"港澳售",
"优惠券",
"秒杀",
"闪购",
"印尼站",
"京东金融科技",
"陪伴计划",
"出海招商",
"拍拍二手"
],
[
"行业频道",
"手机",
"智能数码",
"玩3C",
"电脑办公",
"家用电器",
"京鱼座智能",
"服装城",
"京东生鲜",
"家装城",
"母婴食品",
"农资频道",
"整车",
"图书",
"劳动防护"
],
[
"生活服务",
"京东众筹",
"白条",
"京东金融App",
"京东小金库",
"理财",
"话费",
"水电煤",
"彩票",
"旅行",
"机票酒店",
"电影票",
"京东到家",
"游戏",
"拍拍回收"
],
[
"更多精选",
"合作招商",
"京东通信",
"京东E卡",
"企业采购",
"服务市场",
"办公生活馆",
"乡村招募",
"校园加盟",
"京东社区",
"游戏社区",
"知识产权维权"
]
];
    for(var i=0;i<list.length;i++){
      var dlObj = $("<dl class='fore"+(i+1)+"'></dl>").appendTo("#ttbar-navs>.dd");
      var itemList = list[i];
      for(var j=0;j<itemList.length;j++){
        if(j==0){
        $("<dt>"+itemList[j]+"</dt>").appendTo(dlObj);
        }else{
          $("<dd><a href='javascript:void(0);'>"+itemList[j]+"</a></dd>").appendTo(dlObj);
        }//end if
      }// end for
    }// end for
  })());
  // 生成下拉列表
  setDropDownLayer("#ttbar-navs");
  // 我的京东========================
  // 显示下拉菜单
  $("#J_mobile")
    .children()
    .mouseenter(function() {
      $("#J_mobile>.dropdown-layer").show();
    })
    .mouseleave(function() {
      $("#J_mobile>.dropdown-layer").hide();
    });
    // 注册连接跳转
    setLink("#J_mobile");
});

// main================================================
$(function() {// 左侧侧边导航栏=======
  // 侧边导航栏内容列表
  var navItemList = [
    ["家用电器"],
    ["手机", "运营商", "数码"],
    ["电脑", "办公"],
    ["家居", "家具", "家装", "厨具"],
    ["男装", "女装", "童装", "内衣"],
    ["美妆", "个护清洁", "宠物"],
    ["女鞋", "箱包", "钟表", "珠宝"],
    ["男鞋", "运动", "户外"],
    ["房产", "汽车", "汽车用品"],
    ["母婴", "玩具乐器"],
    ["食品", "酒类", "生鲜", "特产"],
    ["艺术", "礼品鲜花", "农资绿植"],
    ["医药保健", "计生情趣"],
    ["图书", "文娱", "电子书"],
    ["机票", "酒店", "旅游", "生活"],
    ["理财", "众筹", "白条", "保险"],
    ["安装", "维修", "清洗", "二手"],
    ["工业品"]
  ];
  // 动态生成侧边导航栏======
  var ulObj = $(".jd-col1>ul");
  var len = navItemList.length;
  for (var i = 0; i < len; i++) {
    // 根据数组中的数据长度确定要生成多少组标签
    var list = navItemList[i];
    if (list.length == 1) {
      //如果这个一组分类中只有一个标签
      $("<li><a href='#'>" + list[0] + "</a></li>").appendTo(ulObj);
    } else {
      //一组中有多个标签的情况
      var li = $("<li></li>").appendTo(ulObj);
      for (var j = 0; j < list.length; j++) {
        if (j != 0) {
          // 如果不是第一个a标签就在其前面加上span的横线
          $("<span> / </span>").appendTo(li);
        } //end if
        $("<a href='#'>" + list[j] + "</a>").appendTo(li);
      } // end for
    } // end if
  } // end for
});

$(function(){//侧边导航栏弹出菜单==========
  ((function(){/* 侧边导航栏弹出菜单 */
    // 动态生成侧边导航栏二级菜单
    var str = "家电馆 家电专卖店 家电服务 企业采购 商用电器；电视 超薄电视 全面屏电视 智能电视 OLED电视 曲面电视 4K超清电视 55英寸 65英寸 电视配件；空调 空调挂机 空调柜机 精选推荐 中央空调 移动空调 省电空调 变频空调 以旧换新；洗衣机 滚筒洗衣机 洗烘一体机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件；冰箱 多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件；厨卫大电 油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式厨电 烟机灶具配件；厨房小电 破壁机 电烤箱 电饭煲 电压力锅 电炖锅 豆浆机 料理机 咖啡机 电饼铛 榨汁机/原汁机 电水壶/热水瓶 微波炉 多用途锅 养生壶 电磁炉 面包机 空气炸锅 面条机 电陶炉 煮蛋器 电烧烤炉；生活电器 电风扇 冷风扇 空气净化器 吸尘器 除螨仪 扫地机器人 除湿机 干衣机 加湿器 蒸汽拖把/拖地机 挂烫机/熨斗 电话机 饮水机 净水器 取暖电器 毛球修剪器 生活电器 配件；个护健康 剃须刀 电动牙刷 电吹风 美容器 洁面仪 按摩器 健康秤卷/直发器剃/脱毛器 理发器 足浴盆 足疗机 按摩椅；视听影音 家庭影院 KTV音响 迷你音响 DVD功放 回音壁 麦克风；";
    var listArr = str2arr(str);
    var fatherObj = $(".cate_part_col1");
    for(var i=0;i<listArr.length;i++){//动态生成文字列表
      var list = listArr[i];
      var dl = i==0?null:$("<dl class='cate_detail_item'></dl>").appendTo(fatherObj.children(".cate_detail"));
      for(var j=0;j<list.length;j++){
        if(i==0){
          $("<a href='javascript:void(0);' class='cate_channel_lk' >"+list[j]+"<i class='iconfont cate_channel_arrow'></i>").appendTo(fatherObj.children(".cate_channel"));
        }else{
          if(j==0){
            $("<dt class='cate_detail_tit'><a href='javascript:void(0);'>"+list[j]+"<i class='iconfont cate_detail_tit_arrow'></i></a></dt>").appendTo(dl);
          }else{
            $("<dd class='cate_detail_con'><a href='javascript:void(0);' class='cate_detail_con_lk'>"+list[j]+"</a></dd>").appendTo(dl);
          }//END IF
        }//end if
      }//end for
    }//end for
    var imgFatherObj = $(".cate_part_col2");
    for(var i=1;i<9;i++){//动态生成图片列表
      if(i<3){
        $("<a href='javascript:void(0);' class='cate_promotion_lk'><img src='images/brand/big"+i+".jpg' /></a>").appendTo(imgFatherObj.children(".cate_promotion"));
      }
      $("<a href='javascript:void(0);' class='cate_brand_lk'><img src='images/brand/"+i+".jpg' /></a>").appendTo(imgFatherObj.children(".cate_brand"));
    }
    // 动态生成于右侧导航栏数量一致的弹出列表
    var list = $(".jd-col1>ul>li");
    for(var i=1;i<list.length;i++){
      // 将jQuery元素的clone的元素转成html元素，再转换成jQuery元素加入元素中==》必须这样操作不然会出问题，应该是jquery的clone方法有问题
      $($(".cate_part").clone()[0]).appendTo($(".cate_pop"));
      /* var cate_part = $(".cate_part").clone()[0];
      var cate_pop = $(".cate_pop");
      cate_pop.append($(cate_part)); */
      // 直接通过html元素克隆的方式复制
      /* var cate_part = document.getElementsByClassName("cate_part")[0].cloneNode(true);
      var cate_pop = document.getElementsByClassName("cate_pop")[0];
      cate_pop.appendChild(cate_part); */
      
    }
    // 注册鼠标进入和离开事件
    $(".jd-col1>ul>li").mouseenter(function(){
      var index = $(this).index();
      $(".cate_pop").show().children().eq(index).show().siblings().hide();
    });
    $(".jd-col1").mouseleave(function(){
      var index = $(this).index();
      $(".cate_pop").hide().children().eq(index).hide();
    });
  })());
});

$(function(){// 左侧边栏广告==============
  ((function(){// 左侧边栏广告
    $(".jd .ad-box").children().mouseenter(function(){
      $(".jd .ad-body").stop().animate({"width":790},"fast");
    }).mouseleave(function(){
      $(".jd .ad-body").stop().animate({"width":0},"fast");
    });
  })());
});

$(function(){//搜索栏功能
  ((function(){//搜索栏功能
    // 声明变量==================================
    // 创建模拟数据库
    var dataStr = "你好 你看起来好像很好吃 你好三公主 你今天真好看 你的名字 你好鸭 你若不勇敢谁替你坚强 你好数学 你坏 你好三公主6 你有你的计划世界另有计划 你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包 电脑台式 电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架 吉他包 吉他书 吉他谱 吉他配件 吉他贴纸 吉他背带 吉他音箱 吉他拨片 吉他盒 你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包你好熊猫 你就是孩子最好的玩具自营 电脑 电脑桌 电脑主机 电脑椅 电脑笔记本 电脑包 电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架电脑音响 电脑显示器 电脑耳机 电脑支架 电脑一体机 电脑音箱 吉他 吉他弦 吉他 自营 吉他架 你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你今天真好看你好   你看起来好像很好吃 你好三公主 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你好 你今天真好看";
    var database = dataStr.split(" ");
    database.sort();//将数据库排序，方便后续查询操作

    // 初始化存储空间
    var resultObj = {};//存储索引值的统计结果

    // 获取元素
    var shelper = $("#shelper");

    // 为搜索背景加入定时器
    var str = "U盘 奶粉 游戏机 电视 逗猫棒 猫粮 你喜欢的 今天你过得开心吗 你开心就好";
    var searchbgList=str.split(" ");
    var inputVal = "";
    var index = 0;//输入框失去焦点时使用
    var timeid = setInterval(function(){//定时切换背景的内容
      $(".search_bg").text(searchbgList[index]);
      index = index<(searchbgList.length-1)?index+=1:0;
    },2000);

    // 功能区=====================================

    // 回车跳转事件
    function enterGoto(target){
      if(event.which==13){
        // 弹出提示框
        alert("跳转至："+target+"页面");
        // 重新加载页面==》假装是跳转==>实际开发中这里应该重定向到新的地址
        window.location.reload();
      }
    }

    function getFocusEventFn(inputVal,shelper,dataStr,searchbgList,timeid){//获取焦点时的处理函数
      return function (){
        $(this).keyup(getKeyupEventFn(inputVal,shelper,dataStr,searchbgList,timeid))//检查按键抬起
        $(".search_bg").css("color","#ccc");//设置搜索背景默认内容样式
        clearInterval(timeid);//停止自动播放
      };
    }
    
    function getKeyupEventFn(inputVal,shelper,dataStr,searchbgList,timeid){//按钮抬起事件
      return function (){
        inputVal = ($(this).val()).replace(/\s*/g,"");//获取输入值并去掉其中的空白符
        checkInputVal(inputVal,shelper,dataStr,searchbgList,timeid);//检查输入是否有效，并指向不同的处理方式
      };


    };
    
    function checkInputVal(inputVal,shelper,dataStr,searchbgList,timeid){// 检查用户输入内容
      if(inputVal != ""){
        haveInputVal(inputVal,dataStr,shelper,timeid);//有内容
      }else{
        noInputVal(inputVal,searchbgList,shelper);//没有内容
      }
    };

    function haveInputVal(inputVal,dataStr,shelper,timeid){//有输入值时的处理函数
          $(".search_bg").text("");//清空搜索框背景的默认内容
          var resultArr = checkDataBase(inputVal,dataStr,shelper);//检查数据库中有没有对应数据，并返回一个包含这些数据的数组
          if(resultArr){//如果数组存在
            setShelper(getResultObj(shelper,resultArr),shelper,inputVal);// 获取一个计算后的检索数据==并根据数据生成下拉列表
            shelper.show();// 显示下拉列表
          }// end if
    };

    function checkDataBase(inputVal,dataStr,shelper){//检查用户输入值或以用户输入开头的内容是否存在数据库中==>存在就返回一个包含所有符合条件的数组
      var regexp = new RegExp("("+inputVal+")[\u4E00-\u9FA5]*","g");
      return dataStr.match(regexp);//获取符合条件的元素==有就返回数组==没有就返回null
    };

    function getResultObj(shelper,resultArr){//计算每个key有多少个，并将其存储到对象中
      // 清空对象
      shelper.html("");//清空下拉列表，以免出现重复
      resultArr.sort();//重新对数组排序确保后续算法能实现
      var resultObj = {};//存储最后结果的对象
      var flag = true;//循环结束的标志
      var keyIndex = 0;// 存储数组索引值的变量
      var count = 0;// 存储关键词数量的计数器
      var key = "";// 存储关键词的变量
      while(flag){  //当标志为真时循环
        key = resultArr[keyIndex];//获取关键词
        count = resultArr.lastIndexOf(key)+1-keyIndex;
        resultObj[key]=count;
        keyIndex += count;
        if(keyIndex==resultArr.length){
          flag = false;
        }//end if
      }// end while
      
      return resultObj;
    };

    function setShelper(resultObj,shelper,inputVal){// 设置下拉菜单包含哪些内容
            // 生成相应数量的li
      for(var goods in resultObj){
        var strongStr = goods.substring(inputVal.length);
        var li = $("<li><div class='search-item'>"+inputVal+"<strong>"+strongStr+"</strong></div><div class='search-count'>约"+resultObj[goods]+"件商品</div></li>");
        // 将li加入到下拉列表
        li.appendTo(shelper);
      }
      // 最后额外添加一个关闭的li加入其中
      $("<li class='close'>关闭</li>").appendTo(shelper);
      // 为每个li添加调整事件
      shelper.children("li").click(function(){
        if($(this).index() != (shelper.children("li").length-1)){
          alert("跳转到："+$(this).children(".search-item").text());// 模拟跳转
          window.location.reload();// 重新加载页面
        }else{
          shelper.hide();
        }
      });

    }

    function noInputVal(inputVal,searchbgList,shelper){// 没有输入值时的处理函数
      $(".search_bg").text(searchbgList[index-1]);//===>显示上一次bg中显示的内容
      enterGoto($(".search_bg").text());//按下enter跳转到相应页面
      shelper.hide();//隐藏下拉菜单
    };

    function getBlurEventFn(timeid,searchbgList,index){//输入框失去焦点时的处理函数
      return function (){
        console.log(!$(this).val());
        
        if(!$(this).val()){//如果搜索框内没有内容才重置搜索框
          $(".search_bg").css("color","");
          timeid = setInterval(function(){
            $(".search_bg").text(searchbgList[index]);
            index = index<(searchbgList.length-1)?index+=1:0;
          },2000);
        }// end if
      };
    };

    // 获取和失去焦点
    $(".search>#key").focus(getFocusEventFn(inputVal,shelper,dataStr,searchbgList,timeid)).blur(getBlurEventFn(timeid,searchbgList,index));
    
    // 点击搜索按钮
    $(".search>button").click(function(){
      if($(".search .text").val()){
        alert("跳转到："+$(".search .text").val());
      }else{
        alert("跳转到："+$(".search .search_bg").text());
      }
      window.location.reload();
    });

    // 当用户想要点击其他a标签时隐藏，搜索下拉菜单
    $("a").mouseenter(function(){
      shelper.hide();
    });

  })());
});

$(function (){//购物车功能=================
  ((function(){// 购物车下拉菜单
    // 创建模拟购物车数据库
    var settleupDataBase = [
      {
        goods_class:"single",
        goods_name:"CHARLES&amp;KEITH CK2-50780732欧美翻盖吊牌装饰女士秋千包 橄榄绿色 S",
        goods_img_src:"images/gouwucheshangping.jpg",
        goods_price:439.00,
        goods_num:1,
        goods_link:""
      },
      {
        goods_class:"single",
        goods_name:"CHARLES&amp;KEITH CK2-50780732欧美翻盖吊牌装饰女士秋千包 橄榄绿色 S",
        goods_img_src:"images/gouwucheshangping.jpg",
        goods_price:439.00,
        goods_num:1,
        goods_link:""
      }
    ];
    

    function setSettleup(settleupDataBase){//设置购物车展示内容
      $(".settleup>.dropdown-layer").html("");//清空下拉列表
      var goodsCount = 0;// 商品计数器，存储总商品数量
      var goodsTotalPrice = parseFloat(0.00)//商品计价器，存储商品总价

      // 第一步：检测数据库中购物车中是否存在商品
      if(settleupDataBase.length !=0){//数据库不为空
        var fatherObj = $("<div class='cart_hd'><h4 class='cart_hd_title'>最新加入的商品</h4></div>\
          <div class='cart_bd J_cart_bd'>\
            <ul class='cart_singlelist'></ul>\
            <ul class='cart_giftlist'></ul>\
            <ul class='cart_suitlist'></ul>\
            <ul class='cart_manjianlist'></ul>\
            <ul class='cart_manzenglist'></ul></div>\
          <div class='cart_ft'><div class='cart_ft_info'>共<span class='cart_num'>0</span>件商品 共计<span class='cart_num'>0</span></div><a class='cart_ft_lk' href='javascript:void(0)' title='去购物车'>去购物车</a></div>"
        ).appendTo($(".settleup>.dropdown-layer"));//生成主体元素及商品父级列表

        for(var i=0;i<settleupDataBase.length;i++){//生成商品列表，并按照分类加入对应的列表中
          goodsCount += settleupDataBase[i].goods_num;//计算商品总量
          goodsTotalPrice +=settleupDataBase[i].goods_price;//计算商品总价
          var chirlden = $("<li class='cart_item'>\
                <div class='cart_item_inner'>\
                  <div class='cart_img'><a class='cart_img_lk' href='javascript:void(0)'><img src='"+settleupDataBase[i].goods_img_src+"' width='50' height='50'></a></div>\
                  <div class='cart_name'><a class='cart_name_lk' href='javascript:void(0)' title='"+settleupDataBase[i].goods_name+"'>"+settleupDataBase[i].goods_name+"</a></div>\
                  <div class='cart_info'><div class='cart_price'>¥"+settleupDataBase[i].goods_price.toFixed(2)+"×"+settleupDataBase[i].goods_num+"</div><a class='cart_delete J_delete' goods_id='"+i+"' href='javascript:;'>删除</a></div>\
                </div></li>"
          );
          switch (settleupDataBase[i].goods_class) {//根据商品类别加入对应的父级元素中
            case "single": chirlden.appendTo($(".cart_singlelist")); break;
            case "gift": chirlden.appendTo($(".cart_giftlist")); break;
            case "suit": chirlden.appendTo($(".cart_suitlist")); break;
            case "manjian": chirlden.appendTo($(".cart_manjianlist")); break;
            case "manzeng": chirlden.appendTo($(".cart_manzenglist")); break;
          }
        }
        
      }else{
        $("<div class='cart_empty'><i class='cart_empty_img'></i>购物车中还没有商品，赶紧选购吧</div>").appendTo($(".settleup>.dropdown-layer"));
      }//end if
      
      // 设置相关展示数据===========
      $(".shopping_amount").text(goodsCount);//设置购物车角标数字
      $(".cart_ft_info .cart_num").eq(0).text(goodsCount);//插入总数量
      $(".cart_ft_info .cart_num").eq(1).text("¥ "+goodsTotalPrice.toFixed(2));//插入总价格
      clickGoTo(".settleup a");//注册点击跳转
    } 

    // 初始化展示数据
    setSettleup(settleupDataBase);

    // 添加用户交互
    $(".settleup").mouseenter(function(){//鼠标进入购物车
      $(".settleup .J_delete").click(function(){//点击删除就删除数据库中相应的信息
        settleupDataBase.splice(this.getAttribute("goods_id"),1);//在模拟数据库中删除该数据
        setSettleup(settleupDataBase);//刷新购物车样式
      });
      $(".settleup>.dropdown-layer").show();
    }).mouseleave(function(){//鼠标离开购物车
      $(".settleup>.dropdown-layer").hide();
    });
    
  })());// end fn
});

$(function() {// 轮播图===============
  // 动态生成轮播图列表
  var ulObj = $(".jd-col2>ul");
  // 动态生成轮播图下方的小圆点
  var olObj = $(".jd-col2>ol");
  for (var i = 1; i <= 8; i++) {
    // 生成轮播图图片
    $(
      "<li><a href='javascript:void(0)'><img src='images/lunBoTu/" +
        i +
        ".jpg'/></a></li>"
    ).appendTo(ulObj);
    // 生成小圆点
    $("<li><a href='javascript:void(0)'></a></li>").appendTo(olObj);
  }
  // 为第一个小圆点添加类样式
  $(".jd-col2>ol>li:eq(0)").addClass("current");

  // 为轮播图添加功能
  // 点击右键处理函数
  function clickRight() {
    //右箭头效果
    // 清理定时器
    clearInterval(timeID);
    // 使当前图片隐藏的同时，显示下一个索引值的图片并改变小圆点的样式
    if (index == 7) {
      index = 0;
      $(".jd-col2>ul>li")
        .eq(7)
        .fadeOut(500);
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeIn(500);
      setButtonFllow(index);
    } else {
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeOut(500)
        .next()
        .fadeIn(500);
      index++;
      setButtonFllow(index);
    }
    // 开始新的自动播放
    timeID = setInterval(clickRight, 3000);
  }
  // 小圆点跟随图片的处理函数
  function setButtonFllow(index) {
    $(".jd-col2>ol>li")
      .eq(index)
      .addClass("current")
      .siblings("li")
      .removeClass("current");
  }
  // 自动播放效果
  var timeID = setInterval(clickRight, 3000);
  // 图片索引值
  var index = 0;
  // 点击左箭头
  $(".arr-l").click(function() {
    // 清理定时器
    clearInterval(timeID);
    // 使当前图片隐藏的同时，显示下一个索引值的图片并改变小圆点的样式
    if (index == 0) {
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeOut(500);
      index = 7;
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeIn(500);
      setButtonFllow(index);
    } else {
      $(".jd-col2>ul>li")
        .eq(index)
        .fadeOut(500)
        .prev()
        .fadeIn(500);
      index--;
      setButtonFllow(index);
    }
    // 开始新的自动播放
    timeID = setInterval(clickRight, 3000);
  });
  // 点击右箭头
  $(".arr-r").click(clickRight);
  // 进入轮播图下方的小点
  $(".jd-col2>ol>li").mouseenter(function() {
    // 清理定时器
    clearInterval(timeID);
    // 获取当前的索引值
    $(".jd-col2>ul>li")
      .eq(index)
      .fadeOut(500);
    index = $(this).index();
    setButtonFllow(index);
    $(".jd-col2>ul>li")
      .eq(index)
      .fadeIn(500);
    // 开始新的自动播放
    timeID = setInterval(clickRight, 3000);
  });
  // 鼠标进入离开图片
  $(".jd-col2>ul>li")
    .mouseenter(function() {
      //进入
      // 清理定时器
      clearInterval(timeID);
    })
    .mouseleave(function() {
      //离开
      // 设置定时器
      timeID = setInterval(clickRight, 3000);
    });
});

$(function(){// 动态生成服务栏
  var serviceItem = ["话费","机票","酒店","游戏","企业购","加油卡","电影票","火车票","众筹","理财","礼品卡","白条"];
  for(var i=0;i<serviceItem.length;i++){
    $("<li><a href='javascript:void(0);'><i class='iconfont'></i><span>"+serviceItem[i]+"</span></a></li>").appendTo($("#service>ul"));
  }
});// end $


// 公共函数====================================

function setDropDownLayer(selecter) {//将显示下拉列表与设置跳转链接封装在此
  dropDownLayer(selecter);
  setLink(selecter);
}

function setLink(selecter) {/* 设置跳转链接 */
  var linkList = $(selecter + " a");
  for (var i = 0; i < linkList.length; i++) {
    $(linkList[i]).click(function() {
      alert("跳转到：" + $(this).text());
    });
  }
}
function dropDownLayer(selecter) {/* 下拉列表处理函数 */
  $(selecter)
    .children()
    .mouseenter(function() {
      // 改变该区域背景颜色
      $(selecter + ">.dt").addClass("hover");
      $(selecter + ">.dropdown-layer").show();
    })
    .mouseleave(function() {
      $(selecter + ">.dt").removeClass("hover");
      $(selecter + ">.dropdown-layer").hide();
    });
}

function str2arr(str){//将长字符串转换成多个数组组成的数组
  /* 
  这是一个功能函数：
  可以将一组特定格式的字符串==》可以拆分为多个子字符串的每个子字符串用中文分号；隔开，包括最后一个子串末尾，每个子串中需要拆分的词语用空格隔开
  将子串中的词语放入一个数组中，再将这个数组，加入一个大数组中返回
  */
  var start = 0;
  var end = 0;
  var sub_str = "";
  var resuletArr = [];

  while(true){
    end = str.indexOf("；",start);
    if(end == -1){
      break;
    }
    resuletArr.push(str.substring(start,end).split(" "));
    start = end+1;
  }
  return resuletArr;
}

function clickGoTo(ele){//模拟网页跳转
  for(var i=0;i<$(ele).length;i++){
    if(!($($(ele)[i]).hasClass("J_delete"))){
      $($(ele)[i]).click(function(){
        alert("跳转至：" + $(this).text());
        window.location.reload();
      });
    }
  }
}