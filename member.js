function skillsMember() {
  return {
    restrict: "E",
    templateUrl: "app/components/skills/member.html",
    controller: "SkillsMemberCtrl",
    controllerAs: "skillsMember",
    bindToController: true,
    scope: {
      member: "=",
    },
  };
}
