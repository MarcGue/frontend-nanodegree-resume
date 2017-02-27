/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'Marc Günnel',
    role: 'Software Engineer',
    contacts:  {
        mobile: '0151 123456',
        email: 'marc.guennel@googlemail.com',
        github: 'MarcGue',
        location: 'Johann-Krieger-Strasse 3, 90469 Nürnberg'
    },
    welcomeMessage: 'Welcome to my Resume',
    skills: [
        'HTML', 'CSS', 'JavaScript', 'JQuery'
    ],
    bioPic: 'images/fry.jpg',
    display: function() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
        $('#header').append(formattedBioPic);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill));
        });

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        $('#footerContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
        $('#footerContacts').append(formattedEmail);

        var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts').append(formattedGitHub);
        $('#footerContacts').append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);
        $('#footerContacts').append(formattedLocation);

        $('#mapDiv').append(googleMap);
    }
};

var work = {
    jobs: [{
        employer: 'adesso AG',
        title: 'Software Engineer',
        dates: '01.10.2016 - now',
        location: 'Am Tullnaupark 15, 90402 Nürnberg',
        description: 'Developing Software in different projects for different customers'
    }, {
        employer: 'Peak Solution GmbH',
        title: 'Software Engineer',
        dates: '01.02.2011 - 30.09.2016',
        location: 'Lina-Ammon-Straße 22, 90471 Nürnberg',
        description: 'Developing Software especially for measurement data systems'
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $('.work-entry:last').append(formattedWorkEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
            $('.work-entry:last').append(formattedWorkDates);

            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formattedDescription);
        });
    }
};

var projects = {
    projects: [{
        title: 'Portfolio',
        dates: '10.02.2017 - 20.02.2017',
        description: 'Build A Portfolio',
        images: [
            'images/portfolio-400_small.png'
        ]
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            $('.project-entry:last').append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
            $('.project-entry:last').append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedProjectDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
                    $('.project-entry:last').append(formattedProjectImage);
                });
            }
        });
    }
};

var education = {
    schools: [{
        name: 'Deutsche Telekom AG',
        degree: 'IT-Systemkaufmann',
        dates: '01.09.2007 - 31.07.2010',
        location: 'Hansastraße 7A, 90441 Nürnberg',
        major: 'IT-Systemkaufmann'
    }, {
        name: 'Peter-Vischer-Gymnasium',
        degree: 'Oberstufenreife',
        dates: '01.09.1992 - 01.09.2007',
        location: 'Bielingplatz 2, 90419 Nürnberg',
        major: 'Wirtschaft & Chemie'
    }],
    onlineCourses: [{
        title: 'Front-Ent Web Developer Nanodegree',
        school: 'Udacity',
        dates: '10.02.2017 - now',
        url: 'https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001/'
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
            $('.education-entry:last').append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
            $('.education-entry:last').append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.major);
            $('.education-entry:last').append(formattedSchoolMajor);
        });

        $('#education').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(onlineClass) {
            $('#education').append(HTMLschoolStart);

            var formattedClassTitle = HTMLonlineTitle.replace('%data%', onlineClass.title);
            var formattedClassSchool = HTMLonlineSchool.replace('%data%', onlineClass.school);
            $('.education-entry:last').append(formattedClassTitle + formattedClassSchool);

            var formattedClassDates = HTMLonlineDates.replace('%data%', onlineClass.dates);
            $('.education-entry:last').append(formattedClassDates);

            var formattedClassURL = HTMLonlineURL.replace('%data%', onlineClass.url);
            $('.education-entry:last').append(formattedClassURL);
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();