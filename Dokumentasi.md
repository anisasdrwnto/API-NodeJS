Dokumentasi belajar membuat RESTful-API NodeJS : 
1. Table products di dalam database api_services
![Screenshot (2615)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/61b3828d-2c80-451b-852c-4b49bb567f5e)
2. Mendapatkan seluruh data produk di table products
![Screenshot (2616)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/dc415ead-2239-4d0e-9e32-8262d0e00a39)
3. Mendapatkan detail produk tertentu dengan id
![Screenshot (2617)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/390436c7-161e-4422-afd0-5ae667bd26c8)
4. Menambahkan data produk baru di table products
![Screenshot (2618)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/f40c018b-e03e-4645-95ad-6d6da07a4019)
![Screenshot (2619)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/2d8a5c94-8868-4e33-98dd-3b48c57de1eb)
5. Mengupdate atau mengedit data produk dengan id
![Screenshot (2620)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/da0bdc08-cbad-4c8a-953b-fb2418dc4660)
![Screenshot (2621)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/dc041fcb-b1c6-4967-bf01-75e0bdefca99)
6. Menghapus data produk dengan id
![Screenshot (2622)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/e8d3f8dd-4e2d-4c0d-beed-f39cf7c9a6fc)
![Screenshot (2624)](https://github.com/anisasdrwnto/API-NodeJS/assets/128852081/baffb356-cd96-4121-9ca5-9c5dc0392195)


NOTED:
API: Jembatan untuk menangani permintaan dari client(user) ke server dan mengirim kembali respons/tanggapan dari server ke client (user)
REST API: istilah umum yang mengacu pada API yang menggunakan konsep REST.
RESTful API: merujuk pada API yang lebih khusus dirancang dengan memperhatikan dan mengikuti semua prinsip REST dengan baik.

GET: Get data
POST: Insert data
PUT: Edit
PATCH: Edit
DELETE: delete

Apa bedanya PUT dan PATCH?
Jawab: PUT biasanya digunakan untuk mengubah semua isi field dari suatu tabel. Sedangkan PATCH digunakan untuk mengubah beberapa isi field tertentu di suatu tabel. 
Apakah PUT dan PATCH dapat digunakan berbarengan?
Jawab: Bisa saja, tetapi tinggal dibedakan dengan cara membuat 2 method. Walaupun URL sama, gapapa. Yang terpenting adalah beda method.
