# Panduan Messenger Untuk Pemula
Panduan ini akan menjelaskan cara menggunakan Facebook Messenger dengan optimal sebagai seorang pengusaha online. Panduan ini bisa diikuti tanpa perlu pengetahuan yang dalam mengenai bahasa pemrograman. Setelah mengikuti panduan ini, kalian akan bisa menggunakan Messenger untuk memudahkan pelanggan melakukan pemesanan atau menjawab pertanyaan mengenai produk kalian secara otomatis. 

## Toko online
Di masa sekarang ini membuka sebuah toko online sangatlah mudah, karena banyaknya platform yang memungkinkan membuka toko online.
Salah satu platform terbaik untuk membuka toko online adalah di Facebook.
Dengan lebih dari 2,7 miliar pengguna global, Facebook menjadi pilihan utama untuk membuka toko online.
Facebook memiliki banyak fitur yang membantu dalam memulai toko online, seperti halaman utama, pasar yang luas, dan media sosial messenger.

## Apa itu Messenger
Facebook Messenger adalah sebuah media sosial yang digunakan untuk komunikasi langsung, sama seperti Whatsapp dan LINE.
Messenger biasa digunakan untuk berkomunikasi secara pribadi dengan teman atau relasi, namun bisa juga digunakan untuk berhubungan dengan penjual dan pembeli.
Messenger memiliki beberapa keunggulan dibandingkan dengan media sosial lain, yaitu kerahasiaan data sensitif seperti nomor telepon, multiplatform, dan terintegrasi dengan Facebook sebagai media sosial terbesar di dunia.
Dengan messenger, penjual dan pembeli bisa saling berkomunikasi secara pribadi tanpa perlu membagikan data sensitif.

## Apa yang akan dijelaskan di panduan ini?
Di panduan ini akan dijelaskan cara memanfaatkan Facebook Messenger kedalam usaha toko online.
Selain itu, panduan ini juga akan menjelaskan cara mengoptimalkan sistem chat messenger kalian.
Hal-hal seperti memesan produk langsung dari messenger serta membuat sistem FAQ yang bisa menjawab pertanyaan pembeli secara otomatis.
Meskipun terdengar rumit, namun hal ini cukup mudah bahkan jika kalian belum pernah membuat program sebelumnya.
Panduan ini akan membantu kalian membuat hal tersebut dengan mudah dan dalam waktu yang singkat.

