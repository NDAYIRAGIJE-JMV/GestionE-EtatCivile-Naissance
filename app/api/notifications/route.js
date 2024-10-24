import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function GET(request) {
    try {
     //const data=  await request.json();
       
      // Configuration de l'envoi d'email avec SMTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Remplacez par votre serveur SMTP
        port: 465, // Remplacez par le port SMTP
        secure: true, // Remplacez par true si le port est 465
        auth: {
          user: 'ndayiragijejmv1@gmail.com', // Remplacez par votre adresse email
          pass: 'tsyj fzvq lbol brpm', // Remplacez par votre mot de passe
        },
      });
       //const to ="ndayiragijejmv1@gmail.com"
      // Envoi de l'email
      const info = await transporter.sendMail({
        from: 'FSI@.Edu.bi', // Remplacez par votre nom et adresse email
        to:"ndayiragijejmv1@gmail.com",
        subject:"salutation",
        text:"helloo",
      });

      console.log('Message envoyé: %s', info.messageId);
      return Response.json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      console.error(error);
      return Response.json({ message: "Erreur lors de l'envoi de l'email"});
    }
  } 
