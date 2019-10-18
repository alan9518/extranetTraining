/*
 Module to Control the Migration training Videos Page
 Version 2
 11/22/2017
*/



$(document).ready(function(){
    (function(){
      var videos = 
      {
        init : function()
        {
            $image =  'images/Flex-Extranet-video-player.png';
            this.$itemsPerPage = 8;
            this.$currentpage = 1;
            this.$videoArray =
            [
              { 
                "title": "Add a column to a list or library", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=985939af%2D5ede%2D434a%2D83a7%2D14a75c4468f0&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                // "src":'https://extranet.flex.com/sites/ExtranetTra/_layouts/15/videoembedplayer.aspx?site=7395dbc754cc46e59eeda007b62168e2&amp;web=c97283ea4cfd4e6dba16919b82ac997c&amp;folder=8121e356d7c7455093bbcc7e1e4a157d&amp;img=https%3A%2F%2Fextranet%2Eflex%2Ecom%2Fsites%2FExtranetTra%2FExtranet%5FTraining%2FAdd%20a%20column%20to%20a%20list%20or%20library%2FPreview%20Images%2FAdd%20a%20column%20to%20a%20list%20or%20library%5Fmp4%2Epng&amp;auto=1&amp;title=1&amp;lHome=1&amp;lOwner=1',
                
                "image": $image,
                "category":"all lists libraries"
              },

              { 
                "title": "Adding documents to a library", 
                 "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=206bc2cc%2Dd08f%2D4545%2D9aea%2Db4268f4a4789&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                 "image": $image,
                 "category":"all  libraries"
               },

               { 
                "title": "Add events to a SharePoint calendar", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=32e1c2cd%2Dc7cd%2D4157%2D8277%2D01adbd918ab5&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all calendars"
              },


               { 
                "title": "Add items to a list", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=ea78c747%2D6b17%2D45a9%2D884c%2D7bedbe4acbb3&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists"
              },

              { 
                "title": "Create a list", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=ff65a33f%2D99ee%2D4d03%2D9c99%2D48996521a9c6&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists "
              },

              // Row 2

              { 
                "title": "Create your own SharePoint calendar", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=f9264608%2Df22c%2D4277%2Dbeac%2D7a1c80012a2b&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all calendars"
              },

              { 
                "title": "Delete a list or library", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=555b154d%2D4483%2D49a6%2Da934%2D5881d0c5f2e1&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists libraries"
              },

              {
                "title": "Edit or delete items in a list", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=1d51a570%2Ddbb4%2D4f3a%2D8b5a%2D94af6246270a&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists"
              },

             

              { 
                "title": "Find information in a list or library with sorting filtering and views", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=ad8f10f4%2D5165%2D46ee%2Db6a5%2D9f3a875dc918&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists libraries"
              },

              { 
                "title": "Introduction to lists", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=b5e38aec%2Dfc5c%2D4148%2Daff1%2Dbac39766c4c8&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists"
              },

              // Row 3

              { 
                "title": "Introduction to libraries", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=8aa9402c%2D20c4%2D4707%2D9846%2D05153519fe95&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all libraries"
              },

              { 
                "title": "Renaming deleting and adding files within a library", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=e595e06e%2D6768%2D4518%2Da87d%2Dbd2c8121c40e&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all libraries"
              },

              { 
                "title": "Set up an alert or other settings for a list", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=066dae88%2D3968%2D45a5%2D8b3e%2Daa47bc44f87d&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists"
              },

              { 
                "title": "Share a list or library with your team", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=e15db982%2D9e82%2D436a%2D8e86%2Da8f17a702124&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all lists libraries"
              },

              { 
                "title": "Understanding permissions in SharePoint", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=c79529ce%2D503b%2D4b58%2D9c62%2De3f271be7b29&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all"
              },

              // Row 4

              { 
                "title": "Use columns and folders together to view library items", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=6b2d4cff%2Ddba6%2D4c70%2D88de%2D0bd0f1828220&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all libraries"
              },

              { 
                "title": "Use columns to track sort and filter files in a SharePoint library", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=946ddf56%2Dcdeb%2D4bbc%2Db6ac%2D655ca15d9b70&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all libraries"
              },

              { 
                "title": "Use folders and File Explorer to organize your documents in Office 365 ", 
                "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=fa8ab0a7%2Da3af%2D43b0%2D9b68%2Daad458da6b2d&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                "image": $image,
                "category":"all"
              },

            
               { 
                 "title": "Viewing and editing files in a library", 
                 "src" : "https://flextronics365.sharepoint.com/portals/hub/_layouts/15/VideoEmbedHost.aspx?chId=83581ea8%2D822a%2D45da%2Da5ec%2D3d263eb1c9a5&amp;vId=b958223b%2D22a2%2D4371%2Dba6b%2D1cdecfe62a51&amp;width=853&amp;height=480&amp;autoPlay=true&amp;showInfo=true",
                 "image": $image,
                 "category":"all libraries"
               },


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
                },
                // Dummy

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
               { "title": "Initiate a signature collection workflow for a document", 
               "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l09&flag=T",
               "image": $image,
               "category":"all"
               },

               { "title": "Complete a signature collection workflow for a document", 
               "src" : "https://ondemand.flextronics.com/OnDemand.html?lesson=en_sharepoint_c04_l10&flag=T",
               "image": $image,
               "category":"all"
               },

               { "title": "Initiate a signature collection workflow for a document", 
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
        // Render Items with Pagination
        // --------------------------------------
        renderContent:function($videoArray, $categoryName, $startPage)
        {
          // Generate Pagination
         
          this.createJSONArrayPagination($videoArray,$startPage);

          var $limitPage = ($startPage * this.$itemsPerPage) + this.$itemsPerPage;
          
          // Create Videos Title
          var $contentTitle =  document.createElement('h3');
              $contentTitle.appendChild(document.createTextNode($categoryName.toLocaleUpperCase() + ' Videos'));
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
                  console.log($auxCount);
                    var $contentRow = document.createElement('div');
                        $contentRow.className = 'row';
                
                // Set the 4 Columns Per Row
                // And the Content
                    do
                    {
                      // Stop the Loop if surpass the limit
                        if($auxCount >= $limitPage)
                            break;

                        if (typeof $videoArray[$auxCount] == 'undefined')
                            break;

                       
                        var $contentColumn = document.createElement('div');
                            $contentColumn.className = 'col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 filterVideo ' + $videoArray[$auxCount].category;


                        var $videoLink =  document.createElement('a');
                        var $lityAtt = document.createAttribute('data-lity');
                            $videoLink.setAttributeNode($lityAtt);
                            $videoLink.href = $videoArray[$auxCount].src;
              
                        var $videoImage = document.createElement('img');
                            $videoImage.src = $videoArray[$auxCount].image;
                            $videoImage.className = 'video_Image';
              


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
            console.log($contentContainer);
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
