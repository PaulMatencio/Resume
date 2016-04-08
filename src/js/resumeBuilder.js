
// definition of bio variable which is used to build the bio section's HTML elements

var bio = {
    "name": "Paul Matencio",
    "role": "IT architect at the EPO(NL)",
    "contacts": {
        "email": "paulo.matencio@gmail.com",
        //"mobile": "+31xxxxxxxxx",
        "twitter": "https://twitter.com/PaulMatencio",
        "google": "https://plus.google.com/104462469388390011439",
        "github": "https://github.com/PaulMatencio",
        "location": "The Hague, The Netherlands"
    },
    "skills": ["Focus on result", "Taking responsability", "Creativity", "Sens of humor"],
    "welcomeMessage": "Welcome: Bonjour",
    "biopic": "images/fry.jpg"
};

// definition of the education variable which is used to build the edudation 's section  HTML elemnts
// education is a table "schools []. The contable schools contains school-entry {}.
var education = {
    "schools": [{
        "name": "Street University",
        "location": "Saigon, Vietnam",
        "url": "https://www.google.com/maps/d/viewer?mid=zM0A9j5HAmUs.k5zX5AIxoZII&hl=en",
        "degree": "Preparing tea",
        "dates": "1900-1960",
        "minor": [
            "Dutch",
            "English"
        ],
        "major": [
            "The Art of preparing tea"
        ]
    }, {
        "name": "Life University",
        "location": "Savannakhet, Laos",
        "url": "https://www.youtube.com/watch?v=E5AKmTsBCgQ",
        "degree": "Cooking glutinous rice",
        "dates": "1960-1970",
        "minor": [
            "French",
            "English",
            "Dutch"
        ],
        "major": [
            "The Art of cooking rice"
        ]
    }, {
        "name": "Home University",
        "location": "The Hague, The Netherlands",
        "url": "http://denhaag.com/en",
        "degree": "Hanging pictures",
        "dates": "1970-1978",
        "minor": [
            "no degree"
        ],
        "major": [
            "The Art of hanging pictures"
        ]
    }, ],
    "online": [{
        "class": {
            "title": "Front-End Web Developer",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        "dates": "Sep-2015",
        "school": {
            "name": "Udacity",
            "url": "https://www.udacity.com"
        },
        "minor": [
            "Nanodegree"
        ]
    }]
};

// Definition of the work varaible which is used to build the  work experience section ( HTML elements)
// Work variable is a "jobs" table which contains  job entries [ {job1},{job2},{job3} ]
// The location : {} is used to display the location on the google map.
var work = {
    "jobs": [{
        "employer": "Lam dong tea joint stock company",
        "url": "http://www.hktdc.com/manufacturers-suppliers/LAM-DONG-TEA-JOINT-STOCK-COMPANY/en/1X06I38J",
        "title": "Sales support",
        "dates": "1900-1920",
        "location": "Lâm Đồng, Vietnam",
        "description": "Handle accounts, Income Tax and agricultural income tax. Cost control. File Tea Board returns.banking including submission of proposal and monthly reports.Preparation of MIS reports for Hanoi Office. Assisting in Sales and its documentation and monitoring realisations in case of private sales, purchases, correspondence. "
    }, {
        "employer": "Our-company Homechampa",
        "url": "http://www.homchampa.com/our-company",
        "title": "Rice planter assistant",
        "dates": "1940-1960",
        "location": "Pakse, Laos",
        "description": "Clearing Land as Part of the Slash-and-Burn Process; Burning; Preparing the Land for Sowing; Sowing; Weeding; Scaring the Birds Away; Harvest; Threshing, Winnowing and Storage. "
    }, {
        "employer": "MyBoss galery",
        "url": "http://www.forumart.nl/",
        "title": "Galery Assistant",
        "dates": "1980-current",
        "location": "The Hague, Netherlands",
        "description": "Put frames and hang the paintings on wall without nails. Adhesive picture hanging strips require a clean surface to stick properly, so wipe down your picture and the wall where you’re going to hang it with a clean cloth and isopropyl alcohol. "
    }]
};


// defibition of the "project" variable
// project variable  is a "project" table containing  project entries  [ {project1},{project2},{project 3} ]
// The location : {} is used to display the location on the google map.
var project = {
    "projects": [

        {
            "title": "Preparing tea",
            "dates": "1900-1920",
            "description": "Preparing tea properly is easy  but you must <strong> follow a few basic guidelines</strong>. The best tea in the world can taste horrible if prepared incorrectly, and conversely a very inexpensive tea can be very satisfying if made well. There are seven factors that effect the quality of brewed tea: The quality of the tea; The quality of the water; Correct measurement; Correct steeping temperature; Correct steeping time; Allowing the tea leaf to expand fully; Separating the leaf from the liquid at the end of the steeping process",
            "url": "http://www.asian-recipe.com/china/preparing-chinese-tea.html",
            "location": "Hanoï, Vietnam",
            "images": ["images/Tea-preparation-1.jpg", "images/Tea-preparation-2.jpg", "images/Tea-preparation-3.jpg"]
        }, {
            "title": "Harvesting rice",
            "dates": "1940-1960",
            "description": "Harvesting rice consists of the basic operations cutting, threshing, and cleaning. Cutting is the first operation in harvesting. Depending on the crop's condition, and availability of labor or machinery, cutting can be done either manually or mechanically. However, due to severe labor shortage and the resulting increase in harvesting cost, the use of combines is increasing rapidely and economically attractive for Vietnam and Laos.",
            "url": "http://www.infoplease.com/encyclopedia/science/rice-cultivation-harvesting.html",
            "location": "Savannakhet, Laos",
            "images": ["images/Rice-cutting-0.jpg", "images/Rice-cutting-2.jpg", "images/Rice-cutting-3.jpg", "images/Rice-cutting-4.jpg"]
        }, {
            "title": "Hanging pictures",
            "dates": "1980-current",
            "url": "http://www.holland.com/us/tourism/cities/the-hague-1/museums-in-the-hague-1.htm",
            "description": "The operation consist to hang pcitures without nail: Put up and take down pictures and other objects as often as you want, without the fear of marking or damaging walls. Hang picture frames, canvasses, artwork or decorative items - straight and level. Each pair of small strips holds up to 450 g. Each pair of medium strips holds up to 1 Kg. Dimensions of strips: small = 54 x 16 x 2 mm / medium = 70 x 19 x 2 mm",
            "location": "La Haye, The Netherlands",
            "images": ["images/IMG_20151004_114935-320.jpg", "images/IMG_20151004_114801-320.jpg", "images/IMG_20151004_114816-320.jpg", "images/IMG_20151004_115045-320.jpg", "images/IMG_20151004_115123-320.jpg"]
        }
    ]
};

// don't need if you don't wnat to use map
var mapmaker = {
    "La Haye": {
        "icon": "images/homeMarker-t.png",
        "image": "images/TheHague.jpg"
    },
    "The Hague": {
        "icon": "images/homeMarker-t.png",
        "image": "images/TheHague.jpg"
    },
    "Savannakhet": {
        "icon": "images/brownMarker-t.png",
        "image": "images/Savannakhet.jpg"
    },
    "Hanoï": {
        "icon": "images/purpleMarker-t.png",
        "image": "images/Hanoi.jpg"
    },
    "Lâm Đồng": {
        "icon": "images/purpleMarker-t.png",
        "image": "images/Lamdong.jpg"
    },
    "Hô Chi Minh-Ville": {
        "icon": "images/purpleMarker-t.png",
        "image": "images/saigon.jpg"
    },
    "Hô Chi Minh-City": {
        "icon": "images/purpleMarker-t.png",
        "image": "images/saigon.jpg"
    },
    "Paksé": {
        "icon": "images/brownMarker-t.png",
        "image": "images/Parkse.jpg"
    },
    "Pakse": {
        "icon": "images/brownMarker-t.png",
        "image": "images/Parkse.jpg"
    }
};

// BUILD THE NAVIGATION LIST
var navigation = {
    "title": ["Work Experience", "Projects", "Education", "Map", "All"], // title=  for each menu
     "box": [], // fill
    "id": ["workId", "projId", "educId", "mapId", "allId"] // id= for ecah menu
};

var All = true; // used to swap class if all the section  are displayed

var HTMLnavlist = '<li class="nav__item" id="%navid%"><span>%data%</span></li>';

function displayNavigation() {
    for (var nav in navigation.title) {
        /* replace the %data% by title[nav] and %id% by nav index */
        var nav_list = HTMLnavlist.replace("%data%", navigation.title[nav]).replace("%navid%", navigation.id[nav]);
        $('.nav__list').append(nav_list);
        // $('.nav__list').append(nav_list.replace("#", "#" + navigation.anchor[nav]));
    }
    // location the li DOM  ( navigation.id )
    var $workId = $('#workId'),
        $projId = $('#projId'),
        $educId = $('#educId'),
        $mapId = $('#mapId'),
        $allId = $('#allId');

    function clickOn(cid) {
        navigation.id.forEach(function(id,index){
            var box = navigation.box[index]
            if (cid.attr("id") === id) {
                $(box).show();
            } else $(box).hide();
        });
    }

    // Listen on Click event of the menu list entries

    // work experience  is clicked
    $workId.click(function() {
        clickOn($workId);
        if ($(window).width() < 690) {
            toggleMenu(-1);
        }
        All = false; // used to swap class when resizing
        resize();
    });

    // project is clicked
    $projId.click(function() {
        clickOn($projId);
        if ($(window).width() < 690) {
            toggleMenu(-1);
        }
        All = false; // used to swap class when resizing
        resize();
    });
    // education   is clicked
    $educId.click(function() {
        clickOn($educId);
        if ($(window).width() < 690) {
            toggleMenu(-1);
        }
        All = false; // used to swap class when resizing
        resize();
    });

    // map is clicked
    $mapId.click(function() {
        clickOn($mapId)
        if ($(window).width() < 690) {
            toggleMenu(-1);
        }
        All = false; // used to swap class when resizing
        resize();

    });
    // all is clicked
    $allId.click(function() {
        navigation.box.forEach(function(id){
            id.show();
        });
        if ($(window).width() < 690) {
            toggleMenu(-1);
        }
        All = true; // used to swap class when resizing
        resize();
    });
}

// END BUILDING THE NAVIGATION LIST

/* display Google Map */
/* append the GoogleMap */
function displayMap() {
    $("#mapDiv").append(googleMap);
}

/* function inName() is used in helper.js */
function inName(myname) {
    name1 = myname.trim().split(" ");
    name1[1] = name1[1].toUpperCase();
    name1[0] = name1[0].slice(0, 1).toUpperCase() + name1[0].slice(1).toLowerCase();
    return name1[1] + " " + name1[0];
}

/* Build the Bio elements */

bio.myWelcome = function() {
    $("#skillsH3").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
};

bio.mySkills = function() {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
};

/* Display the bio elements */
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    if (bio.contacts.mobile) {
      var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts").append(mobile);
      $("#footerContacts").append(mobile);
    }

    if (bio.contacts.email) {
      var email = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").append(email);
      $("#footerContacts").append(email);
    }
    if (bio.contacts.location) {
    //  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    }

    if (bio.contacts.twitter) {
      // var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var twitter = HTMLtwitter.replace("#", bio.contacts.twitter);
      $("#topContacts").append(twitter);
      $("#footerContacts").append(twitter);
    };

    if (bio.contacts.google) {
      // var google = HTMLgoogle.replace("%data%", bio.contacts.google);
      var google = HTMLgoogle.replace("#",bio.contacts.google);
      $("#topContacts").append(google);
      $("#footerContacts").append(google);
    };

    if (bio.contacts.github) {
      //var github = HTMLgithub.replace("%data%", bio.contacts.github);
      var github = HTMLgithub.replace("#", bio.contacts.github);
      $("#topContacts").append(github);
      $("#footerContacts").append(github);
    };

    bio.mySkills();
    bio.myWelcome();
};


function displayInternationalizeButton() {
    $("#main").prepend(internationalizeButton);
}

/* Build the  Work section of the  Resume */
/* putOnResume function for the class work */
work.putOnResume = function(index) {
    $("#workExperience").append(HTMLworkStart);
    var employeur = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
    employeur = employeur.replace("#", work.jobs[index].url);
    title = HTMLworkTitle.replace("%data%", work.jobs[index].title);
    // locate the last entry of the element with the class "work-entry"   and append the the employer and title element
    $(".work-entry:last").append(employeur + title);
    // locate the last entry of the element with the class "work-entry"   and append the the employer and date  element
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[index].dates));
    // locate the last entry of the element with the class "work-entry"   and append the the employer and date  element
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[index].location));
    // locate the last entry of the element with the class "work-entry"   and append the the employer and  job description   element
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[index].description));
};

