// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(coll, predicate) {
var acc = []; 
 	 if(!Array.isArray(coll)){ 
 	 	 acc = {}; 
 	 } 
 	 each(coll, function(value, key) { 
 	 	 if (predicate(value, key)) { 
 	 	 	 if(Array.isArray(coll)){ 
 	 	 	 	 acc.push(value); 
 	 	 } else { 
 	 	 	 acc[key] = value; 
 	 	 } 
 	 	 } 
 	 }); 
 	 return acc; 
 	}

var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
  var members = function (familyTree) {
  	for (var key in familyTree ) {
  		  if ( this.children === undefined ) {
  		  	  return  members (familyTree) 
  		  } 
  	}
  }

  return  filter(members,function(familyTree,member){ 
 	 	 return family ; 
 	 }) 


};


 

