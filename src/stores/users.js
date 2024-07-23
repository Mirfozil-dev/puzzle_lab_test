import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    {
      "id": 1,
      "name": "Timothy Hayes",
      "email": "timothy.hayes@example.com",
      "address": {
        "street": "6207 Heather Ridge Rd",
        "city": "Mckinney",
        "state": "LA",
        "zipCode": "42863-4754"
      }
    },
    {
      "id": 2,
      "name": "Timothy Chapman",
      "email": "michelle.chapman@example.com",
      "address": {
        "street": "9473 W Sherman Dr",
        "city": "Los Angeles",
        "state": "WY",
        "zipCode": "62754-5686"
      }
    },
    {
      "id": 3,
      "name": "Timothy George",
      "email": "josefina.george@example.com",
      "address": {
        "street": "7549 W Dallas St",
        "city": "Portland",
        "state": "IA",
        "zipCode": "52543-1123"
      }
    },
    {
      "id": 4,
      "name": "TIm Reynolds",
      "email": "rafael.reynolds@example.com",
      "address": {
        "street": "4792 Cherry St",
        "city": "Bakersfield",
        "state": "NY",
        "zipCode": "95184-7485"
      }
    },
    {
      "id": 5,
      "name": "tim Garcia",
      "email": "alyssa.garcia@example.com",
      "address": {
        "street": "9765 Washington Ave",
        "city": "Pittsburgh",
        "state": "HI",
        "zipCode": "70564-8836"
      }
    },
    {
      "id": 6,
      "name": "Timothy Harris",
      "email": "aaron.harris@example.com",
      "address": {
        "street": "2611 Dogwood Ave",
        "city": "New York",
        "state": "OR",
        "zipCode": "95486-3948"
      }
    },
    {
      "id": 7,
      "name": "Timothy Hernandez",
      "email": "carla.hernandez@example.com",
      "address": {
        "street": "1589 Sunset Blvd",
        "city": "San Diego",
        "state": "AZ",
        "zipCode": "12675-6238"
      }
    },
    {
      "id": 8,
      "name": "Timo Robertson",
      "email": "victor.robertson@example.com",
      "address": {
        "street": "2109 Lakeview Dr",
        "city": "Chicago",
        "state": "MD",
        "zipCode": "43524-8657"
      }
    },
    {
      "id": 9,
      "name": "Timot Morris",
      "email": "sara.morris@example.com",
      "address": {
        "street": "4101 Oakwood Dr",
        "city": "Houston",
        "state": "NE",
        "zipCode": "64822-7864"
      }
    },
    {
      "id": 10,
      "name": "Timothy Howard",
      "email": "evan.howard@example.com",
      "address": {
        "street": "7501 Forest Ln",
        "city": "Dallas",
        "state": "SD",
        "zipCode": "98186-3475"
      }
    },
    {
      "id": 11,
      "name": "Timothy Walker",
      "email": "catherine.walker@example.com",
      "address": {
        "street": "5816 Stevens Creek Blvd",
        "city": "San Jose",
        "state": "ND",
        "zipCode": "86475-7758"
      }
    },
    {
      "id": 12,
      "name": "Timoth Martinez",
      "email": "patrick.martinez@example.com",
      "address": {
        "street": "2391 Bragg Street",
        "city": "Fresno",
        "state": "IL",
        "zipCode": "93611-6845"
      }
    },
    {
      "id": 13,
      "name": "Timothy Green",
      "email": "claire.green@example.com",
      "address": {
        "street": "1048 Franklin Avenue",
        "city": "Phoenix",
        "state": "UT",
        "zipCode": "85004-2887"
      }
    },
    {
      "id": 14,
      "name": "Leonard Cox",
      "email": "leonard.cox@example.com",
      "address": {
        "street": "2678 Marsh Street",
        "city": "Indianapolis",
        "state": "KY",
        "zipCode": "46204-3952"
      }
    },
    {
      "id": 15,
      "name": "Adrian Price",
      "email": "adrian.price@example.com",
      "address": {
        "street": "4390 Thistledown Drive",
        "city": "Jacksonville",
        "state": "WV",
        "zipCode": "32258-7603"
      }
    },
    {
      "id": 16,
      "name": "Miguel Daniels",
      "email": "miguel.daniels@example.com",
      "address": {
        "street": "1502 Sunny Day Drive",
        "city": "San Antonio",
        "state": "NM",
        "zipCode": "78205-7001"
      }
    },
    {
      "id": 17,
      "name": "Hazel Rose",
      "email": "hazel.rose@example.com",
      "address": {
        "street": "2341 Rosewood Lane",
        "city": "Charlotte",
        "state": "MS",
        "zipCode": "28202-2282"
      }
    },
    {
      "id": 18,
      "name": "Maxwell Snyder",
      "email": "maxwell.snyder@example.com",
      "address": {
        "street": "1576 Murphy Court",
        "city": "Denver",
        "state": "NV",
        "zipCode": "80202-1504"
      }
    },
    {
      "id": 19,
      "name": "Nathaniel Miller",
      "email": "nathaniel.miller@example.com",
      "address": {
        "street": "4915 Timber Ridge Road",
        "city": "Seattle",
        "state": "RI",
        "zipCode": "98101-2001"
      }
    },
    {
      "id": 20,
      "name": "Beverly Powell",
      "email": "beverly.powell@example.com",
      "address": {
        "street": "1548 Sunny Glen Lane",
        "city": "Las Vegas",
        "state": "ME",
        "zipCode": "89128-3494"
      }
    },
    {
      "id": 21,
      "name": "Jeremiah Mendoza",
      "email": "jeremiah.mendoza@example.com",
      "address": {
        "street": "4581 Boring Lane",
        "city": "Philadelphia",
        "state": "OK",
        "zipCode": "19108-7627"
      }
    },
    {
      "id": 22,
      "name": "Brenda Sanders",
      "email": "brenda.sanders@example.com",
      "address": {
        "street": "4572 Lynch Street",
        "city": "Boston",
        "state": "PA",
        "zipCode": "02108-2839"
      }
    },
    {
      "id": 23,
      "name": "Ella George",
      "email": "ella.george@example.com",
      "address": {
        "street": "4740 Lighthouse Drive",
        "city": "Salt Lake City",
        "state": "MT",
        "zipCode": "84111-1046"
      }
    },
    {
      "id": 24,
      "name": "Rene Hall",
      "email": "rene.hall@example.com",
      "address": {
        "street": "1597 Timber Ridge Road",
        "city": "San Francisco",
        "state": "VT",
        "zipCode": "94103-3001"
      }
    },
    {
      "id": 25,
      "name": "Gregory Robertson",
      "email": "gregory.robertson@example.com",
      "address": {
        "street": "3984 Sunny Glen Lane",
        "city": "Miami",
        "state": "ND",
        "zipCode": "33130-3816"
      }
    },
    {
      "id": 26,
      "name": "Dennis Bennett",
      "email": "dennis.bennett@example.com",
      "address": {
        "street": "2073 Rosewood Lane",
        "city": "Washington",
        "state": "KS",
        "zipCode": "20005-6771"
      }
    },
    {
      "id": 27,
      "name": "Vincent Ward",
      "email": "vincent.ward@example.com",
      "address": {
        "street": "2754 Oakmound Road",
        "city": "Dallas",
        "state": "MN",
        "zipCode": "75204-2719"
      }
    },
    {
      "id": 28,
      "name": "Norman Fisher",
      "email": "norman.fisher@example.com",
      "address": {
        "street": "1190 Hart Ridge Road",
        "city": "Atlanta",
        "state": "TN",
        "zipCode": "30303-1381"
      }
    },
    {
      "id": 29,
      "name": "Lester Simpson",
      "email": "lester.simpson@example.com",
      "address": {
        "street": "2296 Thrash Trail",
        "city": "Orlando",
        "state": "ID",
        "zipCode": "32810-1108"
      }
    },
    {
      "id": 30,
      "name": "Dustin Castillo",
      "email": "dustin.castillo@example.com",
      "address": {
        "street": "4570 Boring Lane",
        "city": "Houston",
        "state": "WA",
        "zipCode": "77036-3715"
      }
    },
    {
      "id": 31,
      "name": "Alicia Lawrence",
      "email": "alicia.lawrence@example.com",
      "address": {
        "street": "3170 Pearl Street",
        "city": "San Diego",
        "state": "HI",
        "zipCode": "92103-2672"
      }
    },
    {
      "id": 32,
      "name": "Terri Henderson",
      "email": "terri.henderson@example.com",
      "address": {
        "street": "4534 Monroe Street",
        "city": "Los Angeles",
        "state": "NH",
        "zipCode": "90017-2812"
      }
    },
    {
      "id": 33,
      "name": "Evan Lopez",
      "email": "evan.lopez@example.com",
      "address": {
        "street": "4333 Stonecoal Road",
        "city": "Charlotte",
        "state": "CO",
        "zipCode": "28202-1436"
      }
    },
    {
      "id": 34,
      "name": "Carlos Perez",
      "email": "carlos.perez@example.com",
      "address": {
        "street": "3403 Maple Street",
        "city": "Chicago",
        "state": "KS",
        "zipCode": "60607-2890"
      }
    },
    {
      "id": 35,
      "name": "Alfred Duncan",
      "email": "alfred.duncan@example.com",
      "address": {
        "street": "1832 Walnut Hill Drive",
        "city": "San Francisco",
        "state": "VT",
        "zipCode": "94108-2335"
      }
    },
    {
      "id": 36,
      "name": "Sally Cole",
      "email": "sally.cole@example.com",
      "address": {
        "street": "1795 Poplar Street",
        "city": "Austin",
        "state": "ME",
        "zipCode": "78701-1841"
      }
    },
    {
      "id": 37,
      "name": "Mia Olson",
      "email": "mia.olson@example.com",
      "address": {
        "street": "2502 Hickory Creek Drive",
        "city": "Denver",
        "state": "OR",
        "zipCode": "80202-2001"
      }
    },
    {
      "id": 38,
      "name": "Luke Fox",
      "email": "luke.fox@example.com",
      "address": {
        "street": "4855 Melrose Street",
        "city": "Seattle",
        "state": "IA",
        "zipCode": "98101-1102"
      }
    },
    {
      "id": 39,
      "name": "Brooklyn Murphy",
      "email": "brooklyn.murphy@example.com",
      "address": {
        "street": "4188 Randolph Street",
        "city": "Portland",
        "state": "MT",
        "zipCode": "97204-1748"
      }
    },
    {
      "id": 40,
      "name": "Evelyn Bailey",
      "email": "evelyn.bailey@example.com",
      "address": {
        "street": "1235 Elmwood Avenue",
        "city": "Phoenix",
        "state": "WI",
        "zipCode": "85004-2628"
      }
    },
    {
      "id": 41,
      "name": "Leonard Hughes",
      "email": "leonard.hughes@example.com",
      "address": {
        "street": "4530 Dogwood Road",
        "city": "Las Vegas",
        "state": "SD",
        "zipCode": "89128-2548"
      }
    },
    {
      "id": 42,
      "name": "Regina Gonzales",
      "email": "regina.gonzales@example.com",
      "address": {
        "street": "1936 Linda Street",
        "city": "San Antonio",
        "state": "NE",
        "zipCode": "78205-4638"
      }
    },
    {
      "id": 43,
      "name": "Travis Austin",
      "email": "travis.austin@example.com",
      "address": {
        "street": "2794 Meadowbrook Mall Road",
        "city": "Dallas",
        "state": "NM",
        "zipCode": "75204-1456"
      }
    },
    {
      "id": 44,
      "name": "Javier Olson",
      "email": "javier.olson@example.com",
      "address": {
        "street": "4501 Northaven Road",
        "city": "Houston",
        "state": "KS",
        "zipCode": "77036-1278"
      }
    },
    {
      "id": 45,
      "name": "Joann Freeman",
      "email": "joann.freeman@example.com",
      "address": {
        "street": "2828 Pin Oak Drive",
        "city": "San Diego",
        "state": "WA",
        "zipCode": "92101-1334"
      }
    },
    {
      "id": 46,
      "name": "Nathan Perry",
      "email": "nathan.perry@example.com",
      "address": {
        "street": "4127 Oakwood Circle",
        "city": "Los Angeles",
        "state": "HI",
        "zipCode": "90017-1023"
      }
    },
    {
      "id": 47,
      "name": "Julia Wallace",
      "email": "julia.wallace@example.com",
      "address": {
        "street": "2738 Meadowbrook Mall Road",
        "city": "Chicago",
        "state": "NH",
        "zipCode": "60607-2834"
      }
    },
    {
      "id": 48,
      "name": "Elijah Berry",
      "email": "elijah.berry@example.com",
      "address": {
        "street": "2829 Elk Creek Road",
        "city": "Charlotte",
        "state": "CO",
        "zipCode": "28202-1277"
      }
    },
    {
      "id": 49,
      "name": "Kathryn Carroll",
      "email": "kathryn.carroll@example.com",
      "address": {
        "street": "1675 Maple Court",
        "city": "Denver",
        "state": "KS",
        "zipCode": "80202-2035"
      }
    },
    {
      "id": 50,
      "name": "Martin Rose",
      "email": "martin.rose@example.com",
      "address": {
        "street": "1243 Hillview Street",
        "city": "Seattle",
        "state": "NV",
        "zipCode": "98101-1546"
      }
    }
  ])

  const searchResult = ref([])
  const searchVal = ref('')
  const helpersArray = ref([])

  const setSearchResult = val => {
    searchResult.value = val
  }

  const setSearchVal = val => {
    searchVal.value = val
  }

  const searchUsers = () => {
    setSearchResult(users.value.filter((user) => user.name.toLowerCase().includes(searchVal.value.toLowerCase())))
  }

  const setHelpersArray = val => {
    helpersArray.value = val
  }

  const searchDebounce = () => {
    const timeoutId = window.setTimeout(() => {}, 0);
    for (let id = timeoutId; id >= 0; id -= 1) {
        window.clearTimeout(id);
    }

    setTimeout(() => {
      if(searchVal.value.length < 3) {
          helpersArray.value = []
      } else {
          helpersArray.value = users.value.filter((user) => user.name.toLowerCase().includes(searchVal.value.toLowerCase())).slice(0, 10)
      }
  }, 500);
  }

  return { users, searchResult, searchVal, helpersArray, searchUsers, setSearchResult, setSearchVal, setHelpersArray, searchDebounce }
})
