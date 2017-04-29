document.addEventListener("spfdone", whyd);
document.addEventListener("DOMContentLoaded", whyd);
function whyd () {
  var classes = document.getElementById('page').classList;
  if (classes.contains('watch-non-stage-mode')) {
    classes.add('watch-wide', 'watch-stage-mode');
    classes.remove('watch-non-stage-mode');
  } else if (!classes.contains('watch-wide')) {
    classes.add('watch-wide', 'watch-stage-mode');
  } 
}
