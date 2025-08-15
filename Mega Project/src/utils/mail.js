import Mailgen from "mailgen"
import nodemailer from "nodemailer"


//factory method
const sendMail = async(options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            
            name: 'Task Manager',
            link: 'https://mailgen.js/'
           
        }
    });

    var emailText = mailGenerator.generatePlaintext(options.mailgenContent); // without Html

    var emailText = mailGenerator.generate(options.mailgenContent); //with Html



    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
      auth: {
        user: process.env.MAILTRAP_SMTP_USER,
        pass: process.env.MAILTRAP_SMTP_PASS,
        },
      });


      const mail= await transporter.sendMail({
        from: 'mail.t6askmanager@example.com', // sender address
        to: options.email, // list of receivers
        subject: options.subject ,// Subject line
        text:emailText, // plain text body
        html: emailHTML, // html body
      });

      try {
        await transporter.sendMail(mail);
      } catch (error) {
        // As sending email is not strongly coupled to the business logic it is not worth to raise an error when email sending fails
        // So it's better to fail silently rather than breaking the app
        console.error(
          "Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file",
        );
        console.error("Error: ", error);
      }




    };




const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
      body: {
        name: username,
        intro: "Welcome to our app! We're very excited to have you on board.",
        action: {
          instructions:
            "To verify your email please click on the following button:",
          button: {
            color: "#22BC66", // Optional action button color
            text: "Verify your email",
            link: verificationUrl,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };
  };


  const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
      body: {
        name: username,
        intro: "We got a request to reset your password.",
        action: {
          instructions:
            "To change the password click the button",
          button: {
            color: "#22BC66", // Optional action button color
            text: "Reset your Password",
            link: passwordResetUrl,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };
  };


// sendMail( {
//     email: user.email,
//     subject:"aaaa",
//     mailGenContent : emailVerificationMailGenContent(
//         username 
//         ``
//     )
// })
export {sendMail}