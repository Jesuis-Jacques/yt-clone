import {videos} from '../data/videos.js';


function renderVideoPreview() {
  let videoPreviewHTML = '';

  videos.forEach((video) => {
    videoPreviewHTML += 
      `
        <div class="video-preview">
          <div class="thumbnail-row">
            <a href=${video.link}>
              <img class="thumbnail" src=${video.thumbnails}>
            </a>
            <div class="video-time">${video.time}</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-pic">
              <div class="profile-pic-container">
                <img class="profile-pic" src=${video.channelPic}>
                <div class="profile-pic-hover-container">
                  <img class="profile-pic-hover" src=${video.channelPic}>
                  <div>
                    <p class="video-author-hover">${video.author}</p>
                    <p class="subscribers-no">${video.subscribers} subscribers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="video-info">
              <p class="video-title">
                ${video.title}
              </p>
              <p class="video-author">
                ${video.author}
              </p>
              <p class="video-stats">
                ${video.stats.views} views &#183; ${video.stats.timeCreated}
              </p>
            </div>
          </div>
        </div>
      `;

      document.querySelector('.js-video-preview-grid')
        .innerHTML = videoPreviewHTML;
    
  });
}

renderVideoPreview();
