
/**
 * Original code written by Facebook, Inc.
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * Untuk menjalankan kode ini, kalian perlu:
 *
 * 1. Menjalankan kode ini di server yang menerima Node.js, seperti Heroku
 * 3. Perbarui VERIFY_TOKEN kalian di baris 69
 * 4. Tambahkan PAGE_ACCESS_TOKEN halaman kalian ke environment vars
 *
 */

'use strict';
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
// mengimpor dependencies dan mempersiapkan server http
const 
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  app = express().use(body_parser.json()); // membuat server http express

// Mengatur server port dan mencatan pesan saat berhasil
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

// Menerima request POST di /webhook endpoint
app.post('/webhook', (req, res) => {  

  // Mengurai request body dari POST
  let body = req.body;

  // Mengecek apakah webhook event dari Page subscription
  if (body.object === 'page') {

    body.entry.forEach(function(entry) {

      // Mengambil body dari webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);


      // Mengambil PSID pengirim
      let sender_psid = webhook_event.sender.id;
      console.log('Sender ID: ' + sender_psid);

      // Mengecek apakah event merupakan pesan atau postback dan mengoper event ke handler function yang sesuai
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        
        handlePostback(sender_psid, webhook_event.postback);
      }
      
    });
    // Mengembalikan respon '200 OK' ke semua events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Mengembalikan respon '404 Not Found' jika event bukan dari page subscription
    res.sendStatus(404);
  }

});

// Menerima GET request di /webhook endpoint
app.get('/webhook', (req, res) => {
  
  /** PERBARUI VERIFY_TOKEN **/
  const VERIFY_TOKEN = "password123456";
  
  // mengurai params dari webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Mengecek apakah token dan mode sudah dikirim
  if (mode && token) {
  
    // Mengecek mode dan token yang dikirim benar
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Merespon dengan '200 OK' dan chanllenge token dari request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Merespon dengan '403 Forbidden' jika verify token tidak sesuai
      res.sendStatus(403);      
    }
  }
});

function handleMessage(sender_psid, received_message) {
  let response;
  
  // Mengecek apakah pesan mengandung teks
  if (received_message.text) {    
    // Buat payload untuk pesan teks dasar, yang akan ditambahkan ke body dari request kita ke Send API
    response = {
      "text": `Pesan "${received_message.text}" diterima. Sekarang coba kirim gambar!`
    }
  } else if (received_message.attachments) {
    // Dapatkan URL dari lampiran pesan
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Apakah ini gambar yang benar?",
            "subtitle": "Tekan tombol untuk menjawab",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Iya!",
                "payload": "iya",
              },
              {
                "type": "postback",
                "title": "Tidak!",
                "payload": "tidak",
              }
            ],
          }]
        }
      }
    }
  } 
  
  // Kirimkan pesan respon
  callSendAPI(sender_psid, response);    
}

function handlePostback(sender_psid, received_postback) {
  console.log('ok')
   let response;
  // Dapatkan payload dari postback
  let payload = received_postback.payload;

  // Menentukan respon berdasarkan postback payload
  if (payload === 'iya') {
    response = { "text": "Terima kasih!" }
  } else if (payload === 'tidak') {
    response = { "text": "Maaf, coba kirim gambar lagi" }
  }
  // Kirim pesan untuk mengakui postback
  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  // Bangun message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Kirim HTTP request ke Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
}
