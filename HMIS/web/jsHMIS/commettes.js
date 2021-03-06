/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var hmisCommettes = {
    tableName: "Commettes",
    f_id: "id",

    loadForm: function () {
        if ($("#swCommettesForm").html() == '') {
            $("#swCommettesForm").load("formHMIS/05newCommette.html", null, function () {
                $('#sessions_time').wickedpicker();
                $('#sessions_timeReminder').wickedpicker();
                new jj("#sessions_date").jjCalendarWithYearSelector(1397, 1420);
                new jj("#sessions_dateReminder").jjCalendarWithYearSelector(1397, 1420);
                $("#cancel_Commettes").button().click(function (e) {
                    hmisCommettes.m_clean();
                    hmisCommettes.m_show_tbl();
                });


//                new jj("#steps_startDate").jjCalendarWithYearSelector(1340, 1420);

//                new jj("#upload_Content").jjAjaxFileUploadEditor('#upload_Content_file', content_content_editor);
//                $("#upload_Content_file").button().click(function () {
//                });
                //============ BY RASHIDI ========>
//                $("#content_insert_tags").button().click(function (e) {
//                    $("#" + cmsContent.f_tags).val($("#" + cmsContent.f_tags).val() + $("#tags_name").val() + ',');//تگ نوشته شده را به یک اینپوت مخفی اضافه می کند
//                   cmsContent.m_insertTags();
//
//                });
//               $('#tags_name').keyup(function () {
//                    if ($("#tags_name").val() === "") {
//                       $("#content_search_tags_result").hide();
//                   }
//                   cmsContent.m_searchTags();
//               });
                hmisCommettes.m_refresh();
                $('#newCommetteForm').show();
                $('#formInvitation').hide();


            });
        }
    },
    m_refresh: function (containerId, sortField, tableHeight) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".refresh";
        param += "&panel=" + (containerId == null ? "swCommettesTbl" : containerId);
        param += "&sort=" + (sortField == null ? "0" : sortField);
        param += "&height=" + (tableHeight == null ? 800 : tableHeight);
        param += "&jj=1";
        new jj(param).jjAjax2(false);
    },
    m_show_form: function () {
        $('#swCommettesTbl').hide();
        $('#swCommettesForm').show();
        hmisCommettes.tabSizeForm();
    },
    m_clean: function () {
        new jj("#" + hmisCommettes.f_content_id).jjVal("");
        new jj("#" + hmisCommettes.f_title).jjVal("");
        new jj("#" + hmisCommettes.f_lang).jjVal("1");
        new jj("#" + hmisCommettes.f_parent).jjVal("0");

    },
    m_add_new: function () {
        jj("do=" + hmisCommettes.tableName + ".add_new&jj=1").jjAjax2(false);
        hmisCommettes.m_show_form();
                $('#newCommetteForm').show();
                $('#formInvitation').hide();

        hmisCommettes.m_clean();
        //        oEditor.execCommand( 'bold');

    },
    m_show_tbl: function () {
        $('#swCommettesTbl').show();
        $('#swCommettesForm').hide();
        if ($('#swCommettesTbl').html() == "") {
            hmisCommettes.m_refresh();
        }
        hmisCommettes.tabSizeTbl();
    },
    m_insert: function () {
//        var valid =  hmisCommettes.m_validation();
//        if (valid == "") {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".insert";
        param += "&" + new jj('#newCommetteForm').jjSerial();
        new jj(param).jjAjax2(false);
        hmisCommettes.m_show_tbl();
        hmisCommettes.m_clean();
//        } else {
//            new jj(valid).jjDialog();
//        }
    },
    m_edit: function () {
//        var valid = hmisPlan.m_validation();
//        if (valid == "") {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".edit";
        param += "&" + new jj('#newCommetteForm').jjSerial();
        param += "&id=" + new jj('#hmis_commettes_id').jjVal();
        new jj(param).jjAjax2(false);
        hmisCommettes.m_show_tbl();
        hmisCommettes.m_clean();
//        } else {
//            new jj(valid).jjDialog();
//        }
    },
//    m_validation: function () {// mohamdad
//        if (new jj("#content_title").jjVal().length < 1) {
//            return "فیلد عنوان نباید کوچکتر از دو کاراکتر باشد";
//        }
//        return "";
//    },
    m_delete: function (id) {
        new jj("آیا از حذف این رکورد اطمینان دارید؟").jjDialog_YesNo(' hmisCommettes.m_delete_after_question(' + id + ');\n', true, "");
    },
    m_delete_after_question: function (id) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".delete";
        param += "&" + hmisCommettes.f_id + "=" + (id == null ? "" : id);
        new jj(param).jjAjax2(false);
        hmisCommettes.m_show_tbl();
        hmisCommettes.m_clean();
    },
    m_select: function (id) {
        $('#newCommetteForm').show();
        $('#formInvitation').hide();

        var param = "";
        param += "do=" + hmisCommettes.tableName + ".select";
        param += "&" + hmisCommettes.f_id + "=" + (id == null ? "" : id);
        new jj(param).jjAjax2(false);
        hmisCommettes.m_show_form();
    },
    m_add_EN: function (id) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".add_EN";
        param += "&" + hmisCommettes.f_id + "=" + (id == null ? "" : id);
        new jj(param).jjAjax2(false);
        new jj("#" + hmisCommettes.f_parent).jjVal(id);
        new jj("#" + hmisCommettes.f_lang).jjVal("2");
        hmisCommettes.m_show_form();
    },
    m_add_Ar: function (id) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".add_Ar";
        param += "&" + hmisCommettes.f_id + "=" + (id == null ? "" : id);
        new jj(param).jjAjax2(false);
        new jj("#" + hmisCommettes.f_parent).jjVal(id);
        new jj("#" + hmisCommettes.f_lang).jjVal("3");
        hmisCommettes.m_show_form();
    },
    //============ BY RASHIDI ========>
    m_add_Ln: function (id, langId) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".add_lang";
        param += "&" + hmisCommettes.f_id + "=" + (id == null ? "" : id);
        param += "&myLang=" + (langId == null ? "1" : langId);
        new jj(param).jjAjax2(false);
        new jj("#" + hmisCommettes.f_parent).jjVal(id);
        new jj("#" + hmisCommettes.f_lang).jjVal(langId);
