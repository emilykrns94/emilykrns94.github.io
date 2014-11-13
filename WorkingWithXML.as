package
{
	import starling.display.Image;
	import starling.events.Event;
	import starling.events.Touch;
	import starling.events.TouchEvent;
	import starling.events.TouchPhase;
	import starling.core.Starling;
	import starling.utils.AssetManager;
	import starling.textures.Texture;

	import feathers.themes.MetalWorksMobileTheme;
	import feathers.controls.PanelScreen;
	import feathers.controls.ScrollText;
	import feathers.controls.ScrollContainer;
	import feathers.layout.VerticalLayout;
	import feathers.events.FeathersEventType;

	import flash.filesystem.File;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.events.Event;

	public class WorkingWithXML extends PanelScreen
	{
		private const ENDPOINT_URL:String = "http://emilykrns94.github.io/"
		private var assetMgr:AssetManager;
		private var slideshowXML:XML;
		private var activeSlideImage:Image = null;
		private var currentSlideIndex:uint = 0;
		private var numSlides:uint;
		
		public function WorkingWithXML()
		{
			super();
			this.addEventListener(FeathersEventType.INITIALIZE,initializeHandler);

		}
		
		public function initializeHandler(e:starling.events.Event):void
		{
			this.removeEventListener(FeathersEventType.INITIALIZE,initializeHandler);
			this.addEventListener(starling.events.Event.RESIZE,stageResized);
			loadSlideShowXML();
		}
		
		private function loadSlideShowXML()
		{
			var theURL:URLRequest = new URL
		}
	}
	

}