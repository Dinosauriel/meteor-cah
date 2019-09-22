import { Meteor } from 'meteor/meteor';

import '/imports/collections/Games';
import '/imports/collections/Cardsets';

import '/imports/methods/createGame';
import '/imports/methods/deleteGame';
import '/imports/methods/reimportCardsets';

import '/imports/publications/Games';
import '/imports/publications/Cardsets';

Meteor.startup(() => {
  
});