# Sebelum Mulai
Sebelum mulai menggunakan Messenger untuk toko online kalian, ada beberapa hal yang perlu dipersiapkan dulu seperti:
- **Halaman Facebook:** Hal ini diperlukan supaya calon pembeli dapat mencari dan melihat toko online milik kalian. 
  Kalian bisa membuat sebuah halaman Facebook dengan menggunakan [link ini](https://www.facebook.com/pages/create).
- **Akun Facebook Developer:** Kalian memerlukan sebuah akun Facebook Developer untuk membuat aplikasi yang berintegrasi ke Facebook.
  Kalian bisa membuat akun Facebook Developer di website [Facebook Developer](https://developers.facebook.com/).
  -**Facebook App:** aplikasi ini adalah tempat kode kalian akan berinteraksi dengan Facebook nantinya. 
  Kalian bisa membuat aplikasi baru dengan menekan tombol 'Create App' di [halaman ini](https://developers.facebook.com/apps/).
- **Akun Heroku:** Heroku adalah sebuah cloud platform atau tempat penyimpanan yang dapat menjalankan kode program, sehingga kita tidak perlu repot membuat server sendiri.
  Kalian bisa membuat akun heroku di website [Heroku](https://www.heroku.com/).
  
## Mengedit secara online
Jika kalian ingin mengerjakan kode kalian secara online melalui Github, kalian bisa menyalin repository ini melalui tombol 'Use this template'.
Setelah selesai nanti, kalian bisa mengirim kode kalian dari Github ke Heroku dengan menghubungkan repository ke app kalian.
Caranya dengan membuka Deployment method pada bagian Deploy di app Heroku.

## Mengedit secara offline
Jika kalian ingin mengerjakan kode kalian secara offline menggunakan text editor, kalian akan memerlukan Command Prompt.
Kalian juga akan memerlukan beberapa program yang perlu diinstal di komputer kalian.
semua program ini bersifat gratis jadi kalian tidak perlu mengeluarkan uang.
  - *[Git](https://git-scm.com/downloads):* Diperlukan untuk mendownload dan mengupload file dari Github.
  - *[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli):* Diperlukan untuk mengirim kode ke server Heroku.

Setelah selesai mendownload kedua aplikasi tersebut, bukalah Command Prompt lalu tulis perintah ini.
Kode kalian nanti akan berada di C:\Users\Username\beginner-messenger-tutorial
```
git clone https://github.com/Rakasyakti/Beginner-Messenger-Tutorial
cd beginner-messenger-tutorial
```
Saat kalian sudah selesai nanti, kalian bisa mengirim kode kalian ke heroku dengan memasukan perintah ini.
```
git init
heroku apps:create
git add .
git commit -m "My first commit"
git push heroku master
```

## Mengubah VERIFY_CODE kalian
Verify code adalah sebuah sandi yang digunakan untuk memverifikasi antara server kode dan server Facebook.
Verify code kalian bisa merupakan kombinasi apapun, sama seperti saat kalian membuat password.
Untuk mengubah verify code kalian, buka apps.js lalu ganti `<VERIFY_CODE_KALIAN>` dengan sandi yang kalian inginkan.
`<VERIFY_CODE_KALIAN>` seharusnya berada di baris 69 dan berada diantara tanda kutip, jangan hapus tanda kutipnya.

# Mempersiapkan App dan Variable
Setelah menyelesaikan tahap diatas, kalian bisa mulai mengatur app yang ada di Facebook Developer dan Heroku.

## Mendapatkan PAGE_ACCESS_TOKEN
PAGE_ACCESS_TOKEN adalah sebuah kode yang digunakan untuk mengizinkan kode di Heroku bekerja di app Facebook.
1. Buka dashboard app kalian, cari Messenger pada Add Product, lalu tekan tombol 'set up' pada Messenger.
2. Di pengaturan Messenger, cari bagian Access Token lalu tekan 'Add or Remove Pages'.
3. Pilih halaman Facebook kalian.
4. tekan tombol 'Generate Token' disamping halaman kalian, lalu simpan kode yang kalian dapat (kode ini akan digunakan nanti, jadi simpan di catatan dulu).

## Menyimpan PAGE_ACCESS_TOKEN
Kode PAGE_ACCESS_TOKEN yang kalian dapatkan tadi akan disimpan ke Heroku.
1. Buka bagian Settings pada app kalian.
2. Cari bagian Config Vars, lalu tekan tombol 'Reveal Config Vars'.
3. Tulis `PAGE_ACCESS_TOKEN` pada bagian KEY.
4. Masukkan kode PAGE_ACCESS_TOKEN yang kalian dapatkan tadi, lalu tekan tombol 'Add' disamping.

## Mengatur Webhook
Setelah menyelesaikan tahap diatas, kalian tinggal perlu mengatur Webhook antara Heroku dan Facebook.
1. Salin link app Heroku kalian dengan menekan tombol 'Open app' di dashboard lalu menyalin link yang ada (contoh: https://secret-inlet-48207.herokuapp.com/)
2. Kembali ke Facebook Developer, cari bagian Webhooks pada pengaturan Messenger (Tempat kalian dapat PAGE_ACCESS_TOKEN tadi).
3. Tekan tombol 'Add Callback URL' lalu masukan link yang kalian salin tadi ditambah /webhook dibelakangnya (contoh: https://limitless-atoll-69141.herokuapp.com/webhook).
4. Masukkan juga verify token yang kalian buat tadi, lalu tekan verify.

## Ujicoba Messenger
Jika kalian sudah mencapai tahap ini, maka kalian seharusnya sudah memiliki sebuah Messenger bot yang berfungsi.
Untuk mencoba Messenger bot kalian, kirim sebuah pesan ke halaman Facebook kalian.
Jika semua berjalan lancar, kalian akan mendapatkan sebuah balasan dari Messenger bot kalian.
Coba juga kirim sebuah gambar untuk melihat reaksi dari Messenger bot.

# Merubah Respon dari Messenger Bot
Messenger bot kalian memang sudah berfungsi, namun respon yang diberikan masih dikatakan hanya dasar saja.
Saat ini yang bisa dilakukan Messenger bot hanyalah mengulang pesan yang kita kirim dan mengonfirmasi gambar yang kita kirim.
Kita bisa menambahkan lebih banyak respon dengan menambahkannya di app.js.
Jika kalian membuka app.js, maka kalian akan menemukan dua funsgi yaitu `function handleMessage` (baris 93) dan `function handlePostback` (baris 136).
Semua respon Messenger Bot berdasarkan kode yang ditulis di kedua bagian itu.

## Function handleMessage
Bagian ini berkaitan dengan pesan-pesan yang masuk ke halaman.
```js
//bentuk pesan yang diterima
//pernyataan kedua dan seterusnya menggunakan else if
if (received_message.text) //pesan berbentuk teks
  {
    response = {} //balasan yang diberikan
  }
else if (received_message.attachments) //pesan berbentuk lampiran (foto, video, media)
else if (received_message.text ='Contoh kata') //pesan merupakan kalimat tertentu, disini "Contoh kata" (case-sensitive)
```

## Function handlePostback
Bagian ini berkaitan dengan respon yang diberikan dari template (akan dijelaskan nanti)
```js 
if (payload === 'nama_payload') //nama payload yang ditentukan dari template
  {
    response = {} //balasan yang diberikan
  }
```

## Text
Text merupakan jenis respon paling dasar.
Seperti namanya, respon text akan memberikan balasan dalam bentuk teks.
```js
//kode ini dimasukkan ke bagian response
"text": "Pesan balasan" //pesan yang akan dikirim sebagai balasan. Jangan lupa tambahkan koma diakhir jika ada lebih dari satu respon
```

## Template (Attachment)
Template adalah sebuah bentuk balasan yang terdiri dari judul, subjudul, gambar (jika ada), dan sampai dengan 3 tombol pilihan.
Contohnya tadi bisa kalian lihat saat mengirim gambar ke Messenger bot.
```js
//kode ini dimasukkan ke bagian response
"attachment": //jenis respon
  {
    "type": "template", //jenis attachment
    "payload": 
      {
        "template_type": "generic", //jenis template
        "elements": 
          [
            {
              "title": "Apakah ini gambar yang benar?", //judul dari template
              "subtitle": "Tekan tombol untuk menjawab", //subjudul dari template
              "image_url": <URL gambar>, //link gambar yang mau ditampilkan di template
              "buttons": //tombol yang bisa dipilih
                [
                  {
                    "type": "postback", //tipe respon (postback digunakan pada handlePostback)
                    "title": "Iya!", //tulisan yang muncul di tombol
                    "payload": "iya", //nama payload yang akan digunakan dalam handlePostback
                  },
                  {
                    "type": "postback",
                    "title": "Tidak!",
                    "payload": "tidak",
                  },
                  {
                    "type": "postback",
                    "title": "Mungkin!",
                    "payload": "mungkin",
                  }
                ],
            }
          ]
      }
  }
```

## Quick Reply
Quick reply merupakan pilihan kata yang disarankan.
Quick reply muncul diatas tempat memasukan pesan.
Berbeda dengan Template yang hanya bisa memberikan 3 pilihan, quick reply memungkinkan hingga 13 pilihan.
Meskipun juga memiliki payload, pilihan dari quick reply merupakan teks biasa, sehingga dimasukkan ke bagian function handleMessage
```js
//kode ini dimasukkan ke bagian response
"quick_replies": //jenis respon
  [
    {
      "content_type":"text", //tipe respon
      "title":"Biru", //tulisan yang muncul di quick reply
      "payload":"biru_warna",
    },
    {
      "content_type":"text",
      "title":"Merah",
      "payload":"merah_warna",
    }
  ]
```

## Membuat pesan menjadi terstruktur
Kode-kode diatas bisa kalian gunakan untuk membuat pesan terstruktur. 
Pesan terstruktur maksudnya pesan yang saling berhubungan melalui pilihan dan tombol dari respon.
Dengan menggunakan `message_received.text = 'Contoh kata'` dan `payload === 'contoh_payload'`, kalian bisa saling menghubungkan pesan dari bot kalian sehingga bisa memberikan pengalaman komunikasi yang lancar.

# Membuat Messenger Bot Kalian Publik
Sampai saat ini, Facebook App kalian masih dalam tahap development mode. 
Hanya kalian saja yang bisa mengakses Messenger bot halaman Facebook kalian. 
Untuk bisa merilis Messenger bot kalian, Facebook App kalian harus di review terlebih dahulu.
1. Buka bagian App Review pada menu app kalian.
2. Buka bagian Request untuk mengajukan peninjauan, lalu tekan tombol 'Request Permissions or Features'.
3. Kalian akan ditunjukan daftar apa saja yang bisa diakses app kalian, dengan advanced Access berarti publik dan Standard Access berarti hanya kalian yang bisa gunakan.
4. Cari Permission yang memiliki API Calls (biasanya pages_messaging) lalu tekan tombol 'Request Advanced Access'.
5. Kembali lagi ke bagian Request untuk melihat apa saja yang diperlukan untuk mereview app kalian.
6. Setelah app kalian diterima, baru kalian bisa menjalankan Messenger bot kalian secara publik di halaman Facebook kalian.

Jika kalian sudah sampai tahap ini maka kalian sudah selesai membangun sebuah Messenger Bot yang berfungsi.
Selamat, sekarang pesan dari Messenger akan diurus secara otomatis oleh Messenger Bot kalian, sehingga kalian tidak perlu selalu memgecek inbox kalian.

## Referensi dan Kode Inspirasi
- https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies
- https://developers.facebook.com/docs/messenger-platform/send-messages/templates
- https://github.com/fbsamples/messenger-platform-samples
