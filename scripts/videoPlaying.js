import {videos} from "../data/videos.js";


function displayPlayingVideo () {
  let videoDisplayHTML = '';

  videos.forEach((video) => {
    const html = 
    `
      <div class="video-playing-section">
        <div class="video-playing-details">
          <div class="video-playing-container">
            <img class="video-playing-thumbnail" src=${video.thumbnails}>
          </div>

          <div class="creator-summary-container">
            <p class="video-playing-title">
              ${video.title}
            </p>
            <div class="creator-summary">
              <img class="creator-profile-pic" src=${video.channelPic}>
              <div>
                <p class="video-creator">${video.author}</p>
                <p class="creator-subscribers-no">${video.subscribers} subscribers</p>
              </div>
              <div class="btn-collection">
                <button class="join-btn">Join</button>
                <button class="subscribe-btn">
                  <img class="subscribe-icon" src="icons/video-display/subscribe.svg">
                  Subscribe
                </button>

                <div class="video-playing-likes-dislikes-icons">
                  <button class="video-playing-likes-btn">
                    <img class="video-playing-like-icon" src="icons/video-display/hand-like-icon.png">
                    <span>Likes</span>
                  </button>
                  <button class="video-playing-dislikes-btn">
                    <img class="video-playing-dislike-icon" src="icons/video-display/hand-dislike-icon.png">
                  </button>
                </div>
                <button class="share-btn">Share</button>
                <button class="more-btn">
                  <img src="icons/video-display/more-info-icon-horizontal.png">
                </button>
              </div>
            </div>

          </div>

          <div class="video-playing-description-container">
            <div class="video-stats-container">
              <div class="video-stats">
                <p>${video.stats.views} views</p>
                <p>${video.stats.timeCreated}</p>
              </div>
              <div class="video-tags">
                <p>${video.tag}</p>
                <p>${video.tag}</p>
                <p>${video.tag}</p>
              </div>
            </div>
            <div class="video-playing-description">
              <p>
                Plenty talk about the Video: We look at the 3 ways everyone becomes a software engineer: college, coding bootcamps, and self-taught. Which one you choose depends on your time, budget, and learning preferences, but all of them get you into the software engineering industry. … 
              </p>
            </div>
          </div>
        </div>
        
        <div class="comment-section-container">
          <div class="comment-header-container">
            <div class="comment-header">
              <span class="total-comments">
                826 Comments
              </span>
              <div class="sortby-icon-box">
                <img class="sortby-icon" src="icons/video-display/sort-by-icon">
                <span>Sort by</span>
              </div>
            </div>
            <div class="current-user-comment-box">
              <div class="current-user-picture-box">
                <img class="current-user-profile-picture" src="channel-pictures/avatar-image.jpg">
              </div>
              <input 
                class="current-user-comment-input" type="text" placeholder="Add your comment">
            </div>
          </div>
          <div class="commenters-section">
            <div class="commenter-avatar-box">
              <a href="https://www.youtube.com/supersimpledev">
                <img class="commenter-picture" src="channel-pictures/my-channel.jpeg">
              </a>
            </div>
            <div class="comment-info-container">
              <div class="comment-info">
                <span class="commenter-username">
                  @jacquesnotjack
                </span>
                <div class="comment-time-created">
                  2 years ago
                </div>
              </div>
              <div class="comment-container">
                <div class="video-playing-comment">
                  The full thoughts on the the commenter's mind
                </div>
                <div class="comment-reactions">
                  <div class="like-btn-container">
                    <img class="comment-likes-icon" src="icons/video-display/hand-like-icon.png">
                  </div>
                  <span class="comment-likes">likes No</span>
                  <img 
                    class="comment-dislike-icon"
                    src="icons/video-display/hand-dislike-icon.png">
                  <button class="comment-reply-btn">
                    Reply
                  </button>
                </div>
              </div>
              <div class="comment-replies-box">
                <img class="comment-replies-icon" src="icons/video-display/arrow-down-icon.png">
                <p>29 replies</p>
              </div>
            </div>
            <div class="more-info-button">
              ...
            </div> 
          </div>
        </div>
      </div>
    `

    videoDisplayHTML += html;
  });
}

