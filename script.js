$(document).ready(function(){

  var skillsFilter = [];
  $('.skill-li').click(function(){
    var skillLi = $(this),
        skill = skillLi.text();
    if (skillsFilter.includes(skill)) {
      skillLi.removeClass('highlight-skill');
      skillsFilter.splice(skillsFilter.indexOf(skill, 1));
    } else {
      skillLi.addClass('highlight-skill');
      skillsFilter.push(skill);
    }

    displayFilteredProjects(skillsFilter);

  });

  function displayFilteredProjects(skillsFilter) {
    $('.project-div').each(function(projectDiv){
      var projectSkills = $(this).attr('skills').split(', ');

      if (skillsFilter.length == 0 || skillsFilter.every(function(skill){
        return projectSkills.indexOf(skill) >= 0;
      })) {
        $(this).show();
      } else {
        $(this).hide();
      }
    }, this)
  }

});