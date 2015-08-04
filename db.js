var faker = require('faker');
var fecha = require('fecha');

var caseNumberPrefixes = ['IPR', 'CBM'];
var caseStatuses = ['pending','Termination - Settlement'];

function getCaseNumber () {
  return faker.random.arrayElement(caseNumberPrefixes) + '2015-' + faker.random.number({min:1000, max:9999});
}

module.exports = function() {
  var data = { cases: [] };
  // Create 1000 cases
  for (var i = 0; i < 10000; i++) {
    data.cases.push({
      id: i,
      case_number:getCaseNumber(),
      filing_date: faker.date.past(),
      petitioner: faker.company.companyName() + ' ' + faker.company.companySuffix(),
      termination_date: faker.date.past(),
      patent_owner: faker.company.companyName() + ' ' + faker.company.companySuffix(),
      patent_number: faker.random.number({min:1000000, max:9999999}),
      status:faker.random.arrayElement(caseStatuses),
      application_number:faker.random.number({min:10, max:20}) + '/' + faker.random.number({min:100, max:900}) + ',' + faker.random.number({min:100, max:900}),
      techcenter:faker.company.companyName(),
      npe:'Operating Company'
    });
  }

  return data;
}