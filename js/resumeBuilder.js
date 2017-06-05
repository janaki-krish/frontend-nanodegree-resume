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
 	"picture": "images/fry.jpg",
 	"welcomemessage": "Hi, I am on my preparation journey to get back to my career after a break, welcome to my page!",
 	"skills": ["Visual C++","Java", "Architecture & Design","HTML & CSS", "Project Management", "Product Development"],

 	display: function() {
 		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedImage = HTMLbioPic.replace("%data%", bio.picture);
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

			for (var i in bio.skills)
			{
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
		$("#topContacts").append(formattedContactInfo);
		$("#footerContacts").append(formattedContactInfo);

 	}
 };

 var education = {
	"schools" : [
		{
			"school": "Govt Girls Hr Sec School",
			"location" : "Chennai",
			"degree" : "High School",
			"majors" : ["High School"],
			"dates" : "1990-1993",
			"url" : "govt girls high school"
		},
		{
			"school": "MOP Vaishnava College for Women",
			"location": "Chennai",
			"degree": "B Sc Maths",
			"majors" : ["Math"],
			"dates" : "1993-1996",
			"url" : "MOP Vaishnava"
		},
		{
			"school": "REC Warangal",
			"location": "Warangal",
			"degree": "MCA",
			"majors" : ["CS"],
			"dates" : "1996-1999",
			"url" : "NIT Warangal"
		}
	],

	"onlineclass" :
	[
		{
			title: "The Complete Web Developer Course",
			URL: "https://www.udemy.com/the-complete-web-developer-course-2/learn/v4/overview"
		},
		{
			title: "GitHub Guides",
			URL: "https://guides.github.com/"
		},
		{
			title: "Grunt",
			URL: "https://gruntjs.com/"
		},
		{
			title: "Udacity FrontEnd NanoDegree",
			URL: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],

	display : function() {
		if (education.schools.length > 0)
		{
			for (var edu in education.schools)
			{
				$("#education").append(HTMLschoolStart);
				var school = HTMLschoolName.replace("%data%", education.schools[edu].school) +
									HTMLschoolLocation.replace("%data%", education.schools[edu].location);
				var degree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);

				$(".education-entry:last").append(school);
				$(".education-entry:last").append(degree);
			}
		}

		if (education.onlineclass.length > 0)
		{
			$("#education").append(HTMLonlineClasses);
			for (var oclass in education.onlineclass)
			{
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineclass[oclass].title);
				var formattedURL = HTMLonlineURL.replace("%data%", education.onlineclass[oclass].URL);

				$(".education-entry:last").append(formattedTitle);
				$(".education-entry:last").append(formattedURL);
			}
		}
	}
};


 var workobject = {
 	"jobs" : [
 		{
 			"employer" : "Honeywell",
 			"title" : "Technology Specialist",
 			"location" : "Bangalore",
 			"datesWorked" : "2013-2014",
 			"description" : "I was responsible for driving innovation in the group, working with the teams to " +
 								"drive the technology roadmaps, pre-product visualizations along with product development support"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Engineering Manager",
 			"location" : "Bangalore",
 			"datesWorked" : "2011-2013",
 			"description" : "As part of this role, I had the responsibility of the people, project/product and various " +
 								"process implementations. End to end product development right from end user needs identification till" +
 								" product release and support involvement as a team. Also responsible for new processes identification and implementation"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Project Lead",
 			"location" : "Bangalore",
 			"datesWorked" : "2007-2011 ",
 			"description" : "Had the responsibility of handling multiple projects simultaneously, was the customer/partner" +
 								"facing role responsible for the communication and contact person for all the project related" +
 								"issues. Responsible for project management - estimation, scheduling, tracking and issues resolution" +
 								"Handling of certain modules, design reviews and best practices implementation"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Team Lead",
 			"location" : "Bangalore",
 			"datesWorked" : "2004-2007 ",
 			"description" : "Had the technical responsibility of the project along with the individual modules development" +
 							"handled the final deployment, beta testing, client training and handover to the end users"
 		},

 		{
 			"employer" : "Honeywell",
 			"title" : "Software Engineer / Individual Contributor",
 			"location" : "Bangalore",
 			"datesWorked" : "1999-2004 ",
 			"description" : "Requirements understanding, design, development of individual modules. Interactions with the" +
 							"product testing team and resolving issues. Release management and end user documentation"
 		}

 	],

 	display : function()
 	{
 		if (workobject.jobs.length > 0)
		{
			$("#workExperience").append(HTMLworkStart);

			for (var job in workobject.jobs)
			{
				var formattedEmployer = HTMLworkEmployer.replace("%data%", workobject.jobs[job].employer) +
												HTMLworkTitle.replace("%data%", workobject.jobs[job].title);

				var formattedDates = HTMLworkDates.replace("%data%", workobject.jobs[job].datesWorked);
				var formattedWorkDesc = HTMLworkDescription.replace("%data%", workobject.jobs[job].description)	;

				$(".work-entry:last").append(formattedEmployer);
				$(".work-entry:last").append(formattedDates);
				$(".work-entry:last").append(formattedWorkDesc);
			}
		}

 	}
 };




var projects = {
	"projects": [
		{
			"title": "Brighton Times",
			"datesWorked": "March 2017",
			"description": "Create a mockup website using flex layout as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/frogger.jpg"],
			"url": ""
		},
		{
			"title": "Sample Portfolio",
			"datesWorked": "April 2017",
			"description": "Sample portfolio using BootStrap as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/frogger.jpg"],
			"url": ""
		},
		{
			"title": "Responsive Website using Grunt",
			"datesWorked": "March 2017",
			"description": "Created a responsive website, Grunt taskrunner for responsive images creation" ,
			"images": ["images/frogger.jpg"],
			"url": ""
		}
	],
	display : function() {
		if (projects.projects.length > 0)
		{
			$("#projects").append(HTMLprojectStart);
			for (var project in projects.projects)
			{
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
				var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjDates);
				$(".project-entry:last").append(formattedProjDesc);
			}
		}
	}
};


bio.display();
workobject.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
