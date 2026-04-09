import { inngest } from "../client";
import User from "../../models/User";
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer";

// triggering an inngest function when a user signs up
const onUserSignUp = inngest.createFunction(
  { id: "on-user-signup", retries: 2 },
  { event: "user/signup" },
  async ({ event, step }) => {
    try {
      const { email } = event.data; // extract the email from the event data
      const user = await step.run("get-user-email", async () => {
        // run a step to get the user email
        const userObj = await User.findOne({ email }); // find the user in the db using the email from the event data
        if (!userObj) {
          throw new NonRetriableError("User no longer exists");
        }
        return userObj;
      });

      await step.run("send-welcome-email", async () => {
        const subject = `Welcome to the app`;
        const message = `Hi,
            \n\n
            Thanks for signing up. We're glad to have you onboard!
            `;
        sendMail(user.email, subject, message);
      });
    } catch (error) {
      console.error("Error occurred while processing user signup:", error);
    }
  },
);
