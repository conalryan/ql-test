import { Contact } from './contact';

export const contactsMock = (): Contact[] => {
    return [{
        "_id": "5de91c005b98615393e74931",
        "index": 0,
        "firstName": "Browning",
        "lastName": "Graham",
        "company": "MELBACOR",
        "email": "browninggraham@melbacor.com",
        "phone": "+1 (906) 585-2525",
        "address": "920 Hastings Street, Roosevelt, Puerto Rico, 5573"
    },
    {
        "_id": "5de91c00d6b4d04e96ef44da",
        "index": 1,
        "firstName": "Mcmahon",
        "lastName": "Fulton",
        "company": "ILLUMITY",
        "email": "mcmahonfulton@illumity.com",
        "phone": "+1 (814) 489-3373",
        "address": "676 Bainbridge Street, Abrams, Mississippi, 2652"
    },
    {
        "_id": "5de91c007e02a7eb64124760",
        "index": 2,
        "firstName": "Susan",
        "lastName": "Dyer",
        "company": "ZAGGLE",
        "email": "susandyer@zaggle.com",
        "phone": "+1 (940) 547-2965",
        "address": "853 Decatur Street, Waumandee, Nevada, 7107"
    }];
}