/* display function for the class work */
work.display = function display() {
    for (var job in work.jobs.reverse()) {
        work.putOnResume(job);
    }
};


work.locationizer = function() {
    /*function locationizer(work) { */
    var locationArray = [];
    for (var job in work.jobs.reverse()) {
        var location = work.jobs[job].location;
        locationArray.push(location);
    }
    return locationArray;
};


var HTMLRow = '<div class="row">'; // add a flexbox row
var HTMLCol = '<div class="%data%">';
var HTMLEndDiv = "</div>";


/* Create the Education HTML elements for the education section section of the Resume */
/* Every project has one or more  image url: look at the project class */

project.getImage = function(name) {
    for (var proj in project.projects) {
        if (project.projects[proj].location.search(name) >= 0) {
            return project.projects[proj].images[0];
        }
    }
    return null;
};

project.putOnResume = function(index) {

    $("#projects").append(HTMLprojectStart); //  add the projrct Start element defined in helper.js
    var title = HTMLprojectTitle.replace("%data%", project.projects[index].title);
    // locate the last entry of the element with the class "project-entry"   and append the the project title element
    $(".project-entry:last").append(title.replace("#", project.projects[index].url));
    // locate the last entry of the element with the class "project-entry"   and append the the project date element
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[index].dates));
    // locate the last entry of the element with the class "project-entry"   and append the the project description element
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[index].description));

    if (project.projects[index].images.length > 0) {
        images = HTMLRow;
        for (var img in project.projects[index].images) {
            images = images + HTMLCol.replace("%data%", "col-2") +
                HTMLprojectImage.replace("%data%", project.projects[index].images[img]) + HTMLEndDiv;
        }
        images = images + HTMLEndDiv + HTMLEndDiv;
        $(".project-entry:last").append(images);
    }
};

