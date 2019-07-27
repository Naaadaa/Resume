/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Creating objects 

var bio = {
    name : "NadaAlotaibi",
    role : "Web Devolper",
    contacts :
        {
            "mobile" : "+966556550884",
            "email" : "naaadaa_tb@yahoo.com",
            "github" : "NadaAlotaibi",
            "twitter" : "@naaadaa_",
            "location" : "Saudi-Arabia Riyadh"
        },
    welcomeMessage : "Welcome abroad",
    skills : ["Good knowledge in Object Oriented Design Pattern concepts.", "Strong communication skills"," Problem analysis problem solving"],
    biopic: "images/images.jpg"
};




var education = 
{
    schools : [
        {
            "name": "Imam Mohammed ibn Saud University ",
            "location": "Saudi-Arabia",
            "degree": "bachelor dgree",
            majors:["inforamtion studies"],
            "dates": "12/6/2016",
            "url": "https://imamu.edu.sa/Pages/default.aspx"
        }


              ],

    onlineCourses : [
        {
            "title" : " Udacity Front-End ",
            "school": "Misk academy",
            "dates": "6/6/2017",
            "url": "https://www.udacity.com/"
        }

                    ]
};


var work = {  jobs : [

        {
            "employer": "King Fahad Medical city ",
            "title": "IT Support specialist" ,
            "location": "Riyadh",
            "dates": "2/12/2018",
            "description": "working as IT Technican"
        },

        {
            "employer": "Almujaz training ",
            "title": "IT" ,
            "location": "Riyadh",
            "dates": "20/9/2015",
            "description": "Training"
        }
        ] };

var projects = {
    projects : [
        {
            "title" : "Web application" ,
            "dates" : "2014",
            "description": "a coffeeshop web application",
            "images" : [ "images/webapplication.png"]
        },
        {
            "title" : "portfolio project" ,
            "dates" : "2017",
            "description": "responsive website",
            "images" : [ "images/portfolio.jpg"]
        }
    ]
};



//display Functions

bio.display = function () {
    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Role = HTMLheaderRole.replace("%data%", bio.role);
     $("#header").prepend(Role);
     $("#header").prepend(Name);

    var Contacts = HTMLcontactGeneric.replace("%data%", bio.contacts);

        var Mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
         $("#topContacts").append(Mobile);
         $("#footerContacts").append(Mobile);
        var Email = HTMLemail.replace("%data%", bio.contacts.email);
         $("#topContacts").append(Email);
         $("#footerContacts").append(Email);
        var Github = HTMLgithub.replace("%data%", bio.contacts.github);
         $("#topContacts").append(Github); 
         $("#footerContacts").append(Github);
        var Twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
         $("#topContacts").append(Twitter);
         $("#footerContacts").append(Twitter);
        var Location = HTMLlocation.replace("%data%", bio.contacts.location);
         $("#topContacts").append(Location);
         $("#footerContacts").append(Location);
        var Message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
         $("#header").append(Message);
        var Biopic = HTMLbioPic.replace("%data%", bio.biopic);
         $("#header").append(Biopic);

      
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var Skills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(Skills);
    }



};




education.display = function () {

    for (var i = 0; i < education.schools.length; i++) 
      {

        $("#education").append(HTMLschoolStart);

        var SchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

        var SchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

        var SchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

        var SchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

        var SchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

        $(".education-entry:last").append(SchoolName +SchoolDegree);

        $(".education-entry:last").append(SchoolDates);

        $(".education-entry:last").append(SchoolMajor);

        $(".education-entry:last").append(SchoolLocation);

       }

    $("#education").append(HTMLonlineClasses);

    for (var j = 0; j < education.onlineCourses.length; j++) 
    {
        $("#education").append(HTMLschoolStart);

        var OnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
                $(".education-entry:last").append(OnlineTitle);
        var OnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
                $(".education-entry:last").append(OnlineSchool);
        var OnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
                $(".education-entry:last").append(OnlineDates);
        var OnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
               $(".education-entry:last").append(OnlineURL);

  

    }
};

work.display = function() {
    for(var i=0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var WorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);     
        var WorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
             $(".work-entry:last").append(WorkEmployer + WorkTitle);
        var WorkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
            $(".work-entry:last").append(WorkDates);
        var WorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
            $(".work-entry:last").append(WorkLocation);
        var WorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
            $(".work-entry:last").append(WorkDescription);

        
        
    }
};


projects.display = function () {
    for ( var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var ProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
           $(".project-entry:last").append(ProjectTitle);
        var ProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
           $(".project-entry:last").append(ProjectDates);
        var ProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
           $(".project-entry:last").append(ProjectDescription);

        for (img = 0; img < projects.projects[i].images.length; img++) {
            var ProjectImages = HTMLprojectImage.replace("%data%",projects.projects[i].images[img]);
            $('.project-entry:last').append(ProjectImages);
        }
    }
};

$("#mapDiv").append(googleMap);

//displaying information 


bio.display();
education.display();
work.display();
projects.display();






 
 