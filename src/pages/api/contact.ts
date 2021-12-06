import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const { OAuth2 } = google.auth

const email = process.env.MAILADDRESS
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN

const OAuth2Client = new OAuth2(clientId, clientSecret)
OAuth2Client.setCredentials({
  refresh_token: refreshToken
})

const accessToken = OAuth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
})

const mailer = ({senderMail, name, text}) => {
  const from = `${name} <${senderMail}>`
  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de ${name}`,
    text: `E-mail: ${senderMail}\n${text}`,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  const { name, content, senderMail } = req.body

  if(senderMail === '' || name === '' || content === '') {
    res.status(403).send({ message: 'Empty fields'})
    return
  }

  const mailerRes = await mailer({
    senderMail,
    name,
    text: content
  })

  res.send(mailerRes)
}