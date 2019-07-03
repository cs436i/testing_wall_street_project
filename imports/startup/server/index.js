import { Meteor } from 'meteor/meteor';

import Companies from '../../api/companies/companies';
import './register-api';
import companies from '../seeds/companies';

Meteor.startup(() => {
  companies.forEach(company => {
    Companies.insert({ symbol: company.symbol });
  });
});
