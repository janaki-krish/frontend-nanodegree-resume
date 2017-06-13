/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name": "Janaki",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile":	"704-806-2514",
 		"email": "janaki.marine@gmail.com",
 		"github" : "janaki-krish",
 		"twitter": "@janaki_krish",
 		"location": "Charlotte, USA"

 	},
 	"biopic": "images/fry.jpg",
 	"welcomemessage": "Hi, I am on my preparation journey to get back to my career after a break, welcome to my page!",
 	"skills": ["Visual C++","Java", "Architecture & Design","HTML & CSS", "Project Management", "Product Development"],

 	display: function() {
 		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

		var formattedContactInfo = [];
		formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
		formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
		formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));

		 $("#header").prepend(formattedRole);
		 $("#header").prepend(formattedName);
		 $("#header").append(formattedImage);
		 $("#header").append(formattedWelcomeMsg);

		 if (bio.skills.length > 0)
		 {
			$("#header").append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$("#skills").append(HTMLskills.replace("%data%", skill));
			}) ;
		}
		$("#topContacts").append(formattedContactInfo);
		$("#footerContacts").append(formattedContactInfo);
 	}
 };

 var education = {
	"schools" : [
		{
			"name": "Govt Girls Hr Sec School",
			"location" : "Chennai",
			"degree" : "High School",
			"majors" : ["High School"],
			"dates" : "1990-1993",
			"url" : "govt girls high school"
		},
		{
			"name": "MOP Vaishnava College for Women",
			"location": "Chennai",
			"degree": "B Sc Maths",
			"majors" : ["Math"],
			"dates" : "1993-1996",
			"url" : "MOP Vaishnava"
		},
		{
			"name": "REC Warangal",
			"location": "Warangal",
			"degree": "MCA",
			"majors" : ["CS"],
			"dates" : "1996-1999",
			"url" : "NIT Warangal"
		}
	],

	"onlineCourses" :
	[
		{
			title: "The Complete Web Developer Course",
			school: "Udemy",
			dates: "Jan 2017 - Feb 2017",
			url: "https://www.udemy.com/the-complete-web-developer-course-2/learn/v4/overview"
		},
		{
			title: "GitHub Guides",
			school: "Udacity",
			dates: "May 2017 - May 2017",
			url: "https://guides.github.com/"
		},
		{
			title: "Grunt",
			school: "Grunt website",
			dates: "Apr 2017 - Apr 2017",
			url: "https://gruntjs.com/"
		},
		{
			title: "Udacity FrontEnd NanoDegree",
			school: "Udacity",
			dates: "Ongoing",
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],

	display : function() {
		if (education.schools.length > 0)
		{
			education.schools.forEach(function(schoolObj){
				$("#education").append(HTMLschoolStart);
				var school = HTMLschoolName.replace("%data%", schoolObj.name) +
									HTMLschoolLocation.replace("%data%", schoolObj.location);
				var degree = HTMLschoolDegree.replace("%data%", schoolObj.degree);
				var major = HTMLschoolMajor.replace("%data%", schoolObj.majors);

				$(".education-entry:last").append(school);
				$(".education-entry:last").append(degree + " (" + major + " )");
				//$(".education-entry:last").append(major);
			});
		}

		if (education.onlineCourses.length > 0)
		{
			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(classObj){
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", classObj.title);
				var formattedURL = HTMLonlineURL.replace("%data%", classObj.url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", classObj.school);
				var formattedDates = HTMLonlineDates.replace("%data%", classObj.dates);

				$(".education-entry:last").append(formattedTitle + " - " + formattedSchool);
				$(".education-entry:last").append(formattedDates);
				$(".education-entry:last").append(formattedURL);
				//$(".education-entry:last").append(formattedSchool);

			});
		}
	}
};


 var work = {
 	"jobs" : [
 		{
 			"employer" : "Honeywell",
 			"title" : "Technology Specialist",
 			"location" : "Bangalore",
 			"dates" : "2013-2014",
 			"description" : "I was responsible for driving innovation in the group, working with the teams to " +
 								"drive the technology roadmaps, pre-product visualizations along with product development support"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Engineering Manager",
 			"location" : "Bangalore",
 			"dates" : "2011-2013",
 			"description" : "As part of this role, I had the responsibility of the people, project/product and various " +
 								"process implementations. End to end product development right from end user needs identification till" +
 								" product release and support involvement as a team. Also responsible for new processes identification and implementation"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Project Lead",
 			"location" : "Bangalore",
 			"dates" : "2007-2011 ",
 			"description" : "Had the responsibility of handling multiple projects simultaneously, was the customer/partner" +
 								"facing role responsible for the communication and contact person for all the project related" +
 								"issues. Responsible for project management - estimation, scheduling, tracking and issues resolution" +
 								"Handling of certain modules, design reviews and best practices implementation"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Team Lead",
 			"location" : "Bangalore",
 			"dates" : "2004-2007 ",
 			"description" : "Had the technical responsibility of the project along with the individual modules development" +
 							"handled the final deployment, beta testing, client training and handover to the end users"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Software Engineer / Individual Contributor",
 			"location" : "Bangalore",
 			"dates" : "1999-2004 ",
 			"description" : "Requirements understanding, design, development of individual modules. Interactions with the" +
 							"product testing team and resolving issues. Release management and end user documentation"
 		}

 	],

 	display : function()
 	{
 		if (work.jobs.length > 0)
		{
			$("#workExperience").append(HTMLworkStart);

			work.jobs.forEach(function(job){
				var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer) +
												HTMLworkTitle.replace("%data%", job.title);

				var formattedDates = HTMLworkDates.replace("%data%", job.dates);
				var formattedWorkDesc = HTMLworkDescription.replace("%data%", job.description)	;
				var formattedLocation = HTMLworkLocation.replace("%data%", job.location)	;

				$(".work-entry:last").append(formattedEmployer);
				$(".work-entry:last").append(formattedDates);
				$(".work-entry:last").append(formattedWorkDesc);
			});
		}

 	}
 };




var projects = {
	"projects": [
		{
			"title": "Brighton Times",
			"dates": "March 2017",
			"description": "Create a mockup website using flex layout as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/brightontimes.png"],
			"url": ""
		},
		{
			"title": "Sample Portfolio",
			"dates": "April 2017",
			"description": "Sample portfolio using BootStrap as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.png"],
			"url": ""
		},
		{
			"title": "Responsive Website using Grunt",
			"dates": "March 2017",
			"description": "Created a responsive website, Grunt taskrunner for responsive images creation" ,
			"images": ["images/grunt.png"],
			"url": ""
		}
	],
	display : function() {
		if (projects.projects.length > 0)
		{
			$("#projects").append(HTMLprojectStart);
			projects.projects.forEach(function(project){
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
				var formattedProjDates = HTMLprojectDates.replace("%data%", project.dates);
				var formattedProjDesc = HTMLprojectDescription.replace("%data%", project.description);
				$(".project-entry").append(formattedProjectTitle);
				$(".project-entry").append(formattedProjDates);
				$(".project-entry").append(formattedProjDesc);
				project.images.forEach(function(image){
						var formattedImage = HTMLprojectImage.replace("%data%", image);
						$(".project-entry").append(formattedImage);
				});
			});
		}
	}
};


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