let isOpen = false;

function openSidebar () {
  let sidebarHTML = '';
  const sidebarBoxElement = document.querySelector('.js-sidebar-box');

  if (isOpen === false) {
    document.querySelector('.js-hamburger-menu')
      .addEventListener('click', () => {
        sidebarHTML += 
          ` 
            <div class="video-playing-page-sidebar js-video-playing-page-sidebar">
              <div class="video-playing-sidebar-header-section">
                <img class="hamburger-side-menu js-hamburger-side-menu" src="icons/hamburger-menu.svg">
                <img class="youtube-logo" src="icons/youtube-logo.svg">
              </div>
              <div class="video-playing-home-sub-box">
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/home.svg">
                  <div class="video-playing-sidebar-label">
                    Home
                  </div>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/subscribe.svg">
                  <div class="video-playing-sidebar-label">
                    Subscriptions
                  </div>
                </div>
              </div>
              <div class="current-user-activity-sidebar-link">
                <div class="video-playing-sidebar-link">
                  <span class="extra-header-link-you">
                    You
                  </span>
                  <img class="arrow-icon" src="icons/video-display/arrow-right-icon.png">
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/your-channel-icon.png">
                  <span class="video-playing-sidebar-label">
                    Your channel
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/history-icon.png">
                  <span class="video-playing-sidebar-label">
                    History
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/playlist-icon.png">
                  <span class="video-playing-sidebar-label">
                    Playlists
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/your-videos-icon.png">
                  <span class="video-playing-sidebar-label">
                    Your videos
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/watch-later-icon.png">
                  <span class="video-playing-sidebar-label">
                    Watch Later
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/hand-like-icon.png">
                  <span class="video-playing-sidebar-label">
                    Liked videos
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/download-icon.png">
                  <span class="video-playing-sidebar-label">
                    Downloads
                  </span>
                </div>
              </div>
              <div>
                <div class="extra-header-link-explore">
                  Explore
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/trending-icon.png">
                  <span class="video-playing-sidebar-label">
                    Trending
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/movies-icon.png">
                  <span class="video-playing-sidebar-label">
                    Movies
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/news-icon.png">
                  <span class="video-playing-sidebar-label">
                    Latest News
                  </span>
                </div>
              </div>
              <div class="utilities-box">
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/settings-icon.png">
                  <span class="video-playing-sidebar-label">
                    Settings
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/help-icon.png">
                  <span class="video-playing-sidebar-label">
                    Help
                  </span>
                </div>
                <div class="video-playing-sidebar-link">
                  <img src="icons/video-display/send-your-thoughts-icon.png">
                  <span class="video-playing-sidebar-label">
                    Send your thoughts
                  </span>
                </div>
              </div>
              <div>
                <span>
                  About the Dev
                </span>
                <span>
                  Copyright
                </span>
                <span>
                  Contact the Dev
                </span>
                <span>
                  Terms and Conditions
                </span>
                <span>
                  @ 2024 Jacquesnotjack
                </span>
              </div>
            </div>
          `;
        sidebarBoxElement.innerHTML = sidebarHTML;

        sidebarBoxElement.classList.add("is-open-sidebar");

        isOpen = true;

        document.querySelector('.js-hamburger-side-menu').addEventListener('click', closeSidebar);
      });
  }
}

function closeSidebar () {
  if (isOpen === true) {
        let sidebarBoxElement = document.querySelector('.js-sidebar-box');
        sidebarBoxElement.classList.remove("is-open-sidebar");
        sidebarBoxElement.innerHTML = '';
        isOpen = false;

        document.addEventListener('click', (event) => {
          if (event.target.classList.contains('js-hamburger-side-menu')) {
            closeSidebar();
          }
        });
      };
      return;
  }

displayPlayingVideo();

openSidebar();
closeSidebar();