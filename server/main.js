import { Meteor } from 'meteor/meteor';

import '/imports/collections/Time';
import '/imports/collections/Games';

import '/imports/methods/UpdateTime';
import '/imports/methods/createGame';
import '/imports/methods/deleteGame';

import '/imports/publications/Time';
import '/imports/publications/Games';

Meteor.startup(() => {
  // Update the current time
  Meteor.call('UpdateTime');
  // Add a new doc on each start.
  Time.insert({ time: new Date() });
  // Print the current time from the database
  console.log(`The time is now ${Time.findOne().time}`);
});