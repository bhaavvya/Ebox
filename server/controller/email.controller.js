import Email from "../model/email.js"



export const saveSentEmails = async (request, response) => {
    try {
        const email = await new Email(request.body);
        email.save();
        console.log(email)
        response.status(200).json('Email saved successfully');
        console.log(response.message)
    } catch (error) {
        response.status(500).json(error.message);
    }
}


