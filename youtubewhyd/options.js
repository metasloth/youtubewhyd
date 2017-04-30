chrome.storage.sync.get('enabled', function (items) {
  if (items.enabled || items.enabled == null) {
    document.getElementById('enableSwitch').checked = true
  } else {
    document.getElementById('enableSwitch').checked = false
  }
})
document.getElementById('enableSwitch').addEventListener('click', function () {
  chrome.storage.sync.set({enabled: document.getElementById('enableSwitch').checked})
})
