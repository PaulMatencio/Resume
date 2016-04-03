function logClicks(a,e){clickLocations.push({x:a,y:e}),console.log("x location: "+a+"; y location: "+e)}function initializeMap(){function a(){var a=[];a.push(bio.contacts.location);for(var e in education.schools)a.push(education.schools[e].location);for(var t in work.jobs)a.push(work.jobs[t].location);for(var o in project.projects)a.push(project.projects[o].location);return a}function e(a){var e={icon:"images/brownMaerker-t.png",image:null},t=mapmaker[a];return null!=t&&(e.icon={url:t.icon,size:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)},e.image="<div><img src='"+t.image+"' height='32' width='32' alt='City image'></div>"),e}function t(a){var t=a.geometry.location.lat(),o=a.geometry.location.lng(),s=a.formatted_address,i=s.split(",")[0].trim(),n=window.mapBounds,l=e(i),c=new google.maps.Marker({map:map,position:a.geometry.location,icon:l.icon,title:s}),r=s;null!=l.image&&(r=l.image);var p=new google.maps.InfoWindow({content:r});google.maps.event.addListener(c,"click",function(){p.open(map,c)}),n.extend(new google.maps.LatLng(t,o)),map.fitBounds(n),map.setCenter(n.getCenter())}function o(a,e){e==google.maps.places.PlacesServiceStatus.OK&&t(a[0])}function s(a){var e=new google.maps.places.PlacesService(map);for(var t in a){var s={query:a[t]};e.textSearch(s,o)}}var i,n={disableDefaultUI:!0,zoomControl:!0,minZoom:2,maxZoom:20,disableDefaultUI:!0,streetViewControl:!0};mapStyle=[{featureType:"road.local",elementType:"labels",stylers:[{hue:"#00a1ff"},{gamma:.8}]},{featureType:"road.highway",stylers:[{lightness:12},{gamma:1.31},{hue:"#ffa200"}]},{featureType:"landscape.natural"}],map=new google.maps.Map(document.querySelector("#map"),n);var l=new google.maps.StyledMapType(mapStyle,{name:"Styled Map"});map.mapTypes.set("map_style",l),map.setMapTypeId("map_style"),window.mapBounds=new google.maps.LatLngBounds,i=a(),s(i)}var HTMLheaderName='<h1 id="name">%data%</h1>',HTMLheaderRole="<span>%data%</span><hr/>",HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">Mobile</span><span class="white-text">%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">Email</span><span class="white-text">%data%</span></li>',HTMLtwitter='<li class="flex-item"><span class="orange-text"><a href="#">Twitter</a></span></li>',HTMLgoogle='<li class="flex-item"><span class="orange-text"><a href="#">Google+</a></li>',HTMLgithub='<li class="flex-item"><span class="orange-text"><a href="#">Github</a></span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">Location</span><span class="white-text">%data%</span></li>',HTMLbioPic='<img src="%data%" class="biopic">',HTMLwelcomeMsg='<span class="welcome-message">%data%</span>',HTMLskillsStart='<h3 id="skillsH3">My strength :</h3><ul id="skills" class="flex-box"></ul>',HTMLskills='<li class="flex-item"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="#">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><br>%data%</p>",HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a href="#">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p><br>%data%</p>",HTMLprojectImage='<img src="%data%">',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<a href="#">%data%',HTMLschoolDegree=" -- %data%</a>",HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor="<em><br>Major: %data%</em>",HTMLonlineClasses="<h3>Online Classes</h3>",HTMLonlineTitle='<a href="#">%data%',HTMLonlineSchool=" - %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineURL='<br><a href="#">%data%</a>',internationalizeButton='<button class="button">Internationalize</button>',googleMap='<div id="map"></div>';$(document).ready(function(){$("button").click(function(){var a=inName(bio.name)||function(){};$("#name").html(a),d3.selectAll(".work-entry").style("font-family","")})}),clickLocations=[],$(document).click(function(a){var e=a.pageX,t=a.pageY;logClicks(e,t)});var map;window.addEventListener("load",initializeMap),window.addEventListener("resize",function(a){map.fitBounds(mapBounds)});