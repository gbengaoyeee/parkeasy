/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */

// import AWS from 'aws-sdk'
const AWS = require('aws-sdk');
var ses = new AWS.SES()
exports.handler = async (event) => {
  const secretOTP = Math.floor(100000 + Math.random() * 900000).toString()
  const email = event.request.userAttributes.email
  if (event.request.session.length === 2 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
    event.response.publicChallengeParameters = { trigger: 'true' };

    await sendOTP(email, secretOTP)

    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.answer = secretOTP //process.env.CHALLENGEANSWER;
  }
  return event;
};

const sendOTP = async (email , code) => {
  const msg = {
    Subject: {
      Data: "Your Verification Code",
    },
    Body: {
      Text: {
        Data: `Your verification code is ${code}`,
      }
    }
  }

  const params = {
    Destination: {
      ToAddresses: [
        email
      ]
    },
    Message: msg,
    Source: 'useparkeasy@gmail.com',
  }

  return ses.sendEmail(params).promise()
}