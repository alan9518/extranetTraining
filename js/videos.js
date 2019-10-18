// --------------------------------------
// Module to Control the Migration training Videos Page
// Version 2
// 11/22/2017
// --------------------------------------


$(document).ready(function(){
    (function(){
      var videos = 
      {
        init : function()
        {
            $image =  'https://extranet.flex.com/sites/ExtranetTra/SiteAssets/images/Flex-Extranet-video-player.png';
            this.$imageURL = 'https://extranet.flex.com/sites/ExtranetTra/Extranet_Training/Add%20a%20column%20to%20a%20list%20or%20library/Preview%20Images/Add%20a%20column%20to%20a%20list%20or%20library_mp4.png';
            this.$itemsPerPage = 8;
            this.$currentpage = 1;
            this.$videoArray =
            [
              // Row 1

                  { 
                    "title": "Add a column to a list or library", 
                    "src":'https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=1c9509b35461474ba9557be19c703030&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FAdd%20a%20column%20to%20a%20list%20or%20library%2FPreview%20Images%2FAdd%20a%20column%20to%20a%20list%20or%20library%5Fmp4%2Epng&amp;auto=1',                
                    "image": null,
                    "category":"all lists libraries"
                  },
                  

                  { 
                    "title": "Adding documents to a library", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=4daf26197d8c4f51bebb478217e322b0&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FAdding%20documents%20to%20a%20library%2FPreview%20Images%2FAdding%20documents%20to%20a%20library%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all  libraries"
                  },


                  { 
                    "title": "Adding events to a SharePoint calendar", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=17509eb5384742c9948ddf36b1aa2308&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FAdding%20events%20to%20a%20SharePoint%20calendar%2FPreview%20Images%2FAdding%20events%20to%20a%20SharePoint%20calendar%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all calendars"
                  },

                  

                  { 
                    "title": "Add items to a list", 
                    "src": "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=e0d241b9e1574b3983e676fedca8831b&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FAdd%20items%20to%20a%20list%2FPreview%20Images%2FAdd%20items%20to%20a%20list%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists"
                  },

                  { 
                    "title": "Create a list", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=654e7c66891d46afbfe89bb991a3fa8a&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FCreate%20a%20list%2FPreview%20Images%2FCreate%20a%20list%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists "
                  },


                  { 
                    "title": "Create your own SharePoint calendar", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=cffcb7aac9574340bc8da3d14981886e&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FCreate%20your%20own%20SharePoint%20calendar%2FPreview%20Images%2FCreate%20your%20own%20SharePoint%20calendar%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all calendars"
                  },


                  { 
                    "title": "Delete a list or library", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=64dd6f2badb649898f7b325d010334d1&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FDelete%20a%20list%20or%20library%2FPreview%20Images%2FDelete%20a%20list%20or%20library%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists libraries"
                  },

                  {
                    "title": "Edit or delete items in a list", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=f3a56ddfcec44d90bf641cfca5b346fa&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FEdit%20or%20delete%20items%20in%20a%20list%2FPreview%20Images%2FEdit%20or%20delete%20items%20in%20a%20list%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists"
                  },


              // Row 2

                  { 
                    "title": "Find information in a list or library with sorting filtering and views", 
                    "src": "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=d228bb1651e14d308879cc65ce24dc6d&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FFind%20information%20in%20a%20list%20or%20library%20with%20sorting%20filtering%20and%20views%2FPreview%20Images%2FFind%20information%20in%20a%20list%20or%20library%20with%20sorting%20filtering%20and%20views%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists libraries"
                  },


                  { 
                    "title": "Introduction to lists", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=837efa96ca924740adb4a45fd34fef41&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FIntroduction%20to%20lists%2FPreview%20Images%2FIntroduction%20to%20lists%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists"
                  },


                  { 
                    "title": "Introduction to libraries", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=e5223370c69d4089864e128c6248ad0d&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FIntroduction%20to%20libraries%2FPreview%20Images%2FIntroduction%20to%20libraries%5Fmp4%2Epng&amp;auto=1",                
                    "image": null,
                    "category":"all libraries"
                  },

                  { 
                    "title": "Renaming deleting and adding files within a library", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=7f5ad53cbb4d45168bb68d46567bebf3&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FRenaming%20deleting%20and%20adding%20files%20within%20a%20library%2FPreview%20Images%2FRenaming%20deleting%20and%20adding%20files%20within%20a%20library%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all libraries"
                  },

                  { 
                    "title": "Set up an alert or other settings for a list", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=597dd525e96e4dcf9c73f9f0ed1730f4&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FSet%20up%20an%20alert%20or%20other%20settings%20for%20a%20list%2FPreview%20Images%2FSet%20up%20an%20alert%20or%20other%20settings%20for%20a%20list%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists"
                  },

                  { 
                    "title": "Share a list or library with your team", 
                    "src":"https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=5cb0a217e63b4ccbb537328cdad58f91&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FShare%20a%20list%20or%20library%20with%20your%20team%2FPreview%20Images%2FShare%20a%20list%20or%20library%20with%20your%20team%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all lists libraries"
                  },

                  { 
                    "title": "Understanding permissions in SharePoint", 
                    "src": "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=a8186171575e4b8ba57a27950dad9cdf&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FUnderstanding%20permissions%20in%20SharePoint%2FPreview%20Images%2FUnderstanding%20permissions%20in%20SharePoint%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all"
                  },


                  { 
                    "title": "Use columns and folders together to view library items", 
                    "src" : "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=8d1147431efb4426939d99fe0a09d2ef&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FUse%20columns%20and%20folders%20together%20to%20view%20library%20items%2FPreview%20Images%2FUse%20columns%20and%20folders%20together%20to%20view%20library%20items%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all libraries"
                  },
                
                  
              // Row 3
                  { 
                    "title": "Use columns to track sort and filter files in a SharePoint library", 
                    "src" : "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=fe54b4613d8c4441a09d30eb490f12ee&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FUse%20columns%20to%20track%20sort%20and%20filter%20files%20in%20a%20SharePoint%20library%2FPreview%20Images%2FUse%20columns%20to%20track%20sort%20and%20filter%20files%20in%20a%20SharePoint%20library%5Fmp4%2Epng&amp;auto=1",
                    "image": null,
                    "category":"all libraries"
                  },

                  { 
                    "title": "Use folders and File Explorer to organize your documents in Office 365", 
                    "src" : "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=62efcffb3a8044c682e7cd590eb6fd52&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FUse%20folders%20and%20File%20Explorer%20to%20organize%20your%20documents%20in%20Office%20365%2FPreview%20Images%2FUse%20folders%20and%20File%20Explorer%20to%20organize%20your%20documents%20in%20Office%20365%5Fmp4%2Epng&amp;title=1&amp;lHome=1&amp;lOwner=1",
                    "image": null,
                    "category":"all"
                  },

                
                  { 
                    "title": "Viewing and editing files in a library", 
                    "src" : "https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=f0b07b4f8f6a4dc285fa1760dd6550c1&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FViewing%20and%20editing%20files%20in%20a%20library%2FPreview%20Images%2FViewing%20and%20editing%20files%20in%20a%20library%5Fmp4%2Epng&amp;title=1&amp;lHome=1&amp;lOwner=1",
                    "image": null,
                    "category":"all libraries"
                  },

                // on Demmand Videos
                  { "title": "Editing your site", 
                    "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=EN_SHAREPOINT_C02_L01&flag=T",
                    "image": $image,
                    "category":"all"
                  },

                  { "title": "Assign permissions to a single item", 
                    "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=EN_SHAREPOINT_C02_L02&flag=T",
                    "image": $image,
                    "category":"all"
                  },

                  { "title": "Create surveys", 
                    "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c02_l03&flag=T",
                    "image": $image,
                    "category":"all"
                  },

                  { "title": "Introduction to standard workflows", 
                    "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l01&flag=T",
                    "image": $image,
                    "category":"all"
                  },

                  { "title": "Associate an approval workflow with a document", 
                    "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l02&flag=T",
                    "image": $image,
                    "category":"all"
                  },

              // Row 4

               { "title": "Initiate an approval workflow for a document", 
                 "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l03&flag=T",
                 "image": $image,
                 "category":"all"
               },

               { "title": "Complete an approval workflow for a document", 
                 "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l04&flag=T",
                 "image": $image,
                 "category":"all"
               },

              { 
                "title": "Associate a feedback collection workflow with a document", 
                "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l05&flag=T",
                "image": $image,
                "category":"all"
              },

                { 
                  "title": "Initiate a signature collection workflow for a document", 
                "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l09&flag=T",
                "image": $image,
                "category":"all"
                },

                { "title": "Complete a signature collection workflow for a document", 
                "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l10&flag=T",
                "image": $image,
                "category":"all"
                }
            
            ]
            
            this.cacheDom();
            
            this.renderContent(this.$videoArray, "All", 0);
            this.bindEvents();
        },
        // --------------------------------------
        // Save Dom Elements
        // --------------------------------------
        cacheDom: function()
        {
           this.$videosContainer = $('#video_Content');
           this.$videos = $('#videos');
           this.$paginationContainer = $('#pagination');
        },
        createImageURL:function($imageName)
        {
            var $baseURL = 'https://extranet.flex.com/sites/ExtranetTra/Extranet_Training/';
            var $imageNameURL = $imageName.replace(/ /g, '%20');
            var $imageURL = $baseURL + $imageNameURL + '/Preview%20Images/' + $imageNameURL + '_mp4.png';
            return $imageURL;
        },
        // --------------------------------------
        // Show Loader for Post
        // --------------------------------------
        showLoaders: function($showLoader)
        {                
            if($showLoader === true)
              $('.loader').removeClass('hide');
            else
              $('.loader').addClass('hide');
        },
        // --------------------------------------
        // Calculate Number of Pages for Pagination
        // --------------------------------------
        getNumberofPages:function($videoArray)
        {
          var $numPages = 0;
          if($videoArray != null && this.$itemsPerPage != null)
          {
            $numPages = Math.ceil($videoArray.length / this.$itemsPerPage);
          }
          return $numPages;
        },
        // --------------------------------------
        // Render Items with Pagination
        // --------------------------------------
        createJSONArrayPagination:function($videoArray,$selectedPage)
        {
          $(this.$paginationContainer.empty());
          var $numPages = this.getNumberofPages($videoArray);

          for(var $pagesCounter = 0; $pagesCounter<$numPages; $pagesCounter++)
          {
            var $pageButton = document.createElement('button');
                $pageButton.className = 'btnFilter btnPag';
                $pageButton.innerHTML = $pagesCounter + 1;
                $pageButton.id = $pagesCounter;
              // Add Active Class
                if($pagesCounter === $selectedPage)
                  $pageButton.className += ' active';

              $(this.$paginationContainer).append($pageButton);
          }

        },
        // --------------------------------------
        // First Letter Uppercase
        // --------------------------------------
        uppercaseLetter:function ($text)
        {
          return $text.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
        },
        // -------------------------------------- 
        // Render Items with Pagination
        // --------------------------------------
        renderContent:function($videoArray, $categoryName, $startPage)
        {
          // Generate Pagination
          var $that = this;
          this.createJSONArrayPagination($videoArray,$startPage);

          var $limitPage = ($startPage * this.$itemsPerPage) + this.$itemsPerPage;
          
          // Create Videos Title
          var $contentTitle =  document.createElement('h3');
              $contentTitle.appendChild(document.createTextNode(this.uppercaseLetter($categoryName) + ' Videos'));
              $contentTitle.className = 'category_Title';

          // Videos Container
          var $contentContainer = document.createElement('div');
              $contentContainer.className = 'container';
              $contentContainer.id = 'containerVid';

          // Iterate JSON

            for(var $videoIterator = ($startPage * this.$itemsPerPage); $videoIterator < $limitPage; $videoIterator++ )
            {
              
              var $auxCount = $videoIterator;
              
              // Create the Rows of the Container
                 if($auxCount % 4 == 0)
                 {
                  var $contentRow = document.createElement('div');
                      $contentRow.className = 'row';
                
                // Set the 4 Columns Per Row
              
                    do
                    {
                      // Stop the Loop if surpass the limit
                        if($auxCount >= $limitPage)
                            break;

                        if (typeof $videoArray[$auxCount] == 'undefined')
                            break;

                       
                        var $contentColumn = document.createElement('div');
                            $contentColumn.className = 'col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 filterVideo ' + $videoArray[$auxCount].category;
                            // $contentColumn.className = 'col-lg-3 col-md-3 col-sm-6 col-xs-12 filterVideo ' + $videoArray[$auxCount].category;


                        var $videoLink =  document.createElement('a');
                        var $lityAtt = document.createAttribute('data-lity');
                            $videoLink.setAttributeNode($lityAtt);
                            $videoLink.href = $videoArray[$auxCount].src;
              
                        var $videoImage = document.createElement('img');
                            $videoImage.className = 'video_Image';
                            if($videoArray[$auxCount].image === null)
                            {
                              $videoImage.src = $that.createImageURL($videoArray[$auxCount].title);
                              $videoImage.className += ' imageURL';
                            }
                            else
                              $videoImage.src = $videoArray[$auxCount].image;
                              

                        var $videoName = document.createElement('p');
                            $videoName.appendChild(document.createTextNode($videoArray[$auxCount].title)); 
                            $videoName.className = 'videoName';
              

                        $($videoImage).appendTo($videoLink);
                        $($videoName).appendTo($videoLink);
                        $($videoLink).appendTo($contentColumn);
                        $($contentColumn).appendTo($contentRow);
              
              
                        $auxCount = $auxCount + 1;
                   }
                   while($auxCount < $videoIterator +4)
                 }

                $($contentRow).appendTo($contentContainer);
            }

            // Append to the Parent Container
            $($contentTitle).prependTo($contentContainer);
            $($contentContainer).appendTo($('#videos'));

        },
        // --------------------------------------
        // Set Click  Events
        // --------------------------------------
        bindEvents: function()
        {   
            $(document).on('click','.fil-cat',this.filterVideos.bind(this));
            $(document).on('click','.btnPag',this.changePage.bind(this));
        },
        // --------------------------------------------
        // Filter JSON Data and Display the New Videos
        // --------------------------------------------
        filterVideos:function(event)
        {
          event.preventDefault();
          var $cat = event.target.attributes[1].value;
          var $that = this;

          $('.btnFilter.fil-cat.active').removeClass('active');
          $('#'+$cat).addClass('active')

          $(this.$videos.empty());
          this.showLoaders(true);

          window.setTimeout(function()
          {
            $that.renderContent($that.filterCategory($cat),$cat,0);
            $that.showLoaders(false);
          },350);
        },
        // --------------------------------------------
        // Get Selected Category
        // --------------------------------------------
        filterCategory:function($cat)
        {
            var $newVideosObject = this.$videoArray.filter(function($video){
              return $video.category.indexOf($cat) >= 0;
          });

          return $newVideosObject;
        },
        // --------------------------------------------
        // Change the Current Page
        // --------------------------------------------
        changePage:function(event)
        {
          event.preventDefault();
          var $newPage = event.currentTarget.id;
          var $cat = $('.btnFilter.fil-cat.active').attr('id');
          var $that = this;

          $('.btnFilter.btnPag.active').removeClass('active'); 

          $(this.$videos.empty());
          this.showLoaders(true);
          
          window.setTimeout(function()
          {
            $that.renderContent($that.filterCategory($cat),$cat,$newPage);
            $that.showLoaders(false);
            $('#'+$newPage).addClass('active')
          },350);

        }
      }  
      videos.init();
    })();
})
