/* exported data */
var data = {
  view: 'monday',
  editing: null,
  sunday: { entries: [], nextEntryId: 1 },
  monday: { entries: [], nextEntryId: 1 },
  tuesday: { entries: [], nextEntryId: 1 },
  wednesday: { entries: [], nextEntryId: 1 },
  thursday: { entries: [], nextEntryId: 1 },
  friday: { entries: [], nextEntryId: 1 },
  saturday: { entries: [], nextEntryId: 1 }
};
var previousData = localStorage.getItem('data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
