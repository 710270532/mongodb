define(['jquery','highlight'],function(laypage){
	return {
		init:function(){
			hljs.initHighlightingOnLoad();
			$(function() {
				$('pre code').each(function(i, block) {
					hljs.highlightBlock(block);
				});
			});
		}
	};
});