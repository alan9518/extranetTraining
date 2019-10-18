 // --------------------------------------
 // Get Sharepoint User Information
 // Determine if Internal or External
 // Version 1
 // 22/11/2017 
 // --------------------------------------

 (function ()
 {
    var userInfo = 
    {
        init:function()
        {
            this.$current_Site_Coll_URL = _spPageContextInfo.webAbsoluteUrl;
            this.$current_User_Id = _spPageContextInfo.userId;
            this.cacheDom();
            this.getUserInteralStatus();           
        },
        cacheDom:function()
        {
            this.$bannersNow = $('.bannersnow');
        },
        // ---------------------------------------------
        // Determine if the User is interal or external
        // Syncronous Get Request
        // --------------------------------------------
        getUserInteralStatus:function()
        {
            var $serviceURL = this.$current_Site_Coll_URL + '/_api/web/SiteUserInfoList/Items('+this.$current_User_Id+')';
            var $req;
            if (window.XMLHttpRequest) 
                $req = new XMLHttpRequest();
            else 
                $req = new ActiveXObject("Microsoft.XMLHTTP");

                $req.open('GET', $serviceURL, false); 
                $req.send(null);

            if ($req.status == 200)
                this.isInternalOrExternal($req.responseXML);
        },
        // --------------------------------------------
        // Determine if the User is interal or external
        // Syncronous Get Request
        // --------------------------------------------
        isInternalOrExternal:function($userData)
        {   
            var $isInternal = $userData.getElementsByTagName('content')[0].getElementsByTagName('d:UserType')[0].textContent.toLocaleLowerCase();
            this.showLinks($isInternal);
        },
        // --------------------------------------
        // Show The Content for the user
        // --------------------------------------
        showLinks:function($isInternal)
        {
            if($isInternal === 'internal')
                $(this.$bannersNow.find('#internal').removeClass('hideLink'));
            else
                $(this.$bannersNow.find('#external').removeClass('hideLink'));
        }

    }
    userInfo.init();
 })();