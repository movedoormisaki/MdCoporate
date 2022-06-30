export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.APIKEY);

    const mail_body =
      req.body.company_name +
      '\r\n \r\n' +
      req.body.name +
      '様 \r\n \r\n この度は弊社サービスにお問い合わせをいただき、誠にありがとうございます。 \r\n 以下の内容でお問い合わせを受け付けいたしました。 \r\n ２営業日以内に、担当者よりご連絡いたしますので、今しばらくお待ちくださいませ。\r\n\r\n\r\n━━　お問い合わせ内容　━━\r\n' +
      '会社名：' +
      req.body.company_name +
      '\r\n お名前：' +
      req.body.name +
      '\r\n メールアドレス：' +
      req.body.email +
      '\r\n 電話番号：' +
      req.body.tel +
      '\r\n お問い合わせ内容：' +
      req.body.message +
      '\r\n ━━━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n\r\n\r\n' +
      '□・─────────────────────・□\r\n' +
      '「株式会社MOVEDOOR」\r\n' +
      'Email : info@movedoor.jp \r\n' +
      'TEL   : 080-4828-9250（代表）\r\n' +
      '□・─────────────────────・□';

    const msg = {
      to: req.body.email,
      from: 'info@movedoor.jp',
      subject: 'お問い合わせありがとうございます。【自動返信】',
      text: mail_body,
    };

    const ourmsg = {
      to: 'info@movedoor.jp',
      from: 'contact@movedoor.jp',
      subject: 'お問い合わせありがとうございます。【自動返信】',
      text: mail_body,
    };

    (async () => {
      try {
        await sgMail.send(msg);
        await sgMail.send(ourmsg);
        res.status(200).send('Message sent successfully.');
      } catch (error: any) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
        res.status(400).send('Message not sent.');
      }
    })();
  }
}
