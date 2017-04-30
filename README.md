# youtubewhyd
A tiny chrome extension that forces the youtube player to wide mode. 

This extension injects the following javascript on all youtube urls:

```js
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
```

It creates event listners for `spfdone` to handle the ajax page loading throughout a youtube session, as well as `DOMContentLoaded` if the initial page load is a video. When the events fire the classes of the player element (`#page`) update to always force the player to be in theater mode.