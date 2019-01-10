var CanvasAngular=angular.module('CanvasAngular', [])

.directive('dyrektywaSchnecke', [function() {

  return {
    
	restrict: 'EA',
	
	link: function (scope, element, attrs) {
		
	var d = element[0].getContext('2d');
	d.strokeStyle='#f11212';
	d.lineWidth=3.5;
	function radianAngle(angle) {
		return radians = (Math.PI/180)*angle;
	}

var x=75;
var dl=50;
var x2=105;
var dl2=360;
var prom;
var colors=['#046af4','#ecf404','#09f404','#f404e6','#f9f600','#000000'];
var wsk=0;

	function luk1(p,ks,step,k){
			
			p=p-0.02;
			ks=ks+step;
			//element.innerHTML="go go "+ks+"   "+p;
			//c.lineTo(60,40);
			//document.getElementById('slider').innerHTML="promien=  "+p+"kat=  "+ks;
			d.arc(155,75,p, radianAngle(ks), radianAngle(ks+step),k);
			d.stroke();
				if (ks>3380){
					//document.getElementById('slider').innerHTML="end "+p;
					x2=105;
					dl2=360;
					d.beginPath();
					wsk=wsk+1;
					d.strokeStyle = colors[wsk];
					luk1(x,dl2,-1,true);
					return 0}
				if (ks<-3380){
					//document.getElementById('slider').innerHTML="end "+p;
					//x=100;
					dl=0;
					d.beginPath();
					wsk=wsk+1;
					d.strokeStyle = colors[wsk];
					if (wsk>5){/*return 0*/wsk=0}
					luk1(x,dl,1,false);
					return 0}
			
			//setTimeout(luk,5);
			setTimeout(function(){luk1(p,ks,step,k)}, 5);
			
			}
			luk1(x,dl,1,false);			
		}
  };
}]);