project.display = function() {
    for (var proj in project.projects.reverse()) {
        project.putOnResume(proj);
    }
};
/* Create the Education HTML elements for the education section section of the Resume */

education.putOnresume = function(index) {
    $("#education").append(HTMLschoolStart);
    var school = HTMLschoolName.replace("%data%", education.schools[index].name);
    $(".education-entry:last").append(school.replace("#", education.schools[index].url));
    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[index].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[index].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[index].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[index].major));
};

education.putOnline = function(index) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var title = HTMLonlineTitle.replace("%data%", education.online[index].class.title) + HTMLonlineSchool.replace("%data%", education.online[index].school.name);
    $(".education-entry:last").append(title.replace("#", education.online[index].class.url));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.online[index].dates + " - " + education.online[index].minor[0]));
    var url = HTMLonlineURL.replace("%data%", education.online[index].school.url);
    $(".education-entry:last").append(url.replace("#", education.online[index].school.url));
};

// function to display the education HTML elements
education.display = function() {
    for (var educ in education.schools.reverse()) {
        education.putOnresume(educ);
    }
    for (var online in education.online.reverse()) {
        education.putOnline(online);
    }
};

/* this function is used to swap class  for  the follwing <div id=>
     workExperience
     projects
     education
     jQuery removeClass and addClass are used
*/
function swapClass(oldc, newc) {

    $('#workExperience').removeClass(oldc);
    $('#workExperience').addClass(newc);
    $('#projects').removeClass(oldc);
    $('#projects').addClass(newc);
    $('#education').removeClass(oldc);
    $('#education').addClass(newc);
}

