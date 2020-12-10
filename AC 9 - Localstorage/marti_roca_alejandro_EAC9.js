class videoDEWStorage{
    constructor(){
        if(!localStorage.getItem("videos")){
            localStorage.setItem("videos", JSON.stringify(new Array));
        }
    }
    
    getLocalStorage(){
        return JSON.parse(localStorage.getItem("videos"));
    }
    
    setLocalStorage(videos){
        localStorage.setItem("videos", JSON.stringify(videos));
    }

    setVideo(video_info_string){
        let peli = video_info_string;
        let videos = this.getLocalStorage();
        videos.push(peli)
        this.setLocalStorage(videos);
    }

    setVideos(videos_info_string){
        let all = videos_info_string;
        var videos = this.getLocalStorage();
        all.forEach(
            function(peli){
                videos.push(peli);
            }
        );
        this.setLocalStorage(videos);
    }

    getVideo(id){
        let videos = this.getLocalStorage();
        return videos[id];
    }

    getAllVideos(){
        return this.getLocalStorage();
    }
}