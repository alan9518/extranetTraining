<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" meta:progid="SharePoint.WebPartPage.Document" %>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
  <SharePoint:ScriptLink name="clientforms.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="clientpeoplepicker.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="autofill.js" runat="server" LoadAfterUI="true" Localizable="false" /> 
  <SharePoint:ScriptLink name="sp.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.runtime.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.core.js" runat="server" LoadAfterUI="true" Localizable="false" />
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
<head>
  <meta charset="utf-8">
  <title>Extranet Support</title>
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta content="Webflow" name="generator">
  <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/normalize.css" rel="stylesheet" type="text/css">
  <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/webflow.css" rel="stylesheet" type="text/css">
  <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/extranet-pages.css" rel="stylesheet" type="text/css">	
  <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/flex-extranet-46c988e16e8cbe6375f0c22ff.webflow.css" rel="stylesheet" type="text/css">
 
	
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
</script>
  <link href="https://daks2k3a4ib2z.cloudfront.net/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="https://daks2k3a4ib2z.cloudfront.net/img/webclip.png" rel="apple-touch-icon">
    


</head>
<body>
        <style> 
            .modal-backdrop {
                display:none;
            }
            
            #s4-ribbonrow {
                display:none !important;
            }

            div#s4-titlerow {
                display: none !important;
            }

            div#sideNavBox {
                display: none !important;
            }

            #contentBox {
                margin-right: 0px !important;
                margin-left: 0px !important;
                width: 100% !important;
            }

            #contentRow {
              padding-top: 0px;
            }

            #flexFooter {
              display:none !important;
            }

            #s4-bodyContainer {
              padding-bottom: 0px !important;
            }

            #containerParallax{
              padding-left: 0 !important;
              padding-right: 0  !important;
            }

            .container .jumbotron, .container-fluid .jumbotron {
              border-radius: 0px !important;
            }

        </style>
  <div class="header w-nav" data-animation="default" data-collapse="medium" data-duration="400">
    <div class="head-section w-clearfix">
      <div class="logo"><img class="image-14" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/logo.png"></div>
      <div class="header-text">
        <div class="text-block">Extranet</div>
      </div>
    </div>
  </div>
  <div class="bannertop">
    <div class="top-container">
      <h1 class="welcome-title"><span style="color: #009add">Welcome to the Flex<br/>Extranet Support</span></h1>
	<h3 text align="center"><span style="color: #005486">We are here to help.</span></h3>
    </div>
  </div>

	  <div class="bannercontact">
    <div class="c-container">
		<div class="contentleft"><img src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/contact-icon.png"/></div>
		<div class="contentright"><h3 style="color: #005486">Contact us</h3>
		<p>Need assistance with your Extranet page?<br/>
	    We will get you the help you need.</p></div>
		  <div class="clearfix"></div>	  
    </div>
  </div>


  <div class="sections">
    <div class="slider-container">
      <div class="titles">
        <h1 class="titles">Service Now Catalog ticket</h1>
      </div>
	    </div>
  </div>
<div class="bannersnow">
    <div class="snow-container">
	    <center>
        <div id="external" class="external hideLink">
            <img src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/external-user-icon.png" alt=""/>
            
              <p style="color: #ffffff">
                        Please contact the employee that invited you to colaborate,<br/>
                        so he can rise the Service Now ticket
              </p>
        </div>


        <div id="internal" class="internal hideLink">
            <center>
                <img src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/it-team-icon.png" alt=""/>
                <a href="https://flextronicstest.service-now.com" class="btn btn-snow" target="_blank">Create your Service Now ticket</a>
            </center>
        </div>
        
      
      </center>
  </div>
</div>

    
	    <!-- <div class="snow-container">
	<center><img src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/it-team-icon.png" alt=""/></center>
	<center><a href="https://flextronicstest.service-now.com" class="btn btn-snow" target="_blank">Create your Service Now ticket</a></center><br/>
  </div> -->
	
 
  <!-- <div class="spacer"></div> -->
  <div class="footer main-section">
    <div class="container w-container">
      <div class="row-2 w-row">
        <div class="footer-logo w-col w-col-3"><img src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/footer-logo.png"></div>
        <div class="column links-1 w-col w-col-3"><a class="footer-link1" href="https://flex.com/connect">Contact</a><a class="footer-link1" href="https://flex.com/connect/locations">Locations</a><a class="footer-link1" href="https://flex.com/supplier-information">Supplier Information</a></div>
        <div class="links-2 w-col w-col-3"><a class="footer-link1" href="https://flex.com/frequently-asked-questions-faqs">FAQs</a><a class="footer-link1" href="https://flex.com/privacy-policy">Privacy</a><a class="footer-link1" href="https://investors.flex.com/home/default.aspx">Investor Relations</a></div>

      </div>
    </div>
    <div class="divider"></div>
    <div class="social-icons">
      <div class="iconblk1"><a class="w-inline-block" href="https://www.facebook.com/flextronicsintl"><img class="image-6" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/fb.png"></a></div>
      <div class="iconblk2"><a class="w-inline-block" href="http://www.twitter.com/flexintl"><img class="image-7" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/twitter.png"></a></div>
      <div class="iconblk3"><a class="w-inline-block" href="http://www.linkedin.com/company/flexintl"><img class="image-8" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/linkedin.png"></a></div>
      <div class="iconblk4"><a class="w-inline-block" href="http://www.youtube.com/user/FlextronicsIntl"><img class="image-9" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/youtube.png"></a></div>
      <div class="iconblk5"><a class="w-inline-block" href="http://www.instagram.com/flexintl/"><img class="image-10" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/insta.png"></a></div>
      <div class="icon-blk6"><a class="w-inline-block" href="http://blog.sina.com.cn/flextronicsofficialblog"><img class="image-11" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/sina-weibo.png"></a></div>
    </div>
    <div>
      <div class="footer-copyright">&copy;Copyright. All right reserved</div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
  <script src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/webflow.js" type="text/javascript"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
  <script type="text/javascript" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/getUserInformation.js"></script>
  <!-- <script src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/jquery.tinycarousel.js" type="text/javascript"></script> -->
  
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
  

  
</body>
</asp:Content>