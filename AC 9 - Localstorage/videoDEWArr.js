/**
 * Representa una clase video on emmagatzemar objectes videos amb "url" i "title".
 * @constructor
 * @param {Array} vids - Array d'objectes {url:"",title:""} d'inicialització. 
  */
function videoDEWArr(vids) {
	this.videos = new Array();

	if (vids)
	{
		vids.forEach((vid)=>{this.setVideo(vid);});
	}
};

/**
 * Comprova si l'objecte té les propietats necessàries per a considerar-se objecte videoDEWArr
 * @param {Object} vid - Array d'objectes {url:"",title:""} d'inicialització
  */
  videoDEWArr.prototype.checkVideo = function(vid) {
	return vid.url && vid.title;
};

/**
 * Recupera un objecte videoDEWArr de l'array de vídeos intern
 * @param {Int} index - Posició del vídeo dins l'array de vídeos intern
  */
videoDEWArr.prototype.getVideo = function(index) {
	if (this.videos && this.videos.length>0)
	{
		return this.videos[index];
	}
	else
	{
		return undefined;
	}
};

/**
 * Afegeix un objecte videoDEWArr a l'array de vídeos intern
 * @param {Object} vids - Objecte del tipus {url:"",title:""}
  */
videoDEWArr.prototype.setVideo = function(vid) {
	if (this.checkVideo(vid))
	{
		this.videos.push(vid);
	}
};

/**
 * Afegeix un conjunt de vídeos a l'array de vídeos intern
 * @param {Array} vids - Array d'objectes {url:"",title:""} d'inicialització opcionals.
  */
videoDEWArr.prototype.setVideos = function(vids) {
	if (vids)
	{
		vids.forEach((vid)=>{this.setVideo(vid);});
	}
};
/**
 * Recupera tots els vídeos de l'array de vídeos intern
  */
videoDEWArr.prototype.getAllVideos = function() {
	return this.videos;
};