/*  START  TO DISPLAY the RESUME */

bio.display(); // display the bio section
work.display(); // display the work section
project.display(); // display the project section
education.display(); // display the education section */
displayMap(); // Display teh map section
displayNavigation(); // display the navigation section


var $workExperienceId, $projectsId, $educationId, $mapDivId, $summaryId,
    $skill_ul, $header;

$(document).ready(function() {

    $header = $('#header');
    $workExperienceId = $('#workExperience');
    navigation.box.push($workExperienceId);
    $projectsId = $('#projects');
    navigation.box.push($projectsId);
    $educationId = $('#education');
    navigation.box.push($educationId);
    $mapDivId = $('#mapDiv');
    navigation.box.push($mapDivId);
    $skill_ul = $('#skills');

    //  Change Header backgroud color when the document is READY
    $header.css("background-color", "rgb(116,130,101)");
    if ($(window).width() >= 690) {
        $skill_ul.addClass("flex-box-col");
    }
    if ($(window).width() >= 1200) {
        if (All) swapClass("col-12", "colg-4");
        else swapClass("colg-4", "col-12");
    } else {
        swapClass("colg-4", "col-12");
    }
});


// change display orientation  of the nav_list
// when window size > 600 px  ( row -> column) and remove the open class just in case

$(window).resize(function() {
    resize();
});

function resize() {

    var nav_li = $(".nav__list").children('li');

    if ($(window).width() >= 690) {
        $skill_ul.addClass("flex-box-col");
        $(".nav").css("zIndex", 0);
        $(".nav").removeClass("open");
        $(".nav__item").removeClass("open");
    } else {
        $skill_ul.removeClass("flex-box-col");
    }
    if ($(window).width() >= 1200) {
        if (All) swapClass("col-12", "colg-4");
        else swapClass("colg-4", "col-12");
    } else {
        swapClass("colg-4", "col-12");
    }
}

function toggleMenu(zindex) {
    var $nav = $(".nav");
    $nav.css("zIndex", zindex);
    $nav.toggleClass("open");
    $(".nav__list").toggleClass("open");
    $(".nav__item").toggleClass("open");
}

$("#menu").click(function() {
    toggleMenu(101);
});
