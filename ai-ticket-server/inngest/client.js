
//creating an instance/client of inngest to be used in the server side of the application
//client.js will invoke inngest functions from the server side

import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "ticketing-system" }) //inngest will keep track of all the functions that we create under this id