
// creating an instance/client of inngest to be used in the server side of the application, this instance lets us create functions and trigger events

import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "ticketing-system" }) // inngest will keep track of all the functions that we create under this id