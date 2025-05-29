//import nodemailer from 'nodemailer';
//import * as aws from '@aws-sdk/client-ses';
import { Resend } from 'resend'

import {
	FROM_EMAIL,
	RESEND_API_KEY
	//AWS_ACCESS_KEY_ID,
	//AWS_SECRET_ACCESS_KEY,
	//AWS_REGION,
	//AWS_API_VERSION
} from '$env/static/private';
//import { z } from "zod";

const resend = new Resend(RESEND_API_KEY);

export default async function sendEmail(
	email: string,
	subject: string,
	bodyHtml?: string,
	bodyText?: string
) {
	//const hasAccessKeys = AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY;

	//const ses = new aws.SES({
	//	apiVersion: AWS_API_VERSION,
	//	region: AWS_REGION,
	//	...(hasAccessKeys
	//		? {
	//				credentials: {
	//					accessKeyId: AWS_ACCESS_KEY_ID || '',
	//					secretAccessKey: AWS_SECRET_ACCESS_KEY || ''
	//				}
	//			}
	//		: {})
	//});

	// create Nodemailer SES transporter
	//const transporter = nodemailer.createTransport({
	//	SES: { ses, aws }
	//});

	try {
		if (!bodyText) {
			const { data, error } = await resend.emails.send(
				{
					from: FROM_EMAIL,
					to: email,
					subject: subject,
					html: String(bodyHtml)
				});

			if (error) {
				throw new Error(`Error sending email: ${JSON.stringify(error)}`);
			}
			console.log(data);

		} else if (!bodyHtml) {
			const { data, error } = await resend.emails.send(
				{
					from: FROM_EMAIL,
					to: email,
					subject: subject,
					text: bodyText
				});

			if (error) {
				throw new Error(`Error sending email: ${JSON.stringify(error)}`);
			}
			console.log(data);

		} else {
			const { data, error } = await resend.emails.send(
				{
					from: FROM_EMAIL,
					to: email,
					subject: subject,
					html: bodyHtml,
					text: bodyText
				});

			if (error) {
				throw new Error(`Error sending email: ${JSON.stringify(error)}`);
			}
			console.log(data);

		}

		console.log('E-mail sent successfully!');
		return {
			statusCode: 200,
			message: 'E-mail sent successfully.'
		};
	} catch (error) {
		throw new Error(`Error sending email: ${JSON.stringify(error)}`);
	}
}