//        alert(id+"&&&&&"+langId);
        hmisCommettes.m_show_form();
    },
    //<============ BY RASHIDI ========
    m_searchTextInTitle: function (text) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".searchTextInTitle";
        param += "&text=" + (text == null ? "" : text);
        new jj(param).jjAjax2(false);
    },
    m_searchTextInAll: function (text) {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".searchTextInAll";
        param += "&text=" + (text == null ? "" : text);
        new jj(param).jjAjax2(false);
    },
    //============ BY RASHIDI ========>    
    m_searchTags: function () {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".searchTags";
        param += "&" + new jj('#swCommettesForm').jjSerial();
//        param += "&panel=content_search_tags_result";
        new jj(param).jjAjax2(false);
    },
    m_insertTags: function () {
        var param = "";
        param += "do=" + hmisCommettes.tableName + ".insertTags";
        param += "&" + new jj('#swCommettesForm').jjSerial();
//        param += "&panel=content_tags_div";
        new jj(param).jjAjax2(false);
    },
    //<============ BY RASHIDI ========    
    tabSizeTbl: function () {
        $('#swCommettes').css('height', 520);
    },
    tabSizeForm: function () {
        $('#swCommettes').css('height', 378);
    },

    /////////////////////shiran////////////
    showInvitationForm: function (commeteId) {
        hmisCommettes.m_show_form();
        $('#hmis_commettes_id').val(commeteId);
        $('#newCommetteForm').hide();
        $('#formInvitation').show();
    },
    Invitees: function () {//مدعوین

        var param = "";
        var temp = $('#InviteesDiv input:checkbox[class=checkBoxInvitees]:checked');
        var InviteesOutSide = $('#InviteesDiv input:text[class=InviteesOutSide]');

        if (temp.size() == 0 && InviteesOutSide.size() == 0) {//اگر تیک عضوی را نزده بود
            alert("لطفا افراد را انتخاب کنید");
            return;
        }
        var temp1 = "";
        var temp2 = "";
        for (var i = 0; i < temp.size(); i++) {
            temp1 += $(temp[i]).attr('value') + "%23A%23"; //نام چک باکس عدد مورد نظر
        }
        for (var i = 0; i < InviteesOutSide.size(); i++) {
            if ($(InviteesOutSide[i]).val() !== "") {
                temp2 += $(InviteesOutSide[i]).val() + "%23A%23"; //نام چک باکس عدد مورد نظر
            }
        }
        alert(temp2);
        alert(temp1);
        param += "&sessions_Invitees=" + temp1;
        param += "&sessions_InviteesOutSide=" + temp2;
        param += "&commettesId=" + new jj("#hmis_commettes_id").jjVal();//ای دی کمیته
        param += "&" + new jj('#formInvitation').jjSerial();
        param += "&do=Sessions.requestSendComment&jj=1";
        new jj(param).jjAjax2(false);
    },

//    mainTabSetSize: function () {
////        var aa = $("#swContent").children();
////        var bb = 0;
////        for(i=0; i < aa.length; i++){  
////            if($(aa[i]).css("display")!='none'){
////                bb+= new jj($(aa[i]).css("height")).jjConvertToInt() ;
////            }
////        }
////        if(bb==0){
////            $('#tabs').css('height',572);
////        }else{
////            $('#tabs').css('height',bb+44);
////        }
//    }

};
//============ BY RASHIDI ========> 
//function selectSearchResult(selectedTagNo) {
//    $("#tags_name").val($("#tagsResult_td" + selectedTagNo).html());
//    $("#content_search_tags_result").hide();
//}

//function deleteContentTag(deletedTagNo) {
//    new jj("آیا از حذف این برچسب اطمینان دارید؟").jjDialog_YesNo('afterDeleteContentTag(' + deletedTagNo + ');\n', true, "");
//}
//function afterDeleteContentTag(deletedTagNo) {
//
////    var myString = $("#" + cmsContent.f_tags).val();
////    var oldWord = $("#contetn_tag_span" + deletedTagNo).html().toString();
////    var reg = new RegExp(oldWord, "g");
////    myString = myString.replace(reg, "");
////    alert(myString);
//
//    var str = $("#" + cmsContent.f_tags).val();
//    var tagName = $("#contetn_tag_span" + deletedTagNo).html().toString();
//    var reg = new RegExp(tagName, "g");
//    str = str.replace(reg, "");
//    $("#" + cmsContent.f_tags).val(str);
//    $("#contetn_tag_span" + deletedTagNo).remove();
//}
//<============ BY RASHIDI ========  