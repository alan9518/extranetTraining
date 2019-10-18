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
    <title>How to Set Up an External User Account | SharePoint Extranet</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/normalize.css" rel="stylesheet" type="text/css">
        <!-- Lightbox -->
    <link rel="stylesheet" href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/lity.min.css">
    <link rel="stylesheet" href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/bootstrap.min.css">
    <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/webflow.css" rel="stylesheet" type="text/css">
    <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/extranet-pages.css" rel="stylesheet" type="text/css">	
    <link href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/flex-extranet-46c988e16e8cbe6375f0c22ff.webflow.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/css/filterStyles.css">
  
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    <!-- Bootstrap 3.3.7 JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

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
    
    <!--  
       Menu 
    -->
    <div class="header w-nav" data-animation="default" data-collapse="medium" data-duration="400">
        <div class="head-section w-clearfix">
          <div class="logo"><img class="image-14" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/logo.png"></div>
          <div class="header-text">
            <div class="text-block">Extranet</div>
          </div>
        </div>
      </div>

      <!--  
        Main Banner
    -->
    
      <div class="trainingbannertop ">
        <div class="top-container">
          <h1 class="welcome-title">
            <span style="color: #009add">Welcome to the Flex<br/> Extranet Training</span>
         </h1>
            <h3 text align="center">
            <span style="color: #005486">
              We are here to help.
            </span>
          </h3>
        </div>
    </div>

    <!--  
       Filter Options 
    -->
    
    <h1 class="titles">Training Videos</h1>
    
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="filterList center-block" >
                    <button class="btnFilter fil-cat active"  data-filter="all" id="all">All</button>
                    <button class="btnFilter fil-cat" data-filter="lists" id="lists">Lists</button>
                    <button class="btnFilter fil-cat" data-filter="libraries" id="libraries">Libraries</button>
                    <button class="btnFilter fil-cat" data-filter="calendars" id="calendars">Calendars</button>
                </div>
            </div>
        </div>
    </div>


    <!--  
       Video Container 
    -->

    <div class="video_Content" id="video_Content"> 

        <!--  
            Loader 
        -->
            
        <div class="loader hide">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>  
       
        <!--  
           Videos 
        -->
        <div id="videos"></div>
       
       
         <!--  
           Pagination Options
        -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="filterList center-block" id="pagination"></div>
                </div>
            </div>
        </div>
       
    </div>

    
    <!-- Footer -->
    <div class="spacer"></div>
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


    <!-- Scripts -->

    <script src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/webflow.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
  
     <!-- LightBox -->
     <script type="text/javascript" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/lity.min.js"></script>
     
    <!-- Video Preview -->
    <script type="text/javascript" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/jquery.cj_image_video_previewer.js"></script>
    <script type="text/javascript" src="https://extranet.flex.com/sites/ExtranetTra/SiteAssets/js/videos.js"></script>
    
    <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
    
  </body>
</asp:Content>