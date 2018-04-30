import sqlite3 as db
print 'conexion exitosa'

conn = db.connect('db.sqlite3')

print 'Se abrio la base de datos exitosamente'

cursor = conn.cursor()

cursor.execute('SELECT * FROM monitoreo_usuario')

for item in cursor:
   print 'id. ', item[0], ', correo: ', item[1], ', contrasena: ', item[2], ', compania: ', item[